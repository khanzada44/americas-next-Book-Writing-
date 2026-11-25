import Script from 'next/script';
import { site, forms } from '@/lib/site';
import { bodyClasses } from '@/lib/bodyClasses';

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  verification: { google: '4BmuwCfKlgNwqXQNoHftwQZxQIEDcWmdVEfKqCT4ZDM' },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-194x194.png', sizes: '194x194', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }],
  },
  manifest: '/site.webmanifest',
  other: { 'msapplication-TileColor': '#ffffff', 'msapplication-TileImage': '/mstile-144x144.png' },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#ffffff' };

// Same <body class="..."> per page as the PHP site, set before the first paint,
// plus the form settings for public/assets/js/lead-forms.js.
const bootScript =
  `(function(m){var p=location.pathname.replace(/\\/+$/,'')||'/';document.body.className=m[p]||'';})(${JSON.stringify(bodyClasses)});` +
  `window.ABW_FORMS=${JSON.stringify(forms)};`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        {children}
        <Script src="/assets/js/lead-forms.js?v=1" strategy="afterInteractive" />
      </body>
    </html>
  );
}
