import PageAssets from '@/components/PageAssets';

export const metadata = {
  title: { absolute: "Get Your Book Published In No Time | publisher 4 states" },
};

export default function BookPublishingLpThankYouPage() {
  return (
    <>
      <PageAssets
        styles={[
          "https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Open+Sans:wght@300;400;600;700;800&display=swap",
          "/book-publishing-lp/public/assets/assets-publishing/landing-pages/css/style.css?a=234",
          "/book-publishing-lp/public/assets/assets-publishing/landing-pages/css/bootstrap.min.css",
          "/book-publishing-lp/public/assets/assets-publishing/landing-pages/css/responsive.css",
          "/book-publishing-lp/public/assets/website/css/slick.css",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
          "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
          "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Metrophobic&display=swap",
        ]}
        scripts={[
          "/book-publishing-lp/public/assets/website/js/chat.js",
          "https://static.zdassets.com/ekr/snippet.js?key=b5566f55-0fef-4c06-8d31-c9e6ad283a8f",
        ]}
      />
      <header className="header_area">
        <div className="container">
          <div className="navigation_area">
            <div className="row align-items-center">
              <div className="col-md-3 col-12">
                <div className="logo">
                  <a href="/book-publishing-lp/index-2.html">
                    <img src="/book-publishing-lp/public/assets/website/images/logo02.png" alt="" />
                  </a>
                </div>
              </div>
              {" "}
              <div className="col-md-4"></div>
              {" "}
              <div className="col-md-5">
                <div className="nmb-cht">
                  <ul>
                    <li className="first">
                      <a href="/book-publishing-lp/(855) 556-8603">
                        <span>{" Call Us "}</span>
                        (855) 556-8603
                      </a>
                    </li>
                    <li className="last">
                      <a data-legacy-href="javascript:;" data-target="entry-popup" className="grn-btn LineAnimationButton loginUp open-popup">Let’s Get Started</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="main-banner">
        <div className="container">
          <div className="row">
            <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} className="col-md-12 over">
              <div className="banner-heading">
                <h1>Thank You for your response we will contact you as soon as possible</h1>
                {" "}
                <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} className="col-md-12 over">
                  <a style={{ "color": "white" }} href="/book-publishing-lp/" data-target="entry-popup" className="grn-btn LineAnimationButton loginUp open-popup">{" Go To Home"}</a>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </>
  );
}
