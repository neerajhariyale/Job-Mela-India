#!/bin/sh

set -e

cd "$(dirname "$0")/jobportal-backend"

if command -v pnpm >/dev/null 2>&1 && [ -f pnpm-lock.yaml ]; then
  pnpm install --frozen-lockfile
else
  npm install
fi

PORT="${PORT:-5001}" node server.js

