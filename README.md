# Bangladesh Share Market

A responsive, bilingual (Bangla/English) educational website about Bangladesh's
stock market. It uses HTML, CSS, and vanilla JavaScript; no build step or
framework is required.

## Run locally

Open `index.html` in a current browser. An optional local static server can be
used if your browser restricts local-file features. The Google Fonts stylesheet
is optional; the site falls back to system fonts when offline.

## Project structure

```text
index.html
style.css
script.js
images/
  logo/
  hero/
  dse/
  cse/
  companies/
  market/
  education/
  analysis/
  news/
  ipo/
  gallery/
```

The interface uses CSS-drawn identity elements and a canvas chart, so it does
not require third-party or remote image assets. A local SVG fallback is
available at `images/market/image-placeholder.svg` for images added later.

## Replace images

Keep replacement files in `images/` and use descriptive filenames. Existing
image URLs are centralized in the `websiteImages` object near the top of
`script.js`; update a value there if you change a filename. Replacing an asset
while keeping its path and filename makes the new asset appear on refresh.
Images added to a page should have meaningful `alt` text, `loading="lazy"`
where appropriate, and use the local placeholder SVG as their error fallback.
Use optimized WebP, JPG, PNG, or SVG files; do not embed images as Base64.

## Language and theme

Bangla is the default. The navigation switch changes all `data-i18n` content
without reloading, updates the document language and description, and saves the
choice in `localStorage`. Add or update matching keys in both language maps in
`script.js` when adding translated UI. The light/dark theme preference is also
remembered locally.

## Market data and API integration

**All prices, indices, volumes, movers, and turnover currently displayed are
clearly labeled sample/demo values.** There is no live provider configured.
The demo data is hard-coded in `script.js`; the `BangladeshShareMarket.data`
object is the boundary for a future authorized provider. Do not treat sample
values as actual market information.

To connect a provider:

1. Select an authorized data source and confirm its terms, permitted use,
   coverage, update frequency, and attribution requirements.
2. Implement a provider adapter in `script.js` (or a separate local module) that
   requests only data the provider authorizes for browser use and returns
   normalized stock records: `name`, `code`, `sector`, `price`, `change`,
   `percent`, `volume`, and `value`, plus an `updatedAt` timestamp.
3. Configure the adapter using `BangladeshShareMarket.data.configure()` and
   refresh only at the
   provider's permitted interval. Validate the response shape, show loading,
   timestamp, and provider errors in the UI, and never turn errors into sample
   values labeled as live.
4. If authentication requires a private API key, make requests through a
   trusted server-side proxy; **never place private keys or credentials in
   `script.js`, HTML, or any other client-side file.**
5. Attribute the provider and last updated time wherever its data is displayed.
   Keep overview, chart, company, news, dividend, and calendar figures labeled
   as sample/unavailable until each has its own verified source.

The adapter contract is
`{ sourceName, sourceUrl, refreshIntervalMs, loadStocks }`. `sourceUrl` must be
HTTPS and `refreshIntervalMs` must be at least 10 seconds. `loadStocks()` must
resolve to `{ updatedAt, stocks: [...] }`; `updatedAt` must be a parseable
timestamp. Example structure (replace the endpoint with a provider-authorized
endpoint):

```js
BangladeshShareMarket.data.configure({
  sourceName: "Authorized provider",
  sourceUrl: "https://provider.example/",
  refreshIntervalMs: 60000,
  async loadStocks() {
    const response = await fetch("https://provider.example/authorized-feed");
    if (!response.ok) throw new Error(`Provider returned ${response.status}`);
    return response.json();
  }
});
```

The website intentionally shows links to DSE, CSE, BSEC, and Bangladesh Bank
instead of fabricating market news, company announcements, upcoming IPO dates,
or calendar events. Click through to those official sources to verify current
information.

## Features

- 21 bilingual content sections covering market data, DSE/CSE, listed
  companies, charts, official news sources, IPOs, education, analysis,
  dividends, investor guidance, calendar, FAQ, and contact.
- Responsive navigation, theme switch, stock search/sort/sector filter and
  pagination, illustrative line/volume chart, FAQ accordion, validated demo
  contact form, and back-to-top control.
- Financial-risk disclaimer. The contact form validates fields locally and
  does not send or store a message.

This site is educational and informational only; it is not personalized
investment advice and does not promise returns.
