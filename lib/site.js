// GLOBAL SETTINGS (were in inc/global.php)
export const site = {
  name: 'publisher 4 states',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://publisher4states.com').replace(/\/+$/, ''),
  phone: '090008401',
  email: 'info@publisher4states.com',
  address: '5432 Geary Blvd, San Francisco, CA 94121, United States',
};

export const forms = {
  endpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT || '',
  thankYou: '/thankyou',
};

// Landing page folders (each one is a route with its own CSS / JS in public/<folder>/).
export const landingPages = [
  'ghostwriting-lp',
  'book-publishing-lp',
  'professional-ghostwriting-lp',
  'publishing-new',
  'publishing-lp2',
  'book-promotions',
  'book-editing-lp',
  'book-promotion-lp',
  'publishing-lp',
];
