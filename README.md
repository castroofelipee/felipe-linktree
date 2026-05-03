# Linktree built with Next.js
Fast, simple and customizable linktree

## Analytics (Umami)
Set the following environment variables (see `.env.example`):

- `NEXT_PUBLIC_UMAMI_SRC`
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID`

Troubleshooting (production):

- Ensure the env vars are set in your hosting provider and redeploy (the script is only rendered when both are present).
- Confirm the domain configured in Umami matches the production host (e.g. `www.` vs non-`www`).
- View page source and search for `data-website-id` to confirm the script is being injected.

Tip (adblock / privacy tools):

- If `cloud.umami.is` is blocked, set `NEXT_PUBLIC_UMAMI_SRC` to `/umami/script.js` (this repo proxies the script and `/api/send` via `next.config.ts`).
