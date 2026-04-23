# SEO Strategy — Pratik Kharva Portfolio

![3D Parallax Profile Card](./docs/preview-card.svg)
![Multi-section Portfolio](./docs/preview-portfolio.svg)

Goal: rank prominently for name-based queries (**Pratik Kharva**, **Pratik**, **Kharva**) and role queries (**React Developer**, **Software Developer**, **Full Stack Developer**, **Node.js Developer**, **MERN Developer Ahmedabad**).

> **Base URL assumption:** `https://pratikkharva.github.io/`. If your GitHub Pages URL is different (e.g. `https://pratik-kharva27.github.io/`), global-replace across `sitemap.xml`, `robots.txt`, both HTML files, and the JSON-LD blocks.

---

## 1. Technical SEO — already implemented in code

| Item | File(s) |
|---|---|
| Canonical URLs | `index.html`, `website.html` |
| hreflang (en, x-default) | both HTML |
| `meta robots: index,follow` + per-bot directives | both HTML |
| Open Graph + Twitter Card (complete) | both HTML |
| JSON-LD `Person`, `WebSite`, `ProfilePage` | `index.html` |
| JSON-LD `Person`, `ProfessionalService`, `BreadcrumbList` | `website.html` |
| `sitemap.xml` with `<lastmod>`, `<priority>` | root |
| `robots.txt` with `Sitemap:` directive | root |
| Favicon (inline SVG) + apple-touch-icon | both HTML |
| `preload` on LCP image + `fetchpriority="high"` | both HTML |
| `preconnect` to Google Fonts, `dns-prefetch` to demolab | both HTML |
| Semantic HTML (`<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`) | both HTML |
| `lang="en"` | both HTML |
| Skip-to-content link | `website.html` |
| Geo tags (`geo.region`, `ICBM`) | both HTML |
| Mobile viewport, `color-scheme`, `theme-color` | both HTML |
| Accessible images with descriptive, keyword-rich `alt` | both HTML |
| Internal cross-links between the two pages | both HTML |

---

## 2. Before going live — action items

### A. Set the canonical URL
If `https://pratikkharva.github.io/` is **not** your actual production URL, do a repo-wide find-and-replace to your real URL. Files affected:
- `sitemap.xml`
- `robots.txt`
- `index.html` (canonical, og:url, twitter, JSON-LD `@id`/`url`)
- `website.html` (same)

### B. Verification tokens
Replace all three placeholder tokens in both HTML files once you've registered:

| Console | Meta tag | Where to get it |
|---|---|---|
| Google Search Console | `google-site-verification` | <https://search.google.com/search-console> |
| Bing Webmaster Tools | `msvalidate.01` | <https://www.bing.com/webmasters> |
| Yandex Webmaster | `yandex-verification` | <https://webmaster.yandex.com> |

### C. Submit sitemap + request indexing
1. In **Google Search Console**: Add property → verify → *Sitemaps* → submit `sitemap.xml`.
2. In **Bing Webmaster Tools**: Add site → verify → *Sitemaps* → submit.
3. For each key URL, hit **URL Inspection → Request Indexing** in Search Console.

### D. Validate structured data
- <https://search.google.com/test/rich-results> — paste both URLs.
- <https://validator.schema.org/> — paste both URLs.
- Fix any warnings flagged on the `Person` / `ProfessionalService` schemas.

### E. Deploy on GitHub Pages
1. Create a repo named `pratikkharva.github.io` (or `pratik-kharva27.github.io`) on the matching GitHub account.
2. Push all files to `main`.
3. *Settings → Pages*: Source = `main` / `(root)`.
4. Wait ~1 minute; HTTPS is automatic.
5. Verify the live site before submitting to Search Console.

---

## 3. Off-page SEO — you must do this

This is where most ranking power comes from. Do these in order:

### 3.1 Social profiles (authoritative backlinks + Knowledge Graph signal)
Make sure the profile URL, display name, and bio match the portfolio exactly (**same name, city, email**):

