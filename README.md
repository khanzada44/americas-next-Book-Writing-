# publisher 4 states (Next.js)

Converted from the PHP site (`americas-28-feb`). There is no PHP, PHPMailer, `.htaccess` or API route any more.

## Run

```bash
npm install
cp .env.example .env.local   # put your lead / CRM URL in NEXT_PUBLIC_LEAD_ENDPOINT
npm run dev                  # http://localhost:3000
npm run build && npm start   # live
```

## Pages

| Old PHP | New route | File |
| --- | --- | --- |
| `home.php` (index.php) | `/` | `app/(site)/page.jsx` |
| `ebook-writing.php`, `book-publishing.php` ... | `/ebook-writing` ... | `app/(site)/<page>/page.jsx` |
| `thankyou.php` | `/thankyou` | `app/(bare)/thankyou/page.jsx` |
| `404.php` | any unknown address | `app/not-found.jsx` |
| `ghostwriting-lp/index.php` ... | `/ghostwriting-lp/` ... | `app/(lp)/<lp>/page.jsx` |
| `<lp>/thank-you.php` | `/<lp>/thank-you` | `app/(lp)/<lp>/thank-you/page.jsx` |

Old `.php` addresses redirect to the new ones (`next.config.mjs`). `our-writers` goes to `/`, `/thank-you` to `/thankyou`.

## Where things are

- `components/site/Header.jsx`, `Footer.jsx`, `QuoteModal.jsx`: main site header, footer and "Get In Touch" popup.
- `components/site/sections/`: sections used on several main pages (FAQ, testimonials).
- `app/(site)/layout.jsx`: header + page + footer + popup for the main site.
- `lib/siteAssets.js`: CSS and JS of the main site, in the old order.
- `components/PageAssets.jsx` + `components/ScriptChain.jsx`: load the old CSS / jQuery scripts of a page, in order, after React.
- `public/assets/`: main site images, CSS, JS. `public/assets/legacy/`: the old inline `<style>` / `<script>` blocks.
- `public/<lp>/`: each landing page's own images, CSS and JS.
- `lib/site.js`: phone, email, address, form settings, list of landing pages.
- `lib/bodyClasses.js`: `<body class>` of each page.
- `middleware.js`: landing pages keep a trailing slash (`/ghostwriting-lp/`), other pages have none.

## Forms

All enquiry forms (main site and landing pages) are handled by `public/assets/js/lead-forms.js`:
it checks the fields, fills the hidden fields (url, domain, subject, ip, city, region, country),
sends everything as `FormData` (POST) to `NEXT_PUBLIC_LEAD_ENDPOINT`, and opens `/thankyou` on a 2xx answer.
Until that variable is set, the forms say "not connected yet" instead of losing the lead.
The `publishing-new` popup still posts to its CRM link (leads.infinityprojectmanager.com) as before.
