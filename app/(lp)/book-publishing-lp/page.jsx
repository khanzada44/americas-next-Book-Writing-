import PageAssets from '@/components/PageAssets';

export const metadata = {
  title: { absolute: "Get Your Book Published In No Time | publisher 4 states" },
  robots: { index: false, follow: false },
};

export default function BookPublishingLpPage() {
  return (
    <>
      <PageAssets
        styles={[
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css",
          "/book-publishing-lp/public/assets/assets-publishing/landing-pages/css/style.css?v=3",
          "/book-publishing-lp/public/assets/assets-publishing/landing-pages/css/bootstrap.min.css",
          "/book-publishing-lp/public/assets/assets-publishing/landing-pages/css/responsive.css",
          "/book-publishing-lp/public/assets/website/css/slick2.css?a=2342",
          "/book-publishing-lp/public/assets/website/css/slick-theme.css?a=2342",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
          "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-1.css",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-2.css",
        ]}
        scripts={[
          "/book-publishing-lp/public/assets/assets-publishing/landing-pages/js/bootstrap.bundle.min.js",
          "/book-publishing-lp/public/assets/website/js/jquery.min.js",
          "/book-publishing-lp/public/assets/website/js/owl.carousel.min.js",
          "/book-publishing-lp/public/assets/website/js/slick.min.js",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-1.js",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-2.js",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-3.js",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-4.js",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-5.js",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-6.js",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-7.js",
          "https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
          "/book-publishing-lp/_legacy/book-publishing-lp-index-8.js",
        ]}
      />
      <header className="header_area">
        <div className="container">
          <div className="navigation_area">
            <div className="row align-items-center">
              <div className="col-md-3 col-12">
                <div className="logo">
                  <a href="/book-publishing-lp/">
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
                      <a href="tel:18555568603">
                        <span>{" Call Us "}</span>
                        {" (855) 556-8603"}
                      </a>
                    </li>
                    <li className="last">
                      <a data-legacy-href="javascript:;" data-target="entry-popup" className="grn-btn LineAnimationButton loginUp open-popup">Let's Get Started</a>
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
            <div className="col-md-6 over">
              <div className="banner-heading">
                <h3>Comprehensive Publishing Solutions</h3>
                {" "}
                <h1>
                  <span>{"Top-Notch "}</span>
                  {"Book "}
                  <br />
                  {" Publishing Services For Talented, Independent Authors"}
                </h1>
                {" "}
                <ul style={{ "color": "white", "marginTop": "50px", "lineHeight": "30px", "marginLeft": "20px" }}>
                  <li>PUBLISHING BY EXPERTS</li>
                  <li>{"AUTHOR GUIDANCE "}</li>
                  <li>100% PERFECT PROOFREAD</li>
                  <li>TRUSTED BY 400+ AUTHORS</li>
                </ul>
              </div>
            </div>
            {" "}
            <div className="col-md-6"><div className="back-img"></div></div>
          </div>
          {" "}
          <div className="row">
            <div className="col-md-12">
              <img src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/banner-logo.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="main-slider-form aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="slider-form" data-form-type="signup_form">
                <h3>Avail 50% Off On Our Publishing Services</h3>
                {" "}
                <p>Fill in your details to reserve your discount</p>
                {" "}
                <form method="post" className="mt-3" data-lead="1">
                  <input type="hidden" name="ip" defaultValue="" />
                  {" "}
                  <input type="hidden" name="city" defaultValue="" />
                  {" "}
                  <input type="hidden" name="region" defaultValue="" />
                  {" "}
                  <input type="hidden" name="country" defaultValue="" />
                  {" "}
                  <input type="hidden" name="url" defaultValue="" />
                  {" "}
                  <input type="hidden" name="domain" defaultValue="publisher4states.com" />
                  {" "}
                  <input type="hidden" name="subject" data-add-page-url="1" defaultValue="banner Form" />
                  {" "}
                  <textarea style={{ "display": "none" }} autoComplete="nope" name="message" placeholder="Enter Brief" defaultValue={"empty"}></textarea>
                  {" "}
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group">
                        <div className="icon-bg"><i className="fas fa-user"></i></div>
                        {" "}
                        <input className="form-control" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                      </div>
                    </div>
                    {" "}
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group">
                        <div className="icon-bg"><i className="fas fa-envelope"></i></div>
                        {" "}
                        <input className="form-control" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                      </div>
                    </div>
                    {" "}
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group">
                        <div className="icon-bg"><i className="fas fa-phone"></i></div>
                        {" "}
                        <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                      </div>
                    </div>
                    {" "}
                    <div className="col-lg-12 col-md-12 col-sm-6">
                      <div className="form-group form-send-btn">
                        <div id="formResult"></div>
                        {" "}
                        <input data-hover="Submit" type="submit" name="cta" className="btn send-btn" value="Get Started" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="best-seller">
        <div className="container">
          <div className="row back-seller">
            <div className="col-md-6"></div>
            {" "}
            <div className="col-md-6">
              <div className="seller-heading">
                <h2><span>READY TO LAUNCH</span></h2>
                {" "}
                <h2 className="stres">YOUR BOOK WITH US</h2>
                {" "}
                <p>
                  {"At publisher 4 states we provide all the services to help authors publish their books, from printing to distribution and marketing. Over the years, we have worked with many writing professionals and published books in different genres. With top expertise in the book publishing profession, we have successfully transformed several writers into published book writers globally. "}
                </p>
                {" "}
                <a data-legacy-href="javascript:;" className="open-popup">Get Started</a>
              </div>
            </div>
          </div>
          {" "}
          <div className="row">
            <div className="col-md-1"></div>
            {" "}
            <div className="col-md-5">
              <div className="seller-head">
                <h2>
                  <span>AVAIL 50% OFF</span>
                  <br />
                  {" ON ALL PACKAGES "}
                </h2>
                {" "}
                <div className="seller-list">
                  <div className="col-md-6">
                    <ul>
                      <li className="first">Autobiography Writing</li>
                      <li>Fiction Writing</li>
                      <li>Non-Fiction Writing</li>
                      <li>Business Book Writing</li>
                      <li className="last">Editing Services</li>
                    </ul>
                  </div>
                  {" "}
                  <div className="col-md-6">
                    <ul>
                      <li className="first">Proofreading Services</li>
                      <li>Book Cover Designing</li>
                      <li>Book Layout Designing</li>
                      <li>Book Publishing</li>
                      <li className="last">Book Marketing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-md-6">
              <div className="seller-image">
                <img src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/seller-book.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ "marginBottom": "20px" }} className="pricing-slj pricing-sec-inner-ftp">
        <div className="container-rhk">
          <div className="pricing-3fi">
            <div className="pricing-head-jot">
              <span><h1>{" Pricing"}</h1></span>
              {" "}
              <h3>{" Affordable Publishing Packages "}</h3>
              {" "}
              <p>{" We provide integrated Publishing services Worldwide. "}</p>
            </div>
            {" "}
            <a data-legacy-href="javascript:;" className="btn-26k liveChat">{" Let's Discuss your Project "}</a>
          </div>
          {" "}
          <div className="row-q4k pricing">
            <div className="col-ds9">
              <div className="box-qly">
                <div style={{ "height": "140px" }} className="box-van">
                  <span>{" Basic "}</span>
                  {" "}
                  <h2>
                    <b>{"$499 "}</b>
                    <sub><del>($1,099)</del></sub>
                  </h2>
                </div>
                {" "}
                <ul className="list-mrg">
                  <li className="elementor-icon-list-item">{" Editing "}</li>
                  <li className="elementor-icon-list-item">{" Proofreading "}</li>
                  <li className="elementor-icon-list-item">{" Typesetting "}</li>
                  <li className="elementor-icon-list-item">{" Layout Adjustments "}</li>
                  <li className="elementor-icon-list-item">{" Formatting "}</li>
                  <li className="elementor-icon-list-item">{" Unlimited Revisions "}</li>
                  <li className="elementor-icon-list-item">{" 100% Ownership Rights "}</li>
                  <li className="elementor-icon-list-item">{" Publication On Kindle "}</li>
                  <li className="elementor-icon-list-item">{" E-Book Format "}</li>
                </ul>
                {" "}
                <ul className="btn-wnf">
                  <li>
                    <a data-legacy-href="javascript:;" className="btn-portfolio open-popup">{" Request a Quote "}</a>
                  </li>
                  <li>
                    <a data-legacy-href="javascript:;" data-legacy-onclick="setButtonURL()" className="snipcss0-7-44-45">Live Chat</a>
                  </li>
                </ul>
              </div>
            </div>
            {" "}
            <div className="col-ds9">
              <div className="box-qly">
                <div style={{ "height": "140px" }} className="box-van">
                  <span>{" Startup "}</span>
                  {" "}
                  <h2>
                    <b>$999</b>
                    <sub><del>($2,000 )</del></sub>
                  </h2>
                </div>
                {" "}
                <ul className="list-mrg">
                  <li>Editing</li>
                  <li>Proofreading</li>
                  <li>Typesetting</li>
                  <li>Layout Adjustments</li>
                  <li>Formatting</li>
                  <li>Unlimited Revisions</li>
                  <li>100% Ownership Rights</li>
                  <li>Book Cover Design</li>
                  <li>Publication On Amazon, Kindle</li>
                  <li>EBook, Paper Back Format</li>
                </ul>
                {" "}
                <ul className="btn-wnf">
                  <li>
                    <a data-legacy-href="javascript:;" className="btn-portfolio open-popup">{" Request a Quote "}</a>
                  </li>
                  <li>
                    <a data-legacy-href="javascript:;" data-legacy-onclick="setButtonURL()" className="snipcss0-7-44-45">Live Chat</a>
                  </li>
                </ul>
              </div>
            </div>
            {" "}
            <div className="col-ds9">
              <div className="box-qly act-5jg">
                <div className="simple-8x4">
                  <img src="https://www.elitebookwriting.com/assets/images/pricing-tag-img.png" className="tag-8t9" />
                  {" "}
                  <h6>
                    {" Best "}
                    <br />
                    {" Seller "}
                  </h6>
                </div>
                {" "}
                <div style={{ "height": "140px" }} className="box-van">
                  <span>{" Standard "}</span>
                  {" "}
                  <h2 style={{ "color": "white" }}>
                    <b>$1,499</b>
                    <sub><del>{" ($3,000)"}</del></sub>
                  </h2>
                </div>
                {" "}
                <ul className="list-mrg">
                  <li>Editing</li>
                  <li>Proofreading</li>
                  <li>Typesetting</li>
                  <li>Layout Adjustments</li>
                  <li>Formatting</li>
                  <li>Unlimited Revisions</li>
                  <li>100% Ownership Rights</li>
                  <li>Book Cover Design</li>
                  <li>ISBN + Barcode</li>
                  <li>{"Publication On Amazon, Kindle, Barnes & Noble"}</li>
                  <li>EBook, Paper Back, Hardcover (3 Formats Of Your Book)</li>
                </ul>
                {" "}
                <ul className="btn-wnf">
                  <li>
                    <a data-legacy-href="javascript:;" className="btn-portfolio open-popup">{" Request a Quote "}</a>
                  </li>
                  <li>
                    <a data-legacy-href="javascript:;" data-legacy-onclick="setButtonURL()" className="snipcss0-7-44-45">Live Chat</a>
                  </li>
                </ul>
              </div>
            </div>
            {" "}
            <div className="col-ds9">
              <div className="box-qly">
                <div style={{ "height": "140px" }} className="box-van">
                  <span>{" Expert "}</span>
                  {" "}
                  <h2>
                    <b>{"$3,099 "}</b>
                    <sub><del>($9,000)</del></sub>
                  </h2>
                </div>
                {" "}
                <ul className="list-mrg">
                  <li>Editing</li>
                  <li>Proofreading</li>
                  <li>Typesetting</li>
                  <li>Layout Adjustments</li>
                  <li>Formatting</li>
                  <li>Unlimited Revisions</li>
                  <li>100% Ownership Rights</li>
                  <li>Book Cover Design</li>
                  <li>ISBN + Barcode</li>
                  <li>
                    {"Publication On Amazon, Kindle, Barnes & Noble, Google Books & Kobo"}
                  </li>
                  <li>2-4 Pages Author Website</li>
                  <li>1 Year Domain And Hosting</li>
                  <li>30-60 Seconds Video Trailer</li>
                  <li>Dedicated Team Of Editors</li>
                  <li>EBook, Paper Back, Hardcover (3 Formats Of Your Book)</li>
                </ul>
                {" "}
                <ul className="btn-wnf">
                  <li>
                    <a data-legacy-href="javascript:;" className="btn-portfolio open-popup">{" Request a Quote "}</a>
                  </li>
                  <li>
                    <a data-legacy-href="javascript:;" data-legacy-onclick="setButtonURL()" className="snipcss0-7-44-45">Live Chat</a>
                  </li>
                </ul>
              </div>
            </div>
            {" "}
            <div className="col-ds9">
              <div className="box-qly">
                <div style={{ "height": "140px" }} className="box-van">
                  <span>{" Brand "}</span>
                  {" "}
                  <h2>
                    <b>$6,999</b>
                    <sub><del>($20,000 )</del></sub>
                  </h2>
                </div>
                {" "}
                <ul className="list-mrg">
                  <li>Editing</li>
                  <li>Proofreading</li>
                  <li>Typesetting</li>
                  <li>Layout Adjustments</li>
                  <li>Formatting</li>
                  <li>Unlimited Revisions</li>
                  <li>100% Ownership Rights</li>
                  <li>Book Cover Design</li>
                  <li>ISBN + Barcode</li>
                  <li>
                    {"Publication On Amazon, Kindle, Barnes & Noble, Google Books And Kobo"}
                  </li>
                  <li>2-4 Pages Author Website</li>
                  <li>1-Year Domain And Hosting</li>
                  <li>Dedicated Team Of Editors</li>
                  <li>30-60 Seconds Video Trailer</li>
                  <li>1-Year Brand Marketing</li>
                  <li>EBook, Paper Back, Hardcover (3 Formats Of Your Book)</li>
                </ul>
                {" "}
                <ul className="btn-wnf">
                  <li>
                    <a data-legacy-href="javascript:;" className="btn-portfolio open-popup">{" Request a Quote "}</a>
                  </li>
                  <li>
                    <a data-legacy-href="javascript:;" data-legacy-onclick="setButtonURL()" className="snipcss0-7-44-45">Live Chat</a>
                  </li>
                </ul>
              </div>
            </div>
            {" "}
            <div className="col-ds9">
              <div className="box-qly act-5jg">
                <div className="simple-8x4">
                  <img src="https://www.elitebookwriting.com/assets/images/pricing-tag-img.png" className="tag-8t9" />
                  {" "}
                  <h6>
                    {" Best "}
                    <br />
                    {" Seller "}
                  </h6>
                </div>
                {" "}
                <div style={{ "height": "140px" }} className="box-van">
                  <span>{" Best Seller "}</span>
                  {" "}
                  <h2 style={{ "color": "white" }}>
                    <b>$9,599</b>
                    <sub><del>{" ($27,500)"}</del></sub>
                  </h2>
                </div>
                {" "}
                <ul className="list-mrg">
                  <li>Editing</li>
                  <li>Proofreading</li>
                  <li>Typesetting</li>
                  <li>Layout Adjustments</li>
                  <li>Formatting</li>
                  <li>Unlimited Revisions</li>
                  <li>100% Ownership Rights</li>
                  <li>Book Cover Design</li>
                  <li>ISBN + Barcode</li>
                  <li>
                    {"Publication On Amazon, Kindle, Barnes & Noble, Google Books And Kobo"}
                  </li>
                  <li>2-4 Pages Author Website</li>
                  <li>2-Year Domain And Hosting</li>
                  <li>Dedicated Team Of Editors</li>
                  <li>Dedicated Team Of Bestselling Marketers</li>
                  <li>60-90 Seconds Video Trailer</li>
                  <li>2-Year Bestselling Marketing</li>
                  <li>EBook, Paper Back, Hardcover (3 Formats Of Your Book)</li>
                </ul>
                {" "}
                <ul className="btn-wnf">
                  <li>
                    <a data-legacy-href="javascript:;" className="btn-portfolio open-popup">{" Request a Quote "}</a>
                  </li>
                  <li>
                    <a data-legacy-href="javascript:;" data-legacy-onclick="setButtonURL()" className="snipcss0-7-44-45">Live Chat</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="story">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            {" "}
            <div className="col-md-11">
              <div className="story-heading">
                <h2 style={{ "fontSize": "40px" }}><b>WE ASSISTED THOUSANDS OF WRITERS</b></h2>
                {" "}
                <h1>
                  {"TO GET THEIR WORK PUBLISHED. "}
                  <br />
                  {"IT'S YOUR "}
                  <span>TURN NOW!</span>
                </h1>
                {" "}
                <p>
                  {"Have problems getting your masterpiece published the right way? Don't worry, we are here to help! Our "}
                  <br />
                  {" publishing experts and professionals can provide the best publishing options to reach your audience in a "}
                  <br />
                  {" fast and easy way. "}
                </p>
              </div>
            </div>
          </div>
          {" "}
          <ul className="tabs">
            <li data-tab-target="#fiction" className="active tab">Fiction</li>
            <li data-tab-target="#non-fiction" className="tab">Non-Fiction</li>
            <li data-tab-target="#memoir" className="tab">Memoir</li>
            <li data-tab-target="#biography" className="tab">Biography</li>
            <li data-tab-target="#info" className="tab">Informative</li>
            <li data-tab-target="#romance" className="tab">Romance</li>
          </ul>
          {" "}
          <div className="tab-content">
            <div id="fiction" className="active one" data-tab-content="">
              <div className="books">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/fiction/1.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/fiction/2.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/fiction/3.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
                {" "}
                <div className="row uper-space">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/fiction/4.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/fiction/5.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/fiction/6.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
              </div>
              {" "}
              <button className="btn-portfolio open-popup">Activate Your Coupon</button>
            </div>
            {" "}
            <div id="non-fiction" className="one" data-tab-content="">
              <div className="books">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/non-fiction/1.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/non-fiction/2.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/non-fiction/3.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
                {" "}
                <div className="row uper-space">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/non-fiction/4.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/non-fiction/5.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/non-fiction/6.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
              </div>
              {" "}
              <button className="btn-portfolio open-popup">Activate Your Coupon</button>
            </div>
            {" "}
            <div id="memoir" data-tab-content="" className="one">
              <div className="books">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/memoir/1.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/memoir/2.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/memoir/3.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
                {" "}
                <div className="row uper-space">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/memoir/4.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/memoir/5.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/memoir/6.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
              </div>
              {" "}
              <button className="btn-portfolio open-popup">Activate Your Coupon</button>
            </div>
            {" "}
            <div id="biography" className="one" data-tab-content="">
              <div className="books">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/biography/1.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/biography/2.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/biography/3.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
                {" "}
                <div className="row uper-space">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/biography/4.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/biography/5.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/biography/6.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
              </div>
              {" "}
              <button className="btn-portfolio open-popup">Activate Your Coupon</button>
            </div>
            {" "}
            <div id="info" className="one" data-tab-content="">
              <div className="books">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/informative/1.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/informative/2.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/informative/3.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
                {" "}
                <div className="row uper-space">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/informative/4.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/informative/5.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/informative/6.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
              </div>
              {" "}
              <button className="btn-portfolio open-popup">Activate Your Coupon</button>
            </div>
            {" "}
            <div id="romance" className="one" data-tab-content="">
              <div className="books">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/romance/1.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/romance/2.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/romance/3.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
                {" "}
                <div className="row uper-space">
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/romance/4.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/romance/5.webp" />
                  </div>
                  {" "}
                  <div className="col-md-4 col-6 skip">
                    <img className="smooth" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/portfolio/romance/6.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-md-12">
                  <img className="shelf" src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/shelf.webp" />
                </div>
              </div>
              {" "}
              <button className="btn-portfolio open-popup">Activate Your Coupon</button>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            {" "}
            <div className="col-md-7">
              <div className="services-head">
                <h2>WE AIM TO PROVIDE YOU WITH OUR PREMIUM GHOSTWRITING AND</h2>
                {" "}
                <h1>
                  <span className="text-white">{"PUBLISHING SERVICES "}</span>
                  TO PROCURE YOUR TOP WATCH WRITING GOALS.
                </h1>
                {" "}
                <div className="seller-list">
                  <div className="col-md-6">
                    <ul>
                      <li className="first">Autobiography Writing</li>
                      <li>Fiction Writing</li>
                      <li>Non-Fiction Writing</li>
                      <li>Business Book Writing</li>
                      <li className="last">Editing Services</li>
                    </ul>
                  </div>
                  {" "}
                  <div className="col-md-6">
                    <ul>
                      <li className="first">Proofreading Services</li>
                      <li>Book Cover Designing</li>
                      <li>Book Layout Designing</li>
                      <li>Book Publishing</li>
                      <li className="last">Book Marketing</li>
                    </ul>
                  </div>
                </div>
                {" "}
                <div className="service-btn">
                  <div className="left">
                    <a data-legacy-href="javascript:$zopim.livechat.window.toggle();">Consult With an Expert</a>
                  </div>
                  {" "}
                  <div className="right"></div>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-md-4">
              <img src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/service-book.webp" />
            </div>
          </div>
        </div>
      </section>
      <section className="process">
        <div className="container">
          <div className="process-heading">
            <h1>FOLLOW OUR CREATIVE PUBLISHING PROCESS</h1>
            {" "}
            <div className="row">
              <div className="col-md-3">
                <div className="process-step">
                  <img src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/icon1.webp" />
                  {" "}
                  <h2>01</h2>
                  {" "}
                  <span>Draft Submission</span>
                  {" "}
                  <p>
                    {" The writer submits the draft to us and discusses the details of the project, including printing and publishing. "}
                  </p>
                </div>
              </div>
              {" "}
              <div className="col-md-3">
                <div className="process-step">
                  <img src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/icon2.webp" />
                  {" "}
                  <h2>02</h2>
                  {" "}
                  <span>Proofreading and Editing</span>
                  {" "}
                  <p>
                    {" Once the draft is received, we assign an experienced editor to review, analyze, proofread, and edit the content thoroughly. "}
                  </p>
                </div>
              </div>
              {" "}
              <div className="col-md-3">
                <div className="process-step">
                  <img src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/icon3.webp" />
                  {" "}
                  <h2>03</h2>
                  {" "}
                  <span>Designing the Book</span>
                  {" "}
                  <p>
                    {" We design the book, keeping all important aspects in mind. All the books are designed with front and back covers, author bios, table of contents, etc. "}
                  </p>
                </div>
              </div>
              {" "}
              <div className="col-md-3">
                <div className="process-step">
                  <img src="/book-publishing-lp/public/assets/assets-publishing/landing-pages/images/icon4.webp" />
                  {" "}
                  <h2>04</h2>
                  {" "}
                  <span>Publishing and Promotion</span>
                  {" "}
                  <p>
                    {" After getting the approval of the design, the manuscript is published in the clients' required formats. "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial text-center">
        <div className="container">
          <div className="slider" id="featured-content" data-slick-index="3">
            <div className="item">
              <div className="item-back1">
                <p>
                  {"Great solutions in good discount. Proud of myself for choosing these services. Thanks to their tremendous writing team! "}
                </p>
              </div>
            </div>
            {" "}
            <div className="item">
              <div className="item-back2">
                <p>
                  {"They have helped me achieve my long lost dream to publish a book. They are market professionals who know how to create bespoke stories. "}
                </p>
              </div>
            </div>
            {" "}
            <div className="item">
              <div className="item-back3">
                <p>
                  {"I needed assistance on my story and I must say, they really know how to create compelling books. Totally recommended! "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer_client_wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src="/book-publishing-lp/public/assets/assets-publishing/images/logo1.webp" className="img-fluid" />
              {" "}
              <img src="/book-publishing-lp/public/assets/assets-publishing/images/logo2.webp" className="img-fluid" />
              {" "}
              <img src="/book-publishing-lp/public/assets/assets-publishing/images/book-logo.webp" className="img-fluid apple-logo" />
              {" "}
              <img src="/book-publishing-lp/public/assets/assets-publishing/images/logo4.webp" className="img-fluid" />
              {" "}
              <img src="/book-publishing-lp/public/assets/assets-publishing/images/logo5.webp" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="footer-form">
        <div className="container">
          <div className="form-cont">
            <div className="form-head">
              <form method="post" data-lead="1">
                <input type="hidden" name="ip" defaultValue="" />
                {" "}
                <input type="hidden" name="city" defaultValue="" />
                {" "}
                <input type="hidden" name="region" defaultValue="" />
                {" "}
                <input type="hidden" name="country" defaultValue="" />
                {" "}
                <input type="hidden" name="url" defaultValue="" />
                {" "}
                <input type="hidden" name="domain" defaultValue="publisher4states.com" />
                {" "}
                <input type="hidden" name="subject" data-add-page-url="1" defaultValue="Footer Form" />
                {" "}
                <h1>Connect with an Expert</h1>
                {" "}
                <h2>
                  {"We create content that converts every asset which aligns with your commercial goals, speaks directly to your audience and builds a conversation around your brand. "}
                </h2>
                {" "}
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input className="form-control" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                  </div>
                </div>
                {" "}
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                  </div>
                  {" "}
                  <div className="col-md-6 form-group">
                    <input className="form-control" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                  </div>
                </div>
                {" "}
                <div className="form-group">
                  <textarea className="form-control" autoComplete="nope" name="message" placeholder="Enter Brief"></textarea>
                </div>
                {" "}
                <div className=".fld-btn">
                  <input data-hover="Submit" type="submit" name="cta" value="Send Message" className="btn send-btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginTop": "40px" }} className="col-12">
              <img width="240px" height="100px" src="/book-publishing-lp/public/assets/website/images/logo02.png" alt="" />
            </div>
            {" "}
            <div style={{ "marginTop": "40px" }} className="col-md-7">
              <div className="footer-bottom-left">
                <img width="400px" src="/book-publishing-lp/public/assets/website/images/footer.png" alt="" />
              </div>
            </div>
            {" "}
            <div style={{ "marginTop": "40px" }} className="col-md-4">
              <div style={{ "marginBottom": "20px" }} className="footer-bottom-right">
                <img width="300px" src="/book-publishing-lp/public/assets/website/images/banner-logos-1.png" alt="" />
              </div>
            </div>
            {" "}
            <div className="hr"><hr style={{ "height": "4px", "color": "#47c399" }} /></div>
            {" "}
            <div style={{ "marginTop": "10px" }} className="col-md-6">
              <div className="footer-bottom-left"><h6>© publisher 4 states 2023 All rights reserved.</h6></div>
            </div>
            {" "}
            <div style={{ "marginTop": "1%" }} className="col-md-5">
              <div className="footer-bottom-right">
                <a href="/book-publishing-lp/">{"Privacy & Policy |"}</a>
                {" "}
                <a href="/book-publishing-lp/">{"Terms & Condition"}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="entry-popup" className="desktop-popup">
        <div className="container">
          <div className="entry-box" data-form-type="popup_form">
            <form method="post" data-lead="1">
              <a data-legacy-href="javascript:;" id="entry-box_close" className="closed"><i className="fa fa-times"></i></a>
              {" "}
              <input type="hidden" name="ip" defaultValue="" />
              {" "}
              <input type="hidden" name="city" defaultValue="" />
              {" "}
              <input type="hidden" name="region" defaultValue="" />
              {" "}
              <input type="hidden" name="country" defaultValue="" />
              {" "}
              <input type="hidden" name="url" defaultValue="" />
              {" "}
              <input type="hidden" name="domain" defaultValue="publisher4states.com" />
              {" "}
              <input type="hidden" name="subject" data-add-page-url="1" defaultValue="Popup Form" />
              {" "}
              <div className="row">
                <div className="col-sm-12 entry-right">
                  <div className="text-1">
                    <h1>
                      <span className="red"></span>
                      {"ACTIVATE THIS OFFER TO AVAIL "}
                      <br />
                      {"50% DISCOUNT! "}
                    </h1>
                    {" "}
                    <p>
                      {"Last "}
                      <b>6</b>
                      <strong>{" COUPONS LEFT"}</strong>
                    </p>
                  </div>
                  {" "}
                  <div className="col-md-12 form-group">
                    <input className="form-control" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                  </div>
                  {" "}
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input className="form-control" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                    </div>
                    {" "}
                    <div className="col-md-6 form-group">
                      <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                    </div>
                  </div>
                  {" "}
                  <div className="col-lg-12 col-xs-12 p-0">
                    <textarea className="form-control message-field" autoComplete="nope" name="message" placeholder="Enter Brief"></textarea>
                  </div>
                  {" "}
                  <div className="form-group form-btn">
                    <div id="formResult"></div>
                    {" "}
                    <div className="clearfix"></div>
                    {" "}
                    <input className="entery-submit desk-btn btn send-btn" data-hover="Submit" type="submit" name="cta" value="50% Off - Order Now" />
                    {" "}
                    <input className="entery-submit mobile-btn btn send-btn" data-hover="Submit" type="submit" name="cta" value="50% Off - Order Now" />
                  </div>
                </div>
              </div>
            </form>
            {" "}
            <div className="right-img">
              <img src="/book-publishing-lp/public/assets/assets-publishing/images/popup-girl.webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
