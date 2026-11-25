import PageAssets from '@/components/PageAssets';

export const metadata = {
  title: { absolute: "Market Your Book With Expert Book Marketers | publisher 4 states" },
  robots: { index: false, follow: false },
};

export default function BookPromotionsPage() {
  return (
    <>
      <PageAssets
        styles={[
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css",
          "/book-promotions/assets/css/vendor.css",
          "/book-promotions/assets/css/style.css",
          "/book-promotions/_legacy/book-promotions-index-1.css",
        ]}
        scripts={[
          "/book-promotions/assets/js/jquery-3.7.0.min.js",
          "/book-promotions/_legacy/book-promotions-index-1.js",
          "/book-promotions/assets/js/plugin.js",
          "/book-promotions/assets/js/lozad.min.js",
          "/book-promotions/assets/js/custom.js",
          "/book-promotions/_legacy/book-promotions-index-2.js",
          "/book-promotions/_legacy/book-promotions-index-3.js",
          "https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
          "/book-promotions/_legacy/book-promotions-index-4.js",
        ]}
      />
      <header className="py-2 text-white">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-3 col-md-4 col-3 d-md-none">
              <a data-legacy-href="Javascript:;" className="chat d-flex align-items-center"><span className="icon-chat me-2 icon"></span></a>
            </div>
            {" "}
            <div className="col-xl-2 col-lg-3 col-md-3 col-6">
              <a className="logo" href="https://publisher4states.com/book-promotions">
                <img className="lozad" src="https://publisher4states.com/assets/img/logo-white.png" />
              </a>
            </div>
            {" "}
            <div className="col-xl-8 col-lg-8 col-md-9 col-3">
              <div className="row justify-content-end">
                <div className="col-xl-3 col-lg-3 col-md-3 col-6 align-self-center d-none d-md-block">
                  <a data-legacy-href="Javascript:;" className="chat d-flex align-items-center">
                    <span className="me-2 icon" style={{ "background": "#67d503", "height": "10px", "width": "10px", "padding": "0" }}></span>
                    {" "}
                    <span className="">
                      <span className="anim-clr fw-700">
                        Chat Now To Avail
                        <br />
                        New Year Offer!
                      </span>
                      <br />
                    </span>
                  </a>
                </div>
                {" "}
                <div className="col-xl-4 col-md-4 col-12">
                  <a href="tel:(833) 206-5993" className="call d-flex align-items-center justify-content-end justify-content-md-start">
                    <span className="icon-phone me-2 icon"></span>
                    {" "}
                    <span className="d-none d-md-block">
                      <span className="clr-1 fw-700">Call Now</span>
                      <br />
                      {" "}
                      <span className="fw-700">(833) 206-5993</span>
                    </span>
                  </a>
                </div>
                {" "}
                <div className="col-xl-3 col-lg-4 col-md-4 d-none d-md-block">
                  <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner bg lozad" data-background-image="/book-promotions/assets/img/newyear.webp?v=14">
        <div className="overlay py-5">
          <div className="container-xl pt-5 mt-3">
            <div className="row">
              <div className="col-xl-7 text-white col-lg-7 col-md-6 col-sm-12 text-center text-md-start">
                <h1 className="f-50">Boost Your Book Sales With Our Proven Strategies</h1>
                {" "}
                <p className="f-20">
                  Unlock your book's full potential with our marketing expertise and get recognized globally with the finest book marketing services.
                </p>
                {" "}
                <ul className="f-20 list-unstyled c-list row row-cols-md-2 row-cols-1 text-md-start mb-0 mt-4 pt-1">
                  <li className="col mb-2">
                    <b>{"93% "}</b>
                    {" Success Rate "}
                  </li>
                  <li className="col mb-2">
                    <b>89%</b>
                    {" Proven Sales "}
                  </li>
                  <li className="col mb-2">
                    <b>250+</b>
                    {" National Best Sellers "}
                  </li>
                  <li className="col mb-2">
                    <b>50+</b>
                    {" Marketing Experts in Team "}
                  </li>
                </ul>
              </div>
              {" "}
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 d-none d-lg-block">
                <img className="lozad" src="/book-promotions/assets/img/banner-side.png" alt="" />
              </div>
              {" "}
              <div className="col-12 mt-3">
                <h2 className="ms-3 fw-700 f-30 text-center text-white text-md-start">
                  {"New Year Offer "}
                  <span className="clr-1">{" 50% "}</span>
                  {" off!"}
                </h2>
                {" "}
                <div className="blur">
                  <form className="text-start mt-3 mb-4 px-3" method="post" data-lead="1">
                    <div className="row justify-content-center align-items-center">
                      <div className="form-group">
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
                      </div>
                      {" "}
                      <div className="form-group col-lg col-md-6 mb-3 mb-lg-0">
                        <input className="form-control" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                      </div>
                      {" "}
                      <div className="form-group col-lg col-md-6 mb-3 mb-lg-0">
                        <input className="form-control" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                      </div>
                      {" "}
                      <div className="form-group col-lg col-md-6 mb-3 mb-lg-0">
                        <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                      </div>
                      {" "}
                      <div className="form-group col-lg col-md-6 mb-3 mb-lg-0">
                        <input className="form-control" autoComplete="nope" name="message" placeholder="Enter Brief" defaultValue="" />
                      </div>
                      {" "}
                      <div className="form-group col-lg col-md-6">
                        <button className="btn-2 w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="client-logo">
              <img className="lozad w-100" src="/book-promotions/assets/img/client-logos.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="platforms mt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4" data-aos="fade-right" data-aos-duration="1000"><h2 className="fw-600 f-40">{" Our Top Ranked Services "}</h2></div>
            {" "}
            <div className="col-lg-7" data-aos="fade-left" data-aos-duration="1000">
              <p className="mb-0">
                Promote your book through a team of dedicated experts who understand your physical, emotional, and monetary investment into the project and are ready, willing, and able to take your book marketing worldwide.
              </p>
            </div>
          </div>
        </div>
        {" "}
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-xl-12">
              <div className="slider">
                <div className="item px-4">
                  <div className="platform bg-1 text-white">
                    <h3 className="mt-5 m-3">Book Launch Campaigns</h3>
                    {" "}
                    <p className="mt-3 m-3">
                      You have to create a buzz before launching the book, and we can do it for you so everyone knows something big is coming
                    </p>
                  </div>
                </div>
                {" "}
                <div className="item px-4">
                  <div className="platform bg-1 text-white">
                    <h3 className="mt-5 m-3">Social Media Marketing</h3>
                    {" "}
                    <p className="mt-3 m-3">
                      Social Media plays a vital role in promoting your book and reaching more people, and we can do that quite easily. And we cover all the platform i.e. Facebook, Instagram, LinkedIn, Twitter , Pinterest, Snapchat, TikTok, etc.
                    </p>
                  </div>
                </div>
                {" "}
                <div className="item px-4">
                  <div className="platform bg-1 text-white">
                    <h3 className="mt-5 m-3">Paid Ad Campaigns</h3>
                    {" "}
                    <p className="mt-3 m-3">
                      With our Paid Ad Campaigns, we strategically target your ideal readers across digital platforms. Maximizing visibility and driving book sales through effective advertising strategies.
                    </p>
                  </div>
                </div>
                {" "}
                <div className="item px-4">
                  <div className="platform bg-1 text-white">
                    <h3 className="mt-5 m-3">Sales Tracking and Reporting</h3>
                    {" "}
                    <p className="mt-3 m-3">
                      We provide regular reports on your sales generated by the campaigns run by our team so you can stay updated with the copies sold.
                    </p>
                  </div>
                </div>
                {" "}
                <div className="item px-4">
                  <div className="platform bg-1 text-white">
                    <h3 className="mt-5 m-3">Video Book Trailer:</h3>
                    {" "}
                    <p className="mt-3 m-3">
                      We Make Video Book Trailers that bring books to life through Dynamic Videos. With our videos, we blend creativity and storytelling to captivate your audiences.
                    </p>
                  </div>
                </div>
                {" "}
                <div className="item px-4">
                  <div className="platform bg-1 text-white">
                    <h3 className="mt-5 m-3">Search Engine Optimization:</h3>
                    {" "}
                    <p className="mt-3 m-3">
                      Our Search Engine Optimization service enhances your online presence. We optimize your website to rank higher on search engines, driving organic traffic and ensuring your content gets discovered by the right audience.
                    </p>
                  </div>
                </div>
                {" "}
                <div className="item px-4">
                  <div className="platform bg-1 text-white">
                    <h3 className="mt-5 m-3">Amazon Optimization:</h3>
                    {" "}
                    <p className="mt-3 m-3">
                      We calibrate your product listings, enhance visibility, and maximize conversions through our Amazon Optimization services, ensuring your products shine in the world's largest online marketplace.
                    </p>
                  </div>
                </div>
                {" "}
                <div className="item px-4">
                  <div className="platform bg-1 text-white">
                    <h3 className="mt-5 m-3">Article Publishing:</h3>
                    {" "}
                    <p className="mt-3 m-3">
                      Article Publishing is the art of sharing your insights, knowledge, or creativity with a broader audience. We provide a platform to showcase your expertise and ideas through professionally crafted articles.
                    </p>
                  </div>
                </div>
                {" "}
                <div className="item px-4">
                  <div className="platform bg-1 text-white">
                    <h3 className="mt-5 m-3">Online Reputation Management:</h3>
                    {" "}
                    <p className="mt-3 m-3">
                      Online Reputation Management (ORM) consists of Wikipedia and Google Knowledge Panel. We protect and enhance your online image, ensuring accurate and positive information on these critical platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" data-aos="zoom-in" data-aos-duration="1000">
        <div className="container lozad bg cta" data-background-image="/book-promotions/assets/img/cta.jpg">
          <div className="row justify-content-end">
            <div className="col-lg-4 col-md-7">
              <h3 className="text-white mt-5 fw-700">{" Discover The Power Of Book Marketing With Us "}</h3>
            </div>
            {" "}
            <div className="col-lg-4 col-md-5 position-relative col-5">
              <img className="lozad w-100" src="/book-promotions/assets/img/laptop.png" />
            </div>
            {" "}
            <div className="col-lg-2 col-md-6 mt-5">
              <a href="tel:(833) 206-5993" className="call d-flex align-items-center justify-content-start">
                <span className="icon-phone me-2 icon"></span>
                {" "}
                <span className="">
                  <span className="clr-1 fw-700">Call Now</span>
                  <br />
                  {" "}
                  <span className="fw-700 text-white">(833) 206-5993</span>
                </span>
              </a>
            </div>
            {" "}
            <div className="col-lg-2 col-md-6 mt-5">
              <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" data-aos="fade-down" data-aos-duration="1000">
          <div className="row">
            <div className="executed col-lg-12 text-center mt-5"><h2>{" How should it be executed? "}</h2></div>
          </div>
        </div>
        {" "}
        <div className="container">
          <div className="row justify-content-center mt-5 align-items-center">
            <div className="rocket col-lg-4 col-md-4 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
              <h4>Evaluation and Advancement:</h4>
              {" "}
              <p>
                {"Give your book the spotlight it deserves. Take advantage of our author promotion services and unlock opportunities to expand your readership. "}
              </p>
              {" "}
              <h4 className="mt-5">Inspection and Assessment:</h4>
              {" "}
              <p>
                Leverage the power of an effective sales strategy. Establish and handle price promotions for your books without a hitch, optimizing their attractiveness to readers.
              </p>
            </div>
            {" "}
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-in" data-aos-duration="1000">
              <img className="lozad w-100" src="/book-promotions/assets/img/wht-we-sec.png" />
            </div>
            {" "}
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
              <h4>Coherence Verified!</h4>
              {" "}
              <p>
                {"We ensure your book gets featured across thousands of our esteemed store partners. From book promotion websites to other publications, we'll showcase your book to captivated audiences. "}
              </p>
              {" "}
              <h4>Continued Execution!</h4>
              {" "}
              <p>
                Our book promotion services go beyond just publication and distribution assistance. We are here to help you connect with your target audience and find the perfect platforms to promote your Books.
              </p>
            </div>
            {" "}
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
              <h4 className="mt-5">Delivery</h4>
              {" "}
              <p>
                {"We've partnered with leading book publishers to streamline and enhance your promotion efforts for independently published books. "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-md-7 col-sm-12 mt-5" data-aos="fade-right" data-aos-duration="1000">
              <h2 className="strategy">{" Strategy To Outperform Your Competitors On Different Platforms "}</h2>
              {" "}
              <p className="mt-3">
                {" Improve your book presence without the uncertainty! Our vetted marketing specialists assist you in meeting your goals by increasing leads, sales, engagements, and books visibility. Unfortunately, many SMEs lack the expertise to win on digital platforms and the techniques to attract organic reach. "}
              </p>
              {" "}
              <p className="mt-4">
                {" When book marketing agencies come into the equation, it will assist businesses grow digitally, rank better on Search Engine Ranking Pages (SERPs), and maintain their digital presence globally. If you are looking to outsource your book marketing and growth to a book marketing agency, you’ve landed in the right place. "}
              </p>
              {" "}
              <div className="row">
                <div className="col-xl-3 col-lg-7 col-md-6 mb-2">
                  <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                </div>
                {" "}
                <div className="col-xl-4 col-lg-5 col-md-6 col-12">
                  <a href="tel:(833) 206-5993" className="call d-flex align-items-center justify-content-md-end justify-content-md-start">
                    <span className="icon-phone me-2 icon"></span>
                    {" "}
                    <span className="">
                      <span className="clr-1 fw-700">Call Now</span>
                      <br />
                      {" "}
                      <span className="fw-700">(833) 206-5993</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-md-5 col-sm-12">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="box mb-3 text-center">
                    <img className="lozad mx-auto mb-3" src="/book-promotions/assets/img/1.png" />
                    {" "}
                    <p className="mb-0 f-20">Guaranteed ROIS</p>
                  </div>
                  {" "}
                  <div className="box text-center">
                    <img className="lozad mx-auto mb-3" src="/book-promotions/assets/img/2.png" />
                    {" "}
                    <p className="mb-0 f-20">Increase Your Reach</p>
                  </div>
                </div>
                {" "}
                <div className="col-6">
                  <div className="box mb-3 text-center">
                    <img className="lozad mx-auto mb-3" src="/book-promotions/assets/img/3.png" />
                    {" "}
                    <p className="mb-0 f-20">Significant Growth In Sales</p>
                  </div>
                  {" "}
                  <div className="box text-center">
                    <img className="lozad mx-auto mb-3" src="/book-promotions/assets/img/4.png" />
                    {" "}
                    <p className="mb-0 f-20">Amplify Your Impact With Our Proven Strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 pricing">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
              <h3 className="fw-700 f-40">Providing You The Most Affordable Pricing</h3>
            </div>
            {" "}
            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
              <p>
                Our spectrum of book promotion services at affordable rates and prices offers you a qualified team of marketing strategist, media buyers, social media marketer, and publishing mavericks who work collaboratively
              </p>
            </div>
          </div>
          {" "}
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
            <div className="col mb-5 mb-lg-0" data-aos="fade-up" data-aos-duration="1000">
              <div className="package">
                <h4 className="f-30 pt-4 text-center">Silver</h4>
                {" "}
                <div className="price">
                  <div className="d-flex justify-content-center">
                    <p className="mb-0 px-4">Only</p>
                    {" "}
                    <p className="mb-0 f-30 fw-700">$2,999</p>
                    {" "}
                    <p className="mb-0 ms-4 f-20"><strike>$5,999</strike></p>
                  </div>
                </div>
                {" "}
                <div className="details">
                  <ul className="list-unstyled c-list">
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Google Preview Book
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      {"Social Media Promotion for 3 months - Facebook & Instagram"}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Marketing Strategy Call - 90 Min
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Amazon Optimization- 3 months
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Search Engine Optimization - (3 Months)
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Video Reviews- 3 Reviews
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Book Launch Animated Video - one 1-minute video
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      {"Complete Author Website Design & Deployment"}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Promotional Bookmarks Design- 2
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Promotional Business Cards Design- 2
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Blogs - 5 (Blogs are written and posted on high-authority domain platforms)
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Media outlet – 1 (NY Weekly)
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Press Release on 80+ Platforms– 1
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="action">
                  <div className="row px-4 mb-2">
                    <div className="col-6">
                      <a href="tel:(833) 206-5993">
                        Share your idea?
                        <br />
                        <span className="f-18 fw-700">(833) 206-5993</span>
                      </a>
                    </div>
                    {" "}
                    <div className="col-6">
                      <a data-legacy-href="Javascript:;" className="chat">
                        Want to discuss?
                        <br />
                        <span className="f-18 fw-700">Live Chat Now</span>
                      </a>
                    </div>
                  </div>
                  {" "}
                  <button className="pric-btn w-50" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">GET STARTED</button>
                </div>
              </div>
            </div>
            {" "}
            <div className="col mb-5 mb-lg-0" data-aos="fade-up" data-aos-duration="1000">
              <div className="package">
                <h4 className="f-30 pt-4 text-center">Gold</h4>
                {" "}
                <div className="price">
                  <div className="d-flex justify-content-center">
                    <p className="mb-0 px-4">Only</p>
                    {" "}
                    <p className="mb-0 f-30 fw-700">$5,999</p>
                    {" "}
                    <p className="mb-0 ms-4 f-20"><strike>$11,999</strike></p>
                  </div>
                </div>
                {" "}
                <div className="details">
                  <ul className="list-unstyled c-list">
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Google Preview Book
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Social Media Promotion for 6 months
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Marketing Strategy Call - 90 Min
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Amazon Optimization- 6 months
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Search Engine Optimization - (6 Months)
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Video Reviews- 5 Reviews
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Book Launch Animated Video - one 1-minute video
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      {"Author Website Setup & Deployment"}
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Promotional Bookmarks Design-5
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Promotional Postcards Design-5
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Promotional Business Cards Design-5
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Blogs - 10 (Blogs are written and posted on high-authority domain platforms)
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Press Release on 80+ Platforms– 3
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Media Outlets – 3 (NY Weekly, American Daily Post, LA Progressive)
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Google Knowledge Panel
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="action">
                  <div className="row px-4 mb-2">
                    <div className="col-6">
                      <a href="tel:(833) 206-5993">
                        Share your idea?
                        <br />
                        <span className="f-18 fw-700">(833) 206-5993</span>
                      </a>
                    </div>
                    {" "}
                    <div className="col-6">
                      <a data-legacy-href="Javascript:;" className="chat">
                        Want to discuss?
                        <br />
                        <span className="f-18 fw-700">Live Chat Now</span>
                      </a>
                    </div>
                  </div>
                  {" "}
                  <button className="pric-btn w-50" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">GET STARTED</button>
                </div>
              </div>
            </div>
            {" "}
            <div className="col mb-5 mb-lg-0" data-aos="fade-up" data-aos-duration="1000">
              <div className="package">
                <h4 className="f-30 pt-4 text-center">Platinum</h4>
                {" "}
                <div className="price">
                  <div className="d-flex justify-content-center">
                    <p className="mb-0 px-4">Only</p>
                    {" "}
                    <p className="mb-0 f-30 fw-700">$9,999</p>
                    {" "}
                    <p className="mb-0 ms-4 f-20"><strike>$19,999</strike></p>
                  </div>
                </div>
                {" "}
                <div className="details">
                  <ul className="list-unstyled c-list">
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Google Preview Book
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Social Media Promotion for 12 months
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Marketing Strategy Call - 90 Min
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Amazon Optimization- 12 months
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Search Engine Optimization - (12 Months)
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Video Reviews- 10 Reviews
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Book Launch Animated Video – (2) 60 seconds videos
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Author Website Setup- 1
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Promotional Bookmarks Design- 7
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Promotional Postcards Design- 7
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Promotional Business Cards Design- 7
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Promotional Animated Logo
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Blogs/Articles Marketing- 30
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Blogs -15 (Blogs are written and posted on high-authority domain platforms)
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Press Release Campaign - 6
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Media Outlets – 6 (NY Weekly, AP News, Now Entertainment Magazine, The Forbes Times, Big Time Daily, TechTimes)
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      Wikipedia Page for the book
                    </li>
                    <li>
                      <i className="fa fa-check-circle"></i>
                      {"Google Knowledge Panel "}
                    </li>
                  </ul>
                </div>
                {" "}
                <div className="action">
                  <div className="row px-4 mb-2">
                    <div className="col-6">
                      <a href="tel:(833) 206-5993">
                        Share your idea?
                        <br />
                        <span className="f-18 fw-700">(833) 206-5993</span>
                      </a>
                    </div>
                    {" "}
                    <div className="col-6">
                      <a data-legacy-href="Javascript:;" className="chat">
                        Want to discuss?
                        <br />
                        <span className="f-18 fw-700">Live Chat Now</span>
                      </a>
                    </div>
                  </div>
                  {" "}
                  <button className="pric-btn w-50" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">GET STARTED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="digital col-lg-6 col-md-7 col-sm-12 lozad" data-background-image="/book-promotions/assets/img/digidtal-sec-bg.png" data-aos="fade-in" data-aos-duration="1000">
              <div className="row text-center">
                <div className="col-6">
                  <div className="box mb-3">
                    <p className="fw-700 clr-1 f-40 mb-0 subhead">
                      <span id="num1">900</span>
                      {"+ "}
                    </p>
                    {" "}
                    <p className="mb-0">Books Promoted</p>
                  </div>
                  {" "}
                  <div className="box">
                    <p className="fw-700 clr-1 f-40 mb-0 subhead"><span id="num2">50</span></p>
                    {" "}
                    <p className="mb-0">Marketing Experts</p>
                  </div>
                </div>
                {" "}
                <div className="col-6">
                  <div className="box mb-3 mt-lg-3">
                    <p className="fw-700 clr-1 f-40 mb-0 subhead">
                      <span id="num3">7</span>
                      +
                    </p>
                    {" "}
                    <p className="mb-0">Year of Experience</p>
                  </div>
                  {" "}
                  <div className="box">
                    <p className="fw-700 clr-1 f-40 mb-0 subhead">
                      <span id="num4">100</span>
                      %
                    </p>
                    {" "}
                    <p className="mb-0">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-lg-6 col-md-4 col-sm-12 text-center" data-aos="fade-left" data-aos-duration="1000">
              <img className="lozad w-40 mt-3 m-3 mx-auto" src="/book-promotions/assets/img/digital-img.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" data-aos="zoom-in" data-aos-duration="1000">
        <div className="container lozad bg cta" data-background-image="/book-promotions/assets/img/cta.jpg">
          <div className="row justify-content-end">
            <div className="col-lg-4 col-md-7">
              <h3 className="text-white mt-5 fw-700">{" Discover The Power Of Book Marketing With Us "}</h3>
            </div>
            {" "}
            <div className="col-lg-4 col-md-5 position-relative col-5">
              <img className="lozad w-100" src="/book-promotions/assets/img/laptop.png" />
            </div>
            {" "}
            <div className="col-lg-2 col-md-6 mt-5">
              <a href="tel:(833) 206-5993" className="call d-flex align-items-center justify-content-start">
                <span className="icon-phone me-2 icon"></span>
                {" "}
                <span className="">
                  <span className="clr-1 fw-700">Call Now</span>
                  <br />
                  {" "}
                  <span className="fw-700 text-white">(833) 206-5993</span>
                </span>
              </a>
            </div>
            {" "}
            <div className="col-lg-2 col-md-6 mt-5">
              <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 reviews">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center" data-aos="fade-down" data-aos-duration="1000">
              <h3 className="fw-700 f-40">What Our Clients Say</h3>
              {" "}
              <p>
                We have been in the industry for a long period, allowing us to gather a bunch of customers who praise our work. Don’t just believe it, read it yourself.
              </p>
            </div>
          </div>
        </div>
        {" "}
        <div className="container-fluid">
          <div className="slider">
            <div className="item px-3">
              <div className="box review p-3 text-center">
                <div className="image"><img className="mx-auto" data-lazy="assets/img/client-1.webp" /></div>
                {" "}
                <div className="discription">
                  <strong>Emeryn Alexandria</strong>
                  {" "}
                  <p>
                    I had a fantastic experience working with Americas book Marketing service. They were able to effectively target my book's audience and increase its visibility on various online platforms. I highly recommend their services to any author looking to improve their book's sales and exposure.
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="item px-3">
              <div className="box review p-3 text-center">
                <div className="image"><img className="mx-auto" data-lazy="assets/img/client-2.webp" /></div>
                {" "}
                <div className="discription">
                  <strong>Phoenix Xavier</strong>
                  {" "}
                  <p>
                    publisher 4 states's book marketing service was exactly what I needed to get my book noticed. They were knowledgeable, and professional, and provided detailed reports on the progress of my book's marketing campaign. I am thrilled with the results and would use their services again.
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="item px-3">
              <div className="box review p-3 text-center">
                <div className="image"><img className="mx-auto" data-lazy="assets/img/client-3.webp" /></div>
                {" "}
                <div className="discription">
                  <strong>Skye Evangeline</strong>
                  {" "}
                  <p>
                    The team at publisher 4 states understands the ins and outs of book marketing. They helped me develop a comprehensive marketing plan for my book and provided invaluable guidance throughout the entire process. I am so grateful for their expertise and highly recommend their services to anyone looking to promote their book.
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="item px-3">
              <div className="box review p-3 text-center">
                <div className="image"><img className="mx-auto" data-lazy="assets/img/client-4.webp" /></div>
                {" "}
                <div className="discription">
                  <strong>Sterling Giovanni</strong>
                  {" "}
                  <p>
                    publisher 4 states's book marketing service exceeded my expectations in every way. They were able to generate buzz around my book through social media and email marketing campaigns, resulting in a significant increase in sales. I am so impressed with their work and would work with them again in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="lozad bg" data-background-image="/book-promotions/assets/img/newyear.webp?v=12">
        <div className="overlay">
          <div className="container py-5">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <img className="lozad w-100" src="/book-promotions/assets/img/analysis-img.png" />
              </div>
              {" "}
              <div className="col-lg-6">
                <h3 className="f-30 fw-700 text-white">Let’s Talk With The Professionals</h3>
                {" "}
                <p className="text-white">
                  If you would like to know how we work our sparkle at publisher 4 states, or if you have any questions, feel free to contact us.
                </p>
                {" "}
                <form className="text-start mt-5 mb-4" method="post" data-lead="1">
                  <div className="row justify-content-center">
                    <div className="form-group">
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
                    </div>
                    {" "}
                    <div className="form-group col-md-6 mb-3">
                      <input className="form-control" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                    </div>
                    {" "}
                    <div className="form-group col-md-6 mb-3">
                      <input className="form-control" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                    </div>
                    {" "}
                    <div className="form-group col-12 mb-3">
                      <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                    </div>
                    {" "}
                    <div className="form-group col-md-12 mb-3">
                      <textarea className="form-control" autoComplete="nope" name="message" placeholder="Enter Brief" rows="3"></textarea>
                    </div>
                    {" "}
                    <div className="form-group col-12">
                      <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              {" "}
              <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <h6 className="m-2 text-white">{" © Copyright 2023 publisher 4 states, All Rights Reserved "}</h6>
                </div>
                {" "}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-3">
                      <a href="https://publisher4states.com/assets/img/dmca-certificate.png" target="_blank">
                        <img className="lozad" src="/book-promotions/assets/img/dmca.webp" />
                      </a>
                    </div>
                    {" "}
                    <div className="col-8">
                      <img className="lozad" src="/book-promotions/assets/img/pay.webp" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="modal fade" id="getaquote" tabIndex="-1" aria-labelledby="getaquoteLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content lozad" data-background-image="/book-promotions/assets/img/newyear-offer.webp" style={{ "backgroundSize": "cover", "backgroundPosition": "top" }}>
            <div className="modal-body">
              <h3 className="f-24 fw-700 text-center">
                {"Signup Now To Avail New Year Offer "}
                <span className="f-40">
                  <span className="clr-1">50%</span>
                  {" off!"}
                </span>
              </h3>
              {" "}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
              {" "}
              <form className="text-start mt-5 mb-4" method="post" data-lead="1">
                <div className="row justify-content-center">
                  <div className="form-group">
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
                  </div>
                  {" "}
                  <div className="form-group col-md-12">
                    <input className="form-control mb-3" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                    {" "}
                    <input className="form-control mb-3" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                    {" "}
                    <input className="form-control mb-3" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                  </div>
                  {" "}
                  <div className="form-group col-md-12">
                    <textarea className="form-control mb-3" autoComplete="nope" name="message" placeholder="Enter Brief" rows="3"></textarea>
                    {" "}
                    <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="offerModal" tabIndex="-1" aria-labelledby="offerModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content lozad py-5" data-background-image="/book-promotions/assets/img/newyear-offer.webp" style={{ "backgroundSize": "cover", "backgroundPosition": "top" }}>
            <div className="modal-body text-center">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              {" "}
              <h1 className="f-40 fw-700">New Year Offer</h1>
              {" "}
              <h2 className="f-30 fw-700">50% off</h2>
              {" "}
              <form className="text-start" method="post" data-lead="1">
                <div className="row justify-content-center">
                  <div className="form-group">
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
                  </div>
                  {" "}
                  <div className="form-group col-md-5">
                    <input className="form-control mb-3" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                    {" "}
                    <input className="form-control mb-3" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                    {" "}
                    <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                  </div>
                  {" "}
                  <div className="form-group col-md-5">
                    <textarea className="form-control mb-3" autoComplete="nope" name="message" placeholder="Enter Brief" rows="4"></textarea>
                    {" "}
                    <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit</button>
                  </div>
                </div>
              </form>
              {" "}
              <p className="c-claim">
                Signup Today to Claim Your Discount. Get
                <br />
                {" Started before it’s too late!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
