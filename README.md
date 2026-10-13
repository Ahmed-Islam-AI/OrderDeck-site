# OrderDeck marketing site

Static Next.js + Tailwind site for OrderDeck. One page (plus Privacy and Terms), one conversion: **Book a demo** on WhatsApp.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
npm run check      # self-check of the WhatsApp link builder + config
```

## Before launch

1. **`site.config.ts`**: set `whatsapp`, `email`, `url` (your domain), `city`, socials, and optionally an analytics ID.
   `npm run check:deploy` (run in CI) refuses to deploy while any of these is still a placeholder.
2. **Legal**: `app/privacy` and `app/terms` are starter text. Have them reviewed. If you use GA4, the privacy page should mention cookies.

## Where things live

| What | File |
|------|------|
| Contact details, domain, analytics, per-button WhatsApp messages | `site.config.ts` |
| All page copy (translate this file for Urdu later) | `content.ts` |
| Page sections | `components/sections.tsx` |
| Hero dashboard + phone preview (sample data) | `components/hero-visual.tsx` |
| Small product visuals inside step / feature / benefit cards | `components/visuals.tsx` |
| Scroll-animated statement bands | `components/kinetic-band.tsx` |
| Header / footer | `components/chrome.tsx` |
| Colours (light + dark) | `app/globals.css` |

Each WhatsApp button pre-fills a different message (see `ctaMessages`), so every chat tells you which part of the page it came from.

## Deploy (GitHub Pages)

1. Push this folder to a GitHub repo on `main`.
2. Repo **Settings > Pages > Source: GitHub Actions**.
3. `.github/workflows/deploy.yml` builds, runs the deploy check, writes `CNAME` from `site.url`, and publishes.
4. At your domain registrar, point DNS at GitHub Pages (A records to 185.199.108-111.153, or a CNAME for `www` to `<user>.github.io`).
