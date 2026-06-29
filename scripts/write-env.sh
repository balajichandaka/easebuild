#!/usr/bin/env bash
# Write repo-root .env from GitHub Actions secrets (profile: prod | staging).
set -euo pipefail

APP_DIR="${APP_DIR:-$HOME/easebuild}"
ENV_FILE="$APP_DIR/.env"
PROFILE="${WRITE_ENV_PROFILE:-prod}"

if [ -n "${APP_PUBLIC_URL:-}" ]; then
  SITE_URL="$APP_PUBLIC_URL"
elif [ "$PROFILE" = "staging" ]; then
  SITE_URL="${APP_PUBLIC_URL:-http://localhost:3000}"
else
  SITE_URL="${APP_PUBLIC_URL:-https://easebuild.in}"
fi

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

echo "Wrote $ENV_FILE from deploy secrets (profile: $PROFILE)"
