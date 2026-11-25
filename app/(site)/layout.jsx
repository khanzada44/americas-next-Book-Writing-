import PageAssets from '@/components/PageAssets';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import QuoteModal from '@/components/site/QuoteModal';
import { siteAssets } from '@/lib/siteAssets';

// Main site pages: header, page, footer, "Get In Touch" popup, then the site scripts
// (was index.php -> inc/head.php, inc/header.php, page, inc/footer.php, inc/chat.php)
export default function SiteLayout({ children }) {
  return (
    <>
      <PageAssets styles={siteAssets.styles} scripts={siteAssets.scripts} />
      <Header />
      {children}
      <Footer />
      <QuoteModal />
    </>
  );
}
