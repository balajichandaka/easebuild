# GitHub Actions — EC2 Deploy Setup

Automated deploy: push to `prod` or `feature_1.0` → CI → SSH to the matching EC2 environment → rebuild container.

Workflow files:

- `.github/workflows/ci.yml` — build + lint
- `.github/workflows/bootstrap-ec2.yml` — **one-time** Docker + clone on new EC2
- `.github/workflows/deploy.yml` — deploy after CI passes

---

## 1. GitHub repository secrets

Go to **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

### SSH

| Secret | Value | Example |
|--------|-------|---------|
| `EC2_HOST` | EC2 public IP or domain | `54.123.45.67` |
| `EC2_USER` | SSH user | `ec2-user` |
| `EC2_SSH_KEY` | Full contents of your `.pem` private key | `-----BEGIN RSA PRIVATE KEY-----...` |
| `EC2_APP_DIR` | Optional app path on EC2 | `~/easebuild` |

### Application (written to `.env` on each deploy)

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

## 2. GitHub environments (required for two machines)

Create two environments under **Settings → Environments**:

| Environment | Branch | Machine |
|-------------|--------|---------|
| `production` | `prod` | Production EC2 |
| `staging` | `feature_1.0` | Staging EC2 |

Add the secrets from §1 to **each environment** with that machine's `EC2_HOST` and key.

Optional: enable **Required reviewers** on `production` only.

---

## 3. EC2 must pull code from GitHub

GitHub Actions SSHs into EC2 and runs `git fetch` + `git reset --hard origin/<branch>`.

### Option A — Public repository

No extra setup. Ensure the remote is correct on EC2:

```bash
cd ~/easebuild
git remote -v
git fetch origin prod
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

## 4. New machine checklist

1. Launch EC2 + Elastic IP + security group (22, 80, 443)
2. Create `production` and/or `staging` GitHub environments with secrets from §1
3. Push `prod` and `feature_1.0` branches to GitHub
4. Run **Bootstrap EC2 (one-time)** workflow for each environment
5. Run **Deploy to EC2** workflow (or push to `prod`)
6. Configure DNS + Nginx + SSL on EC2 (manual, one-time)

Nginx and SSL are **not** managed by GitHub Actions — only the Docker container is rebuilt on deploy.

### Nginx example (reverse proxy to :3000)

```nginx
server {
    listen 80;
    server_name easebuild.in www.easebuild.in;
    location / {
        proxy_pass http://127.0.0.1:3000;
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

## 5. How deploy is triggered

| Trigger | Branch | Target environment |
|---------|--------|-------------------|
| Push to `prod` | `prod` | **production** |
| Push to `feature_1.0` | `feature_1.0` | **staging** |
| Manual: **Bootstrap EC2** | — | Choose production or staging |
| Manual: **Deploy to EC2** | chosen branch | matching environment |

Monitor: **GitHub → Actions** tab.

---

## 6. Typical developer workflow

```bash
# Develop on main, merge to staging for preview
git checkout feature_1.0
git merge main
git push origin feature_1.0
# → CI + deploy to staging EC2

# Promote to production
git checkout prod
git merge feature_1.0
git push origin prod
# → CI + deploy to production EC2
```

---

## 7. Troubleshooting

| Failure | Fix |
|---------|-----|
| `ssh: handshake failed` | Check `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY`; security group port 22 |
| `git fetch` fails on EC2 | Set up deploy key (private repo) or fix `git remote` |
| `docker-compose: command not found` | Run **Bootstrap EC2** or install compose on EC2 |
| CI fails on lint | Fix lint locally: `npm run lint` |
| Deploy skipped | CI must pass first; check CI job logs |
| Bootstrap curl fails | Push `prod`/`feature_1.0` branches first so bootstrap script is on GitHub |

---

## 8. Verify after deploy

On EC2:

```bash
docker ps
curl -I http://localhost:3000
```

Browser: https://easebuild.in