- [ ] **GitHub** — add portfolio URL to your GitHub profile's "Website" field, pin your best repos, add README.md to `pratik-kharva27/pratik-kharva27` profile repo with portfolio link.
- [ ] **LinkedIn** — add portfolio URL in *Contact Info → Website*. Add "Pratik Kharva" as preferred name. Use the same profile picture as `pratik.jpeg` for consistency across Knowledge Graph signals.
- [ ] **Stack Overflow** — complete profile, add portfolio link.
- [ ] **Dev.to** / **Hashnode** — sign up with a handle like `pratikkharva`, add portfolio URL.
- [ ] **X / Twitter** — add portfolio link to bio; post occasional project updates linking back.
- [ ] **CodePen** — portfolio URL in profile.
- [ ] **Kaggle / Medium / GitLab** (optional) — same.
- [ ] **Google Business Profile** — *only* if you want local Ahmedabad visibility; optional for freelancers.

**Why:** search engines use the `sameAs` array in your JSON-LD to disambiguate you. The more of those profiles exist and point back to the portfolio, the stronger the entity signal.

### 3.2 Backlink building
- [ ] Guest posts on **Dev.to**, **Hashnode**, **freeCodeCamp News** — technical writeups that link back to `pratikkharva.github.io`.
- [ ] Answers on **Stack Overflow** with portfolio in profile.
- [ ] Submit portfolio to **directories**: awwwards, cssdesignawards, mustseenportfolio, httpster.
- [ ] Post projects on **Product Hunt**, **Indie Hackers**, **Reddit** (r/webdev, r/reactjs — follow subreddit rules).
- [ ] Tag project demos on **LinkedIn** with your portfolio URL.

### 3.3 Content
- [ ] Write 2–3 technical blog posts on topics you actually shipped (Shopify webhook processing, Chrome-extension + admin-panel patterns, React + MySQL integration). Host on Dev.to or directly on the portfolio in a future `/blog/` section. Link back to the home page.
- [ ] Create short case-study sections for each project in `website.js` with measurable outcomes ("reduced webhook latency from X to Y", "handled N events/day").

### 3.4 Analytics & monitoring
- [ ] Add **Google Analytics 4** or **Plausible** / **Umami** (privacy-friendly) snippet before `</head>`.
- [ ] Add **Microsoft Clarity** for free heatmaps / session recordings.
- [ ] Set up **Google Search Console** email alerts for coverage / Core Web Vitals issues.

### 3.5 Performance monitoring
Run each of these periodically and track the score:
- <https://pagespeed.web.dev/> (Lighthouse + CrUX field data)
- <https://www.webpagetest.org/>
- <https://search.google.com/test/mobile-friendly>

Target Core Web Vitals:
- **LCP** < 2.5s (the preloaded `pratik.jpeg` helps)
- **INP** < 200ms
- **CLS** < 0.1 (the explicit `width/height` on `<img>` is already set)

---

## 4. Keyword targeting map

| Page | Primary keywords | Secondary keywords |
|---|---|---|
| `index.html` (3D card) | **Pratik Kharva**, **Full-Stack Developer** | React Developer, Ahmedabad, MERN, MCA Developer |
| `website.html` (full portfolio) | **Pratik Kharva Portfolio**, **React Developer Ahmedabad** | Software Developer, Node.js Developer, Hire React Developer, Freelance Developer India, Shopify Developer |

Keywords appear **naturally** in: `<title>`, `<h1>`, `<h2>`, meta description, first paragraph of each section, image `alt`, JSON-LD `knowsAbout`, and `serviceType`. Do **not** stuff.

---

## 5. Quarterly hygiene

Every 3 months:
- [ ] Update `lastmod` in `sitemap.xml`.
- [ ] Swap in one fresh project in `website.js`.
- [ ] Re-run PageSpeed Insights; fix any regressions.
- [ ] Check Search Console *Performance → Queries* — add any rising queries you rank for into meta description / keywords.
- [ ] Check *Search Console → Coverage* for indexing errors.
- [ ] Refresh résumé PDF (`PRATIK_KHARVA_.pdf`); bump the cta__meta "Updated Jan 2026" line in `index.html`.

---

## 6. What *not* to do

- Don't buy backlinks or use PBNs.
- Don't keyword-stuff `alt` text or hidden text — Google's spam systems flag this.
- Don't duplicate `<title>` / description across the two pages — they're already differentiated, keep them so.
- Don't submit to low-quality free-for-all link directories.
- Don't block the site via `robots.txt`, `meta noindex`, or Cloudflare rules in prod — double-check before launch.
