# GitHub Actions — EC2 Deploy Setup

Single-machine deploy: push to `release_1.0` → CI → SSH to EC2 → rebuild container.

Workflow files:

- `.github/workflows/ci.yml` — build + lint
- `.github/workflows/bootstrap-ec2.yml` — **one-time** Docker + clone on EC2
- `.github/workflows/deploy.yml` — deploy after CI passes

---

## 1. GitHub repository secrets

Go to **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

### SSH (required)

| Secret | Value | Example |
|--------|-------|---------|
| `EC2_HOST` | EC2 public IP or domain | `54.123.45.67` |
| `EC2_USER` | SSH user | `ec2-user` |
| `EC2_SSH_KEY` | Full contents of your `.pem` private key | `-----BEGIN RSA PRIVATE KEY-----...` |
| `EC2_APP_DIR` | Optional app path on EC2 | `~/easebuild` |

### Application (optional — written to `.env` on each deploy)

| Secret | Value | Example |
|--------|-------|---------|
| `APP_PUBLIC_URL` | Public site URL | `https://easebuild.in` |
| `CONTACT_EMAIL` | Contact page email | `hello@easebuild.in` |

To copy the PEM key:

```bash
cat your-key.pem
```

Paste the entire file including `BEGIN` and `END` lines.

---

## 2. EC2 must pull code from GitHub

GitHub Actions SSHs into EC2 and runs `git fetch` + `git reset --hard origin/release_1.0`.

### Option A — Public repository

No extra setup. Ensure the remote is correct on EC2:

```bash
cd ~/easebuild
git remote -v
git fetch origin release_1.0
```

### Option B — Private repository (deploy key)

On EC2:

```bash
ssh-keygen -t ed25519 -C "ec2-deploy" -f ~/.ssh/github_deploy -N ""
cat ~/.ssh/github_deploy.pub
```

1. GitHub repo → **Settings → Deploy keys → Add deploy key**
2. Title: `EC2 deploy`
3. Paste the public key
4. Read-only access is enough

On EC2, configure SSH for GitHub:

```bash
cat >> ~/.ssh/config <<'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_deploy
  IdentitiesOnly yes
EOF
chmod 600 ~/.ssh/config ~/.ssh/github_deploy

cd ~/easebuild
git remote set-url origin git@github.com:balajichandaka/easebuild.git
git fetch origin
```

---

## 3. Setup checklist

1. Launch EC2 + Elastic IP + security group (22, 80, 443)
2. Add secrets from §1 under **repository** secrets (no GitHub environments needed)
3. Push the `release_1.0` branch to GitHub
4. Push to `release_1.0` — first deploy auto-bootstraps EC2 (or run **Bootstrap EC2** manually first)
5. Configure DNS + Nginx + SSL on EC2 (manual, one-time)

Nginx and SSL are **not** managed by GitHub Actions — only the Docker container is rebuilt on deploy.

### Nginx example (reverse proxy to :3001)

Use port **3001** on the host when this EC2 also runs CA Firm Ops (CRM frontend uses 3000).

```nginx
server {
    listen 80;
    server_name easebuild.in www.easebuild.in;
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Then run `sudo certbot --nginx -d easebuild.in -d www.easebuild.in`.

---

## 4. How deploy is triggered

| Trigger | What happens |
|---------|----------------|
| Push to `release_1.0` | CI + deploy automatically |
| Manual: **Bootstrap EC2** | One-time Docker + clone |
| Manual: **Deploy to EC2** | CI + deploy on demand |

Monitor: **GitHub → Actions** tab.

---

## 5. Typical developer workflow

```bash
# Develop on main, deploy when ready
git checkout release_1.0
git merge main
git push origin release_1.0
# → CI + deploy to EC2
```

---

## 6. Troubleshooting

| Failure | Fix |
|---------|-----|
| `ssh: handshake failed` | Check `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY`; security group port 22 |
| `git fetch` fails on EC2 | Set up deploy key (private repo) or fix `git remote` |
| `Repo not found at .../easebuild` | Push this fix, then re-run deploy — it will auto-bootstrap on first run |
| `docker-compose: command not found` | Run **Bootstrap EC2** |
| CI fails on lint | Fix lint locally: `npm run lint` |
| Deploy skipped | CI must pass first; check CI job logs |
| Bootstrap curl fails | Push `release_1.0` branch first so bootstrap script is on GitHub |

---

## 7. Verify after deploy

On EC2:

```bash
docker ps
curl -I http://localhost:3001
```

Browser: https://easebuild.in
