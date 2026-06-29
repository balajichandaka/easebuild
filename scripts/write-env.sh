#!/usr/bin/env bash
# Write repo-root .env from GitHub Actions secrets.
set -euo pipefail

APP_DIR="${APP_DIR:-$HOME/easebuild}"
ENV_FILE="$APP_DIR/.env"

SITE_URL="${APP_PUBLIC_URL:-https://easebuild.in}"
CONTACT="${CONTACT_EMAIL:-hello@easebuild.in}"

if [ -z "${APP_PUBLIC_URL:-}" ] && [ ! -f "$ENV_FILE" ]; then
  echo "No APP_PUBLIC_URL secret — using docker-compose defaults"
  exit 0
fi

if [ -z "${APP_PUBLIC_URL:-}" ] && [ -f "$ENV_FILE" ]; then
  echo "Using existing $ENV_FILE"
  exit 0
fi

umask 077
{
  printf '%s=%s\n' APP_PUBLIC_URL "$SITE_URL"
  printf '%s=%s\n' CONTACT_EMAIL "$CONTACT"
  printf '%s=%s\n' APP_PORT "${APP_PORT:-3000}"
} > "$ENV_FILE"

echo "Wrote $ENV_FILE from deploy secrets"
