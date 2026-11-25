import PageAssets from '@/components/PageAssets';

export const metadata = {
  title: { absolute: "Book Editing | publisher 4 states" },
  robots: { index: false, follow: false },
};

export default function BookEditingLpPage() {
  return (
    <>
      <PageAssets
        styles={[
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css",
          "/book-editing-lp/css/bootstrap.min.css",
          "/book-editing-lp/css/animate.css",
          "/book-editing-lp/css/jquery.fancybox.min.css",
          "/book-editing-lp/css/fancybox.css",
          "/book-editing-lp/css/owl.carousel.css",
          "/book-editing-lp/css/accordian-jquery-ui.css",
          "/book-editing-lp/css/slick.css",
          "/book-editing-lp/css/slick-theme.css",
          "/book-editing-lp/css/style.css?v=1",
          "/book-editing-lp/css/responsive.css?v=3",
          "/book-editing-lp/css/font-awesome.min.css",
          "/book-editing-lp/css/icomo.css",
          "https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap",
          "/book-editing-lp/_legacy/book-editing-lp-index-1.css",
          "/book-editing-lp/_legacy/book-editing-lp-index-2.css",
        ]}
        scripts={[
          "https://code.jquery.com/jquery-1.10.2.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.0.8/lozad.min.js",
          "/book-editing-lp/js/bootstrap.min.js",
          "/book-editing-lp/js/wow.min.js",
          "/book-editing-lp/js/fancybox.js",
          "/book-editing-lp/js/slick.js",
          "/book-editing-lp/js/accordian-jquery-ui.js",
          "/book-editing-lp/js/owl.carousel.min.js",
          "/book-editing-lp/js/custom.js",
          "/book-editing-lp/_legacy/book-editing-lp-index-1.js",
          "/book-editing-lp/_legacy/book-editing-lp-index-2.js",
          "/book-editing-lp/_legacy/book-editing-lp-index-3.js",
          "https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js",
          "/book-editing-lp/_legacy/book-editing-lp-index-4.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js",
          "/book-editing-lp/_legacy/book-editing-lp-index-5.js",
        ]}
      />
      <div className="head_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo">
                <img className="lozad" src="/book-editing-lp/images/logo-white.webp" />
              </div>
            </div>
            {" "}
            <div className="col-sm-8">
              <div className="header-btn">
                <a href="tel:(855) 556-8603" className="tel-btn">
                  <img className="lozad" src="/book-editing-lp/images/flag.webp" />
                  {" (855) 556-8603 "}
                </a>
                {" "}
                <a data-legacy-href="javascript:;" className="chat-btn chats">Live Chat</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="main-banner lozad" data-background-image="/book-editing-lp/images/banner-img.webp">
        <div className="container">
          <div className="row">
            <img className="bnr-side-img-st" src="/book-editing-lp/images/banner-side-img.webp" />
            {" "}
            <div className="col-sm-offset-1 col-sm-6">
              <div className="bnr-txt">
                <h1 className="wow fadeInUp" data-wow-duration="1s">Get The Best Book Editors</h1>
                {" "}
                <ul className="wow fadeInUp" data-wow-duration="3s">
                  <li>
                    <i className="fa fa-check"></i>
                    {" Starts from $4.75/ page "}
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    {" Industry specific editors "}
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    {" 10+ years of experience "}
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    {" 100% money back guarantee"}
                  </li>
                </ul>
                {" "}
                {" "}
                <div className="bnr-btn wow fadeInUp" data-wow-duration="3s">
                  <a href="tel:(855) 556-8603" className="tel-btn">{"(855) 556-8603 "}</a>
                  {" "}
                  <a data-legacy-href="javascript:;" className="get-btn chat-btn popup-btn">Sign Up Now</a>
                </div>
                {" "}
                <img className="trust-img-st wow fadeInUp lozad" data-wow-duration="4s" src="/book-editing-lp/trust_img.webp" />
              </div>
            </div>
            {" "}
            <div className="col-sm-4">
              <div className="form-st lozad" data-background-image="/book-editing-lp/images/bnr-form.webp">
                <div className="form-txt">
                  <h3>
                    <span>{"Tread the "}</span>
                    {" Path of Success"}
                  </h3>
                  {" "}
                  <p>
                    Fill the form below, tell us all the details, and we’ve got you covered!
                  </p>
                </div>
                {" "}
                <form method="post" className="right" data-lead="1">
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
                  <input type="hidden" name="subject" data-add-page-url="1" defaultValue="Banner Form" />
                  {" "}
                  <div className="form-div form-div-1">
                    <input type="text" name="name" placeholder="Your Name" required defaultValue="" />
                  </div>
                  {" "}
                  <div className="form-div form-div-2">
                    <input type="email" name="email" placeholder="Your Email" defaultValue="" required />
                  </div>
                  {" "}
                  <div className="form-div form-div-3">
                    <input id="phone-countr" className="phone" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                  </div>
                  {" "}
                  <div className="form-div form-div-4">
                    <textarea name="brief" autoComplete="nope" placeholder="Enter Brief"></textarea>
                  </div>
                  {" "}
                  <div className="text-center form-div-btn">
                    <input className="btn_green" type="submit" id="quoteSubmit" data-hover="Submit" name="cta1" value="Get a free quote" />
                    {" "}
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    {" "}
                    <div className="error mt-3 alert alert-danger text-left mb-0" style={{ "display": "none" }}></div>
                    {" "}
                    <div className="success mt-3 alert alert-success text-left mb-0" style={{ "display": "none" }}></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <section className="client-logo">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="cl-logo-slid">
                  <div className="cl-logo-slider">
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-1.webp" /></div>
                    </div>
                    {" "}
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-2.webp" /></div>
                    </div>
                    {" "}
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-3.webp" /></div>
                    </div>
                    {" "}
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-4.webp" /></div>
                    </div>
                    {" "}
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-5.webp" /></div>
                    </div>
                    {" "}
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-1.webp" /></div>
                    </div>
                    {" "}
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-2.webp" /></div>
                    </div>
                    {" "}
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-3.webp" /></div>
                    </div>
                    {" "}
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-4.webp" /></div>
                    </div>
                    {" "}
                    <div>
                      <div className="cl-logo-img"><img data-lazy="images/cl-5.webp" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="dtl-sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dtl-list">
                <ul>
                  <li>
                    <div className="dtl-box">
                      <img className="lozad" src="/book-editing-lp/images/dtl-icon-1.webp" />
                      {" "}
                      <div className="dtl-txt">
                        <h3>Definite Quality</h3>
                        {" "}
                        <p>
                          {"We received encouragement over the years for our perfect book editing provision. "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dtl-box">
                      <img className="lozad" src="/book-editing-lp/images/dtl-icon-2.webp" />
                      {" "}
                      <div className="dtl-txt">
                        <h3>Finest Editors</h3>
                        {" "}
                        <p>We have premium editors in our crew, making sure work is faultless.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dtl-box">
                      <img className="lozad" src="/book-editing-lp/images/dtl-icon-3.webp" />
                      {" "}
                      <div className="dtl-txt">
                        <h3>Prompt Delivery</h3>
                        {" "}
                        <p>
                          {"We believe in fast pace delivery & don’t take forever to complete a project. "}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dtl-box">
                      <img className="lozad" src="/book-editing-lp/images/dtl-icon-4.webp" />
                      {" "}
                      <div className="dtl-txt">
                        <h3>Secure Payments</h3>
                        {" "}
                        <p>
                          We make our service purchaser with a secure payment method every time.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="hd-txt">
                <h2>What makes our book editing better?</h2>
                {" "}
                <p>
                  What makes us great is that our book editors deal with the manuscript carefully that consumers aim to acquire. Depending on the type of book and its editing needs, we fix each and every mistake to polish the description. Hire experts!
                </p>
              </div>
            </div>
            {" "}
            <div className="col-sm-12 p0">
              <div className="col-sm-3">
                <div className="serv-box">
                  <img className="lozad" src="/book-editing-lp/images/serv-img-1.webp" />
                  {" "}
                  <div className="serv-txt">
                    <h3>Basic editing</h3>
                    {" "}
                    <p>
                      It involves the basic editing of the work to alter your short write-ups into the best writing done by our doyens.
                    </p>
                  </div>
                  {" "}
                  <div className="serv-btn">
                    <a data-legacy-href="javascript:;" className="chat-btn chats">Live Chat</a>
                  </div>
                </div>
              </div>
              {" "}
              <div className="col-sm-3">
                <div className="serv-box">
                  <img className="lozad" src="/book-editing-lp/images/serv-img-2.webp" />
                  {" "}
                  <div className="serv-txt">
                    <h3>Transitional editing</h3>
                    {" "}
                    <p>
                      It permits the testing of transitional work. Our mavens tweak and trim as per the objectives and requirements of the buyer.
                    </p>
                  </div>
                  {" "}
                  <div className="serv-btn">
                    <a data-legacy-href="javascript:;" className="chat-btn chats">Live Chat</a>
                  </div>
                </div>
              </div>
              {" "}
              <div className="col-sm-3">
                <div className="serv-box">
                  <img className="lozad" src="/book-editing-lp/images/serv-img-3.webp" />
                  {" "}
                  <div className="serv-txt">
                    <h3>Expert editing</h3>
                    {" "}
                    <p>
                      {"It consents a service buyer to obtain a professional with the expertise. They work following guidelines and give spotless copies. "}
                    </p>
                  </div>
                  {" "}
                  <div className="serv-btn">
                    <a data-legacy-href="javascript:;" className="chat-btn chats">Live Chat</a>
                  </div>
                </div>
              </div>
              {" "}
              <div className="col-sm-3">
                <div className="serv-box">
                  <img className="lozad" src="/book-editing-lp/images/serv-img-4.webp" />
                  {" "}
                  <div className="serv-txt">
                    <h3>{"Premium editing "}</h3>
                    {" "}
                    <p>
                      It allows the big volumes of books stressing a particular subject to be edited with the help of specialists from the field.
                    </p>
                  </div>
                  {" "}
                  <div className="serv-btn">
                    <a data-legacy-href="javascript:;" className="chat-btn chats">Live Chat</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_portfolio lozad" data-background-image="/book-editing-lp/images/portfolio-bg.webp">
        <div className="container-fluid">
          <div className="row">
            <div className="hd-txt">
              <h2 className="">Check out our portfolio</h2>
              {" "}
              <p className="">
                {"See our portfolio to believe that the excellence of your writing is conceivable with professional book editing. Speak to one of our representatives, and we will be happy to assist! "}
              </p>
            </div>
            {" "}
            <div className="resume_inner">
              <div className="col-md-2">
                <div className="resume_box box18 wow bounceInLeft">
                  <a href="/book-editing-lp/images/port-1.webp" className="fancybox" rel="ligthbox">
                    <img data-lazy="images/port-1.webp" />
                    {" "}
                    <div className="box-content"><i className="fa fa-plus"></i></div>
                  </a>
                </div>
              </div>
              {" "}
              <div className="col-md-2">
                <div className="resume_box box18 wow bounceInLeft">
                  <a href="/book-editing-lp/images/port-2.webp" className="fancybox" rel="ligthbox">
                    <img data-lazy="images/port-2.webp" />
                    {" "}
                    <div className="box-content"><i className="fa fa-plus"></i></div>
                  </a>
                </div>
              </div>
              {" "}
              <div className="col-md-2">
                <div className="resume_box box18 wow bounceInUp">
                  <a href="/book-editing-lp/images/port-3.webp" className="fancybox" rel="ligthbox">
                    <img data-lazy="images/port-3.webp" />
                    {" "}
                    <div className="box-content"><i className="fa fa-plus"></i></div>
                  </a>
                </div>
              </div>
              {" "}
              <div className="col-md-2">
                <div className="resume_box box18 wow bounceInUp">
                  <a href="/book-editing-lp/images/port-4.webp" className="fancybox" rel="ligthbox">
                    <img data-lazy="images/port-4.webp" />
                    {" "}
                    <div className="box-content"><i className="fa fa-plus"></i></div>
                  </a>
                </div>
              </div>
              {" "}
              <div className="col-md-2">
                <div className="resume_box box18 wow bounceInRight">
                  <a href="/book-editing-lp/images/port-5.webp" className="fancybox" rel="ligthbox">
                    <img data-lazy="images/port-5.webp" />
                    {" "}
                    <div className="box-content"><i className="fa fa-plus"></i></div>
                  </a>
                </div>
              </div>
              {" "}
              <div className="col-md-2">
                <div className="resume_box box18 wow bounceInRight">
                  <a href="/book-editing-lp/images/port-6.webp" className="fancybox" rel="ligthbox">
                    <img data-lazy="images/port-6.webp" />
                    {" "}
                    <div className="box-content"><i className="fa fa-plus"></i></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="enhance-doc">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="hd-txt">
                <h2>Polished Narration</h2>
                {" "}
                <p>
                  Select our skillful book editors who have proficiency in providing valuable book editing services. Accomplish your desire to be a noteworthy and blockbuster writer.
                </p>
              </div>
            </div>
            {" "}
            <div className="col-sm-4 col-sm-push-8">
              <ul id="highlights-explained">
                <li id="explanation-1" className="explanation expanded">
                  <div className="explanation__header">
                    <span className="nr-icon nr-icon-1" id="nr-icon-list-1">1</span>
                    {" "}
                    <h3 className="explanation__header__title">{"Proofreading & Editing"}</h3>
                  </div>
                  {" "}
                  <div className="explanation__text" style={{ "display": "none" }}>
                    <p>{"Example comment for Proofreading & Editing service:"}</p>
                    {" "}
                    <p>
                      <em>
                        {" “Since you indicated that you’re allowed to use first-person pronouns, consider using the active voice here. This is a simple way to make your writing clearer and more compelling. "}
                      </em>
                    </p>
                  </div>
                </li>
                <li id="explanation-2" className="explanation expanded">
                  <div className="explanation__header">
                    <span className="nr-icon nr-icon-2" id="nr-icon-list-2">2</span>
                    {" "}
                    <h3 className="explanation__header__title">Clarity Check</h3>
                  </div>
                  {" "}
                  <div className="explanation__text" style={{ "display": "none" }}>
                    <p>Example comment for Clarity Check:</p>
                    {" "}
                    <p>
                      <em>
                        {" “The extent to which this is an obvious consequence of the information you’ve provided is not entirely clear. Try to make this relationship more apparent. Reviewing your linking word choices may help you here.” "}
                      </em>
                    </p>
                  </div>
                </li>
                <li id="explanation-3" className="explanation expanded">
                  <div className="explanation__header">
                    <span className="nr-icon nr-icon-3" id="nr-icon-list-3">3</span>
                    {" "}
                    <h3 className="explanation__header__title">Structure Check</h3>
                  </div>
                  {" "}
                  <div className="explanation__text" style={{ "display": "none" }}>
                    <p>Example comment for Structure Check:</p>
                    {" "}
                    <p>
                      <em>
                        {" “Make sure to include all the important elements of a discussion section. In particular, this section could be strengthened by discussing the limitations of the study in more detail. "}
                      </em>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {" "}
            <div className="col-sm-8 col-sm-pull-4">
              <div className="example-document">
                <p>
                  <span className="highlight">
                    <u>I observed a</u>
                    <del>A</del>
                    {" striking resemblance"}
                  </span>
                  {" "}
                  <del>has been seen</del>
                  between the success rate
                  <u>s</u>
                  {" of "}
                  <u>the</u>
                  {" Netherlands and "}
                  <del>that of</del>
                  {"the US. "}
                  <del>In the study by</del>
                  Martynova and Renneboog (2010)
                  <del>it already became clear</del>
                  {" "}
                  <u>found</u>
                  {" that shareholder protection was almost equal "}
                  <del>between the US and the Netherlands</del>
                  <u>in both countries</u>
                  {". This "}
                  <del>corresponded</del>
                  <u>corresponds to</u>
                  {" the fact that the"}
                  <u>y both have a</u>
                  {" success rate"}
                  <del>{" is"}</del>
                  {" "}
                  <u>of</u>
                  {" approximately "}
                  <del>the</del>
                  {" 40%. "}
                </p>
                {" "}
                <p>
                  <u>At least one</u>
                  <del>More than 1</del>
                  {" hedge fund acquired a share in "}
                  <u>14</u>
                  <del>the company in fourteen</del>
                  {" of the 36 listed companies in my database. "}
                  <u>Of these,</u>
                  {" 10 "}
                  <del>of those</del>
                  {"were working together to achieve certain goals. The "}
                  <u>hedge funds held a share in the company for an</u>
                  {" average length of "}
                  <del>hedge funds holding a share in the company is</del>
                  {"531 days. Although Brav et al. (2008) "}
                  <u>considered</u>
                  <del>may find</del>
                  {" this long-term "}
                  <del>period</del>
                  <u>,</u>
                  {" I consider 531 days "}
                  <del>is still to be seen as</del>
                  {" to be short-term. "}
                </p>
                {" "}
                <p>
                  {" The average percentage "}
                  <u>of</u>
                  {" voting power "}
                  <del>{"is initial "}</del>
                  <u>ranges between</u>
                  {" 8.06% and "}
                  <del>the maximum voting power is</del>
                  {" 10.10%. "}
                  <span className="highlight">
                    <u>From</u>
                    {" "}
                    <del>By looking at</del>
                    {" this data"}
                    <u>,</u>
                    {" it can be concluded that hedge funds are not generally involved in acquiring controlling blocks of stock."}
                  </span>
                </p>
                {" "}
                <p><span className="highlight"><strong>Discussion</strong></span></p>
                {" "}
                <p>
                  <u>Conducting</u>
                  {" "}
                  <del>Doing</del>
                  {" an extensive"}
                  <del>ly</del>
                  {" study of the shareholder activism "}
                  <u>undertaken</u>
                  {" by hedge funds "}
                  <u>in the Netherlands over a</u>
                  {" "}
                  <del>for the past</del>
                  {" decade required a great deal of precise work. "}
                  <del>But although</del>
                  {" "}
                  <u>Even though</u>
                  {" I did"}
                  <del>n’t</del>
                  {" "}
                  <u>not</u>
                  {" use any private information"}
                  <u>,</u>
                  {" this study "}
                  <del>pretty nice gives a</del>
                  {" "}
                  <u>provides</u>
                  {" insight in"}
                  <u>to</u>
                  {" hedge fund activism in the country. "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="price-cta-sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 cta-main-col">
              <div className="col-sm-7">
                <div className="cta-lft-div">
                  <div className="hd-txt">
                    <h2>
                      {"We prepare your book "}
                      <br />
                      for self-publishing journey!
                    </h2>
                    {" "}
                    <p>
                      publisher 4 states make your book look unblemished through scrupulous editing as we:
                    </p>
                    {" "}
                    <ul>
                      <li>Shape book text as needed</li>
                      <li>Improvise the book plotting</li>
                      <li>Improve characterization</li>
                    </ul>
                  </div>
                  {" "}
                  <div className="bnr-btn cta-btn">
                    <a data-legacy-href="javascript:;" className="get-btn popup-btn">Discuss Your Project</a>
                    {" "}
                    <a data-legacy-href="javascript:;" className="chat-btn chats">Live Chat</a>
                  </div>
                </div>
              </div>
              {" "}
              <div className="col-sm-5">
                <div className="cta-slide-st">
                  <div className="cta-slider">
                    <div>
                      <div className="cta-box">
                        <div className="cta-img-txt">
                          <img className="lozad" src="/book-editing-lp/images/cta-slide-img-1.webp" />
                          {" "}
                          <h3>
                            {"Supreme "}
                            <br />
                            editing
                          </h3>
                        </div>
                        {" "}
                        <p>
                          Our knowledgeable members follow a systematic and proven approach to book editing to help you improve your account. It is achievable with our superlative book editing!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="hd-txt">
                <h2>{"What is the method of our Book editing? "}</h2>
                {" "}
                <p>
                  {"Our group comprises qualified and scholarly members working on a manuscript & making it free from writing faults and puny points. Contact the editing pundits!"}
                </p>
              </div>
            </div>
            {" "}
            <div className="col-sm-12 main-process-col">
              <ul>
                <li>
                  <div className="process-div process-num-1">
                    <img className="lozad" src="/book-editing-lp/images/process-icon-1.webp" />
                    {" "}
                    <h3>Order settlement</h3>
                    {" "}
                    <p>
                      {"As soon as the customer places the order, we initiate the project work. "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="process-div process-num-2">
                    <img className="lozad" src="/book-editing-lp/images/process-icon-2.webp" />
                    {" "}
                    <h3>Project outlining</h3>
                    {" "}
                    <p>
                      {"Depending on the demands of the book, we design a project framework functioning as a blueprint. "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="process-div process-num-3">
                    <img className="lozad" src="/book-editing-lp/images/process-icon-3.webp" />
                    {" "}
                    <h3>{"Expert editing "}</h3>
                    {" "}
                    <p>
                      Professional editing take place following guidelines with a consultation to client and project supervisors.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="process-div process-num-4">
                    <img className="lozad" src="/book-editing-lp/images/process-icon-4.webp" />
                    {" "}
                    <h3>{"Task completion "}</h3>
                    {" "}
                    <p>
                      Editing executives and QA check the work to review it is following the instructions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="process-div process-num-5">
                    <img className="lozad" src="/book-editing-lp/images/process-icon-5.webp" />
                    {" "}
                    <h3>Project delivery</h3>
                    {" "}
                    <p>
                      After multiple checks by professionals, the project manager sends the work to the customer.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-sec lozad" data-background-image="/book-editing-lp/images/trust-bg.webp">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="trust-txt-sec hd-txt">
                <h2>Witness the wonders of good book editing!</h2>
                {" "}
                <p>
                  {"publisher 4 states comprises an ambitious and motivated group of professional editors. Following the steps part of our editing method, they polish a write-up to perfection. Don’t worry anymore about the quality of writing when we’re here to refine it. Contact Now! "}
                  <br />
                  <br />
                  {" If it is your first time booking a book editor, you might be a little intimidated by the procedure. However, no worries to any further extent – at publisher 4 states, it is most accessible. The approach involves working on grammar, typos, language, disregarded errors, and more. "}
                  <br />
                  <br />
                  Communicate with the real pioneers of book editing at publisher 4 states.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-sec-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="cta-side-img-2">
                <img className="lozad" src="/book-editing-lp/images/cta-side-img-2.webp" />
              </div>
            </div>
            {" "}
            <div className="col-sm-6">
              <div className="cta-side-txt hd-txt">
                <h2>
                  {"Looking for an editor with "}
                  <br />
                  outstanding skills. We are here!
                </h2>
                {" "}
                <div className="bnr-btn trust-btn">
                  <a data-legacy-href="javascript:;" className="get-btn popup-btn">Discuss Your Project</a>
                  {" "}
                  <a data-legacy-href="javascript:;" className="chat-btn chats">Live Chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testi-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="hd-txt">
                <h2>Statements</h2>
                {" "}
                <p>
                  We are getting bigger and better day by day with every successful project completion. Our clients say:
                </p>
                {" "}
                <img className="testi-img-txt lozad" src="/book-editing-lp/images/testi-img-txt.webp" />
              </div>
            </div>
            {" "}
            <div className="col-sm-12">
              <div className="testi-slider-st">
                <div className="testi-slider">
                  <div>
                    <div className="testi-box">
                      <p>
                        I’ll extend the credit of my poem book to the extraordinary book editing of this place.
                      </p>
                      {" "}
                      <div className="testi-name-start">
                        <div className="testi-name">
                          <img data-lazy="images/testi-img1.webp" />
                          {" "}
                          <h4>Ella Robinson</h4>
                        </div>
                        {" "}
                        <div className="star-testi">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div>
                    <div className="testi-box">
                      <p>
                        I feel admiration for publisher 4 states' talented editors. Their task execution was fabulous!
                      </p>
                      {" "}
                      <div className="testi-name-start">
                        <div className="testi-name">
                          <img data-lazy="images/testi-img2.webp" />
                          {" "}
                          <h4>Wren McMillan</h4>
                        </div>
                        {" "}
                        <div className="star-testi">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div>
                    <div className="testi-box">
                      <p>
                        {"publisher 4 states tweaked my words. Now I feel my fiction fable is more relatable than before. "}
                      </p>
                      {" "}
                      <div className="testi-name-start">
                        <div className="testi-name">
                          <img data-lazy="images/testi-img3.webp" />
                          {" "}
                          <h4>Ove Millers</h4>
                        </div>
                        {" "}
                        <div className="star-testi">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div>
                    <div className="testi-box">
                      <p>
                        I took the help of publisher 4 states for book editing of one of my famous clients. She loved it, and the book is a best-seller these days.
                      </p>
                      {" "}
                      <div className="testi-name-start">
                        <div className="testi-name">
                          <img data-lazy="images/testi-img4.webp" />
                          {" "}
                          <h4>{"L. R Della "}</h4>
                        </div>
                        {" "}
                        <div className="star-testi">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                          {" "}
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-sec3 lozad" data-background-image="/book-editing-lp/images/cta-bg-2.webp">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="hd-txt cta-txt-st">
                <h2>Struggling with the tedious task of book editing?</h2>
                {" "}
                <p>
                  publisher 4 states give the top book editing services, ensuring the work is dealt with professionally.
                </p>
                {" "}
                <div className="bnr-btn cta-btn">
                  <a data-legacy-href="javascript:;" className="get-btn popup-btn">Discuss Your Project</a>
                  {" "}
                  <a data-legacy-href="javascript:;" className="chat-btn chats">Live Chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftr-logo">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="ftr-logo-div">
                <img className="lozad" src="/book-editing-lp/images/ftr-logo-img.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftr-copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12"><p>Copyright © 2023, publisher 4 states All Rights Reserved</p></div>
          </div>
        </div>
      </section>
      <div className="overlay-bg-new-popup"></div>
      <div className="popupform-main-new-popup" style={{ "display": "none" }}>
        <div className="popup-main-box">
          <div className="pop-box-2-new-pop"><img src="/book-editing-lp/auto-pop-bg-2.webp" /></div>
          {" "}
          <div className="pop-form-new-popp ta-center-new-pop">
            <a data-legacy-href="javascript:;" className="close-btn ta-center">X</a>
            {" "}
            <h3><span>Activate Your Coupon</span></h3>
            {" "}
            <h5>At Affordable Rates?</h5>
            {" "}
            <div id="pop-form-new-popp" className="col-sm-12">
              <form method="post" className="right" data-lead="1">
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
                <input type="hidden" name="subject" data-add-page-url="1" defaultValue="Banner Form" />
                {" "}
                <div className="form-div form-div-1">
                  <input type="text" name="name" placeholder="Your Name" required defaultValue="" />
                </div>
                {" "}
                <div className="form-div form-div-2">
                  <input type="email" name="email" placeholder="Your Email" defaultValue="" required />
                </div>
                {" "}
                <div className="form-div form-div-3">
                  <input id="phone-countr" className="phone" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                </div>
                {" "}
                <div className="form-div form-div-4">
                  <textarea name="brief" autoComplete="nope" placeholder="Enter Brief"></textarea>
                </div>
                {" "}
                <div className="text-center form-div-btn">
                  <input className="btn_green" type="submit" id="quoteSubmit" data-hover="Submit" name="cta1" value="Get a free quote" />
                  {" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  {" "}
                  <div className="error mt-3 alert alert-danger text-left mb-0" style={{ "display": "none" }}></div>
                  {" "}
                  <div className="success mt-3 alert alert-success text-left mb-0" style={{ "display": "none" }}></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
