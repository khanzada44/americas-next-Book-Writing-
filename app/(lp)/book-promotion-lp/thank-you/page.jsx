import PageAssets from '@/components/PageAssets';

export const metadata = {
  title: { absolute: "Market Your Book With Expert Book Marketers" },
  description: "Looking to get your book marketed by a top book marketing company? You just found the best one, as publisher 4 states provides expert book marketing services to take your book to new heights.",
};

export default function BookPromotionLpThankYouPage() {
  return (
    <>
      <PageAssets
        styles={[
          "/book-promotion-lp/css/bootstrap.min.css",
          "/book-promotion-lp/css/animate.css",
          "/book-promotion-lp/css/jquery.fancybox.min.css",
          "/book-promotion-lp/css/fancybox.css",
          "/book-promotion-lp/css/accordian-jquery-ui.css",
          "/book-promotion-lp/css/slick.css",
          "/book-promotion-lp/css/slick-theme.css",
          "/book-promotion-lp/css/style.css",
          "/book-promotion-lp/css/responsive.css",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        ]}
        scripts={[
          "https://static.zdassets.com/ekr/snippet.js?key=b5566f55-0fef-4c06-8d31-c9e6ad283a8f",
        ]}
      />
      <section className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo-div"><img src="/book-promotion-lp/images/logo.png" alt="" /></div>
            </div>
            {" "}
            <div className="col-sm-8">
              <div className="header-btn-st">
                <a href="tel:855-556-8603" className="tel-btn">
                  <i className="fa-solid fa-phone"></i>
                  {" 855-556-8603"}
                </a>
                {" "}
                <a href="mailto: info@publisher4states.com" className="mail-btn">
                  <i className="fa-solid fa-envelope"></i>
                  {" "}
                  <span>info@publisher4states.com</span>
                </a>
                {" "}
                <a data-legacy-href="javascript:;" className="get-btn popup-btn">
                  {"Get Started "}
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-sec">
        <img className="bnr-bf-img-st" src="/book-promotion-lp/images/bnr-bf-img.png" />
        {" "}
        <div className="container d-flex justify-content-center">
          <div className="text-center align-self-center">
            <h2 className="text-white">Thank you for your response we will contact you as soon as possible!</h2>
            {" "}
            <button className="btn btn-primary" data-legacy-onclick="window.location.href = '/book-promotion-lp/'">{" Go to Home "}</button>
          </div>
        </div>
      </section>
    </>
  );
}
