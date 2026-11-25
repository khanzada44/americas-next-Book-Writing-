/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // trailing slashes are handled in middleware.js (landing pages keep theirs, see there)
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // old PHP addresses keep working
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/our-writers', destination: '/', permanent: true },
      { source: '/thank-you', destination: '/thankyou', permanent: true },
      { source: '/:lp/index.php', destination: '/:lp/', permanent: true },
      { source: '/:lp/thank-you.php', destination: '/:lp/thank-you', permanent: true },
      { source: '/:slug.php', destination: '/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
