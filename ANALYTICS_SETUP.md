# Google Analytics & Google Search Console — Setup Guide

A complete guide for setting up, verifying, and monitoring Google Analytics 4 (GA4) and Google Search Console (GSC) for the Pratik Kharva portfolio site (`https://pratikkharva.github.io/`).

---

## Current status

Neither tool is currently set up on the site.

**Google Analytics**
- No `gtag.js`, no `googletagmanager.com`, and no GA4 measurement ID (`G-XXXXXXXXXX`) found in `website.html`, `index.html`, `website.js`, or `script.js`.
- Zero analytics tracking is running today.

**Google Search Console**
- `website.html:20` and `index.html:21` both contain the placeholder token `REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN` — a stub left in the template, not a real verification value.
- Same placeholder situation for Bing (`msvalidate.01`) and Yandex (`yandex-verification`).

Start with GSC, then add GA4. GSC is the more important of the two for a portfolio because it shows how Google ranks and surfaces the site.

---

## Part 1 — Set up Google Search Console (GSC)

GSC reports how Google sees and ranks the site: which queries surface it, which pages are indexed, technical issues, and click-through rates from search.

### Setup steps

1. Go to [search.google.com/search-console](https://search.google.com/search-console) and sign in with your Google account.
2. Click **Add property** → choose **URL prefix** (not Domain, since you're on `pratikkharva.github.io`).
3. Enter: `https://pratikkharva.github.io/`
4. Pick the **HTML tag** verification method. It shows a tag like:
   ```html
   <meta name="google-site-verification" content="AbCdEf123...xyz" />
   ```
5. Copy the `content` value and replace the placeholder in **two places**:
   - `website.html:20`
   - `index.html:21`
6. Commit, push, wait ~1 minute for GitHub Pages to deploy, click **Verify** in GSC.

### Submit the sitemap

The project already has `sitemap.xml` in the repo. In GSC:

- Left nav → **Sitemaps** → enter `sitemap.xml` → **Submit**.

Google will start crawling within a day or two.

---

## Part 2 — Set up Google Analytics 4 (GA4)

### Setup steps

1. Go to [analytics.google.com](https://analytics.google.com) → **Start measuring**.
2. Create an **Account** (name: "Pratik Kharva") → create a **Property** (name: "Portfolio", timezone: IST, currency: INR).
3. Choose **Web** as the platform → enter `https://pratikkharva.github.io/` → stream name: "Portfolio Web".
4. GA4 provides a **Measurement ID** that looks like `G-XXXXXXXXXX` and a snippet:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
5. Paste this right before `</head>` in **both** `website.html` and `index.html`. Keep it consistent across both files or GA will miss pageviews on one of them.
6. Deploy, then in GA → **Reports → Realtime**, open the site in a new tab. You should see 1 active user within ~30 seconds — that confirms it works.

### Recommended GA4 setup tweaks (5 min)

- **Admin → Data streams → your stream → Enhanced measurement**: leave ON. It auto-tracks scrolls, outbound clicks, file downloads (résumé!), and video views.
- **Admin → Data retention**: change from default 2 months to **14 months** (max on GA4 free tier). Without this you lose historical comparisons.
- **Admin → Google Signals**: optionally enable for demographics/interest data.
- Link GA4 ↔ GSC: **Admin → Property → Search Console links → Link** to your verified GSC property. This unlocks search-query data inside GA reports.

---

## Part 3 — Monitoring playbook

After both are live, wait **at least 48 hours** for data to accumulate before drawing conclusions.

### Daily (30 seconds)

**GA4 → Reports → Realtime**
- Are people on the site right now? Which page?
- After posting on LinkedIn or sharing your résumé, refresh this to see the traffic spike live.

### Weekly (5 minutes — GA4)

**GA4 → Reports → Acquisition → Traffic acquisition**

Columns to watch:

- **Sessions** — total visits.
- **Users** — unique people.
- **Session source/medium** — where they came from:
  - `google / organic` = SEO is working.
  - `linkedin.com / referral` = your posts are landing.
  - `(direct) / (none)` = someone typed the URL or clicked a résumé link.
  - `github.com / referral` = recruiters from your GitHub profile.
- **Engagement rate** — % of sessions that lasted 10+ sec or had interaction. Aim for >60% on a portfolio.
- **Average engagement time** — how long they stayed. <30s = they bounced; 1–3 min = they read; 3+ min = strong signal.

**GA4 → Reports → Engagement → Pages and screens**

- Which sections/pages hold attention? If `#hero` gets 100 views but `#contact` gets 5, the funnel leaks before CTA.

**GA4 → Reports → Engagement → Events**

Look for auto-tracked events:

- `file_download` → résumé downloads (the key recruiter-intent signal).
- `click` (outbound) → clicks to GitHub / LinkedIn.
- `scroll` → how deep people scroll (90% = read to the footer).

### Weekly (5 minutes — GSC)

**GSC → Performance → Search results**

Four metrics at the top:

- **Total clicks** — visits from Google search.
- **Total impressions** — how many times the site appeared in results.
- **Average CTR** (clicks ÷ impressions) — <2% means the title/description isn't compelling; rewrite.
- **Average position** — where the site ranks. Position 1–3 = page 1 top; 4–10 = page 1 bottom; 11+ = page 2, nobody clicks.

Scroll to the **Queries** tab to see what people actually typed to find the site. Gold for portfolio SEO — e.g. if "React developer Ahmedabad" brings 50 impressions but 0 clicks, the snippet for that query needs work.

**GSC → Indexing → Pages**

- **Indexed** vs **Not indexed**. Every important page (hero, website.html) should be indexed. If not, click the URL to see why (often "Crawled – currently not indexed" means Google saw it but thinks it's thin content).

**GSC → Experience → Core Web Vitals**

- Good / Needs improvement / Poor on mobile and desktop. Fix any "Poor" URLs — ranking penalty.

### Monthly (15 minutes)

- Compare this month vs last month in GA4 → **Reports → Reports snapshot** (use the date-range comparison toggle).
- Identify the **top 3 traffic sources** and double down — if LinkedIn drives the best engagement, post more there.
- Identify the **top 3 landing pages** — make sure their meta descriptions and H1s are optimized.
- In GSC, export the **Queries** report, sort by impressions descending, and for any query where you're in position 5–15 with decent impressions, tweak the content to target it better. Position 5 → 3 is often a 2–3× click bump.

---


Key metrics cheat sheet for a portfolio                   
                                                                                                                                  
  ┌─────────────────────────────────────┬────────────────────────────────────┬────────────────────────────────────────────────┐
  │               Metric                │               Where                │             What "good" looks like             │   
  ├─────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────┤
  │ Users / month                       │ GA4 Acquisition                    │ 100+ after 3 months is a healthy start         │
  ├─────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────┤
  │ Engagement rate                     │ GA4 Acquisition                    │ >60%                                           │   
  ├─────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────┤   
  │ Avg. engagement time                │ GA4 Engagement                     │ >1 min                                         │   
  ├─────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────┤   
  │ Résumé downloads (file_download)    │ GA4 Events                         │ Any download from a non-direct source =        │
  │                                     │                                    │ recruiter interest                             │   
  ├─────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────┤
  │ Contact form submits                │ GA4 Events (needs custom event —   │ Primary conversion                             │   
  │                                     │ see below)                         │                                                │
  ├─────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────┤   
  │ Clicks from Google                  │ GSC Performance                    │ Growing week-over-week                         │
  ├─────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────┤   
  │ Position on your own name ("Pratik  │ GSC Queries                        │ Should be #1 within 2–4 weeks                  │
  │ Kharva")                            │                                    │                                                │   
  ├─────────────────────────────────────┼────────────────────────────────────┼────────────────────────────────────────────────┤
  │ Indexed pages                       │ GSC Indexing                       │ All important URLs "Indexed"                   │   
  └─────────────────────────────────────┴────────────────────────────────────┴────────────────────────────────────────────────┘

## Key metrics cheat sheet

| Metric | Where | What "good" looks like |
|---|---|---|
| Users / month | GA4 Acquisition | 100+ after 3 months is a healthy start |
| Engagement rate | GA4 Acquisition | >60% |
| Avg. engagement time | GA4 Engagement | >1 min |
| Résumé downloads (`file_download`) | GA4 Events | Any download from a non-direct source = recruiter interest |
| Contact form submits | GA4 Events (needs custom event — see below) | Primary conversion |
| Clicks from Google | GSC Performance | Growing week-over-week |
| Position on your own name ("Pratik Kharva") | GSC Queries | Should be #1 within 2–4 weeks |
| Indexed pages | GSC Indexing | All important URLs "Indexed" |

---

## Optional upgrade — track the contact form as a conversion

GA4's auto events won't catch contact form submissions. In `website.js`, after a successful form submit, push a custom event:

```javascript
if (typeof gtag === 'function') {
  gtag('event', 'contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact'
  });
}
```

Then in GA4 → **Admin → Events → Mark as key event** on `contact_form_submit`. Contact form submissions will show up in the Conversions report — the single most important recruiter signal after résumé downloads.

---

## Interpreting results — a quick framework

**Traffic volume alone is a vanity metric.** For a portfolio, what matters is *intent-weighted engagement*. In order of value:

1. **Contact form submissions** — direct inbound interest. Every submission from a non-direct source is a hot lead.
2. **Résumé downloads from LinkedIn / Google referrals** — the visitor cared enough to pull the PDF.
3. **GitHub / LinkedIn outbound clicks** — a recruiter cross-checking your code and profile.
4. **Engagement time >2 min** on `#experience`, `#case-studies`, or `#projects` — they read the deep content.
5. **Organic search impressions growing in GSC** — your SEO is compounding.
6. **Raw pageviews** — meaningless without the above context.

If (1)–(3) are flat but pageviews are up, you're getting traffic from low-intent sources (social feeds, curiosity scrollers). Fix the hero CTA or the résumé-download button's visibility.

If (5) is growing but (1)–(3) aren't, your snippets are working but the landing page isn't converting — tighten copy, surface CTAs earlier.

---

## Checklist before going live

- [ ] GSC property created and verified with real token (replace both `website.html:20` and `index.html:21`)
- [ ] `sitemap.xml` submitted in GSC
- [ ] GA4 property created with Measurement ID
- [ ] `gtag.js` snippet added to `<head>` of both `website.html` and `index.html`
- [ ] GA4 data retention set to 14 months
- [ ] GA4 ↔ GSC linked in GA4 Admin
- [ ] Realtime report confirms pageviews are flowing
- [ ] (Optional) `contact_form_submit` custom event wired in `website.js` and marked as key event
