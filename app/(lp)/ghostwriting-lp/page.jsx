import PageAssets from '@/components/PageAssets';

export const metadata = {
  title: { absolute: "Ghost Writing In No Time | publisher 4 states" },
  robots: { index: false, follow: false },
};

export default function GhostwritingLpPage() {
  return (
    <>
      <PageAssets
        styles={[
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css",
          "/ghostwriting-lp/assets/css/vendor.css",
          "/ghostwriting-lp/assets/css/style.css",
          "/ghostwriting-lp/_legacy/ghostwriting-lp-index-1.css",
        ]}
        scripts={[
          "/ghostwriting-lp/assets/js/jquery-3.7.0.min.js",
          "/ghostwriting-lp/_legacy/ghostwriting-lp-index-1.js",
          "/ghostwriting-lp/assets/js/plugin.js",
          "/ghostwriting-lp/assets/js/lozad.min.js",
          "/ghostwriting-lp/assets/js/custom.js",
          "/ghostwriting-lp/_legacy/ghostwriting-lp-index-2.js",
          "/ghostwriting-lp/_legacy/ghostwriting-lp-index-3.js",
          "/ghostwriting-lp/_legacy/ghostwriting-lp-index-4.js",
          "https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
          "/ghostwriting-lp/_legacy/ghostwriting-lp-index-5.js",
        ]}
      />
      <header className="py-2 text-white">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-3 col-md-4 col-3 d-md-none">
              <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center"><span className="icon-chat me-2 icon"></span></a>
            </div>
            {" "}
            <div className="col-xl-2 col-lg-3 col-md-3 col-6">
              <a className="logo" href="https://publisher4states.com/ghostwriting-lp">
                <img className="lozad" src="https://publisher4states.com/assets/img/logo-white.png" />
              </a>
            </div>
            {" "}
            <div className="col-xl-7 col-lg-8 col-md-9 col-3">
              <div className="row justify-content-end">
                <div className="col-lg-3 col-md-3 col-6 align-self-center d-none d-md-block">
                  <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center">
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
      <section className="banner bg lozad" data-background-image="/ghostwriting-lp/assets/img/newyear.webp">
        <div className="overlay pt-5">
          <div className="container-xl pt-5 mt-3">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-white">
                <p className="subhead">It's Time You Share Your Amazing Story!</p>
                {" "}
                <h1 className="f-50">With Our Ghostwriting Services</h1>
                {" "}
                <p>
                  Our expert ghostwriters can embed the true essence of your story in their content before formatting and publishing it, without costing a fortune.
                </p>
                {" "}
                <ul className="list-unstyled c-list row row-cols-md-2 row-cols-1 text-md-start mb-0">
                  <li className="col mb-2">{" Trusted by 400+ authors "}</li>
                  <li className="col mb-2">{" 2.5k+ writers and editors "}</li>
                  <li className="col mb-2">{" 10,000+ Publishing Platforms. "}</li>
                  <li className="col mb-2">{" Quick Turn Around Time. "}</li>
                </ul>
                {" "}
                <form className="text-start mt-3 mb-4" method="post" data-lead="1">
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
                    <div className="form-group col-lg-4 col-md-6 mb-3">
                      <input className="form-control" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                    </div>
                    {" "}
                    <div className="form-group col-lg-4 col-md-6 mb-3">
                      <input className="form-control" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                    </div>
                    {" "}
                    <div className="form-group col-lg-4 col-md-6 mb-3">
                      <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                    </div>
                    {" "}
                    <div className="form-group col-lg-8 col-md-6 mb-3">
                      <input className="form-control" autoComplete="nope" name="message" placeholder="Enter Brief" defaultValue="" />
                    </div>
                    {" "}
                    <div className="form-group col-lg-4 col-md-6">
                      <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Discuss Your Project</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {" "}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <img className="d-lg-block d-none right" src="/ghostwriting-lp/assets/img/typewriter.webp" />
          </div>
          {" "}
          <div className="container">
            <div className="row">
              <img className="lozad w-100" src="/ghostwriting-lp/assets/img/client-logos.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-4 pt-md-0 mt-5">
        <div className="container-xl mt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-4 align-self-end">
              <img className="lozad w-100" src="/ghostwriting-lp/assets/img/book-2.webp" alt="" />
            </div>
            {" "}
            <div className="col-lg-6 col-md-8">
              <p className="f-24 fw-700">Are You Looking</p>
              <p></p>
              <h3 className="f-40 fw-700">
                To Hire A Writer
                <br />
                {" To Write Your Book?"}
              </h3>
              {" "}
              <p>
                Got a great storyline but having a hard time writing the book yourself? Here's why you need to hire a book writing company:
              </p>
              {" "}
              <ul className="list-unstyled row row-cols-1 row-cols-md-2 c-list">
                <li>Professional Writers</li>
                <li>Time Management</li>
                <li>Extensive Research</li>
                <li>Structuring and Organization</li>
                <li>Editing and Proofreading</li>
                <li>Voice and Style Consistency</li>
                <li>Expertise in Genre</li>
                <li>Publishing Guidance</li>
              </ul>
              {" "}
              <div className="d-flex flex-wrap mt-5 align-items-center">
                <button className="me-3 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                {" "}
                <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                  <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center">
                    <span className="icon-chat me-2 icon"></span>
                    {" "}
                    <span className="">
                      <span className="clr-1 fw-700">Chat With Us</span>
                      {" "}
                      <br />
                      {" "}
                      <span className="fw-700">Let's Talk</span>
                    </span>
                  </a>
                </div>
                {" "}
                <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                  <a href="tel:(833) 206-5993" className="call d-flex align-items-center">
                    <span className="icon-phone me-2 icon"></span>
                    {" "}
                    <span className="">
                      <span className="clr-1 fw-700">Call Now</span>
                      {" "}
                      <br />
                      {" "}
                      <span className="fw-700">(833) 206-5993</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-fluid lozad bg cta" data-background-image="/ghostwriting-lp/assets/img/Mask-Group.png">
          <div className="row justify-content-md-between">
            <div className="col-lg-4 col-md-7 mt-4 ps-md-5">
              <h3 className="text-white mt-5 fw-700">{" We give words to your thoughts! "}</h3>
              {" "}
              <p className="text-white">{" Start now and avail up to 50% off on all of our packages. "}</p>
            </div>
            {" "}
            <div className="col-xxl-3 col-lg-4 col-md-5 position-relative col-5 d-none d-md-block">
              <img className="lozad w-100" src="/ghostwriting-lp/assets/img/center-img.png" />
            </div>
            {" "}
            <div className="col-lg-2 col-md-6 mt-md-5 pt-4">
              <a href="tel:(833) 206-5993" className="call d-flex align-items-center justify-content-md-start justify-content-center">
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
            <div className="col-lg-2 col-md-6 mt-md-5 pt-4 pe-md-5 mb-5 mb-md-0">
              <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 pt-md-0 mt-5">
        <div className="container-xl mt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8">
              <h3 className="fw-700 f-30">Creating Masterpieces: Unleash Your Story with Our Ghostwriters</h3>
              {" "}
              <p>
                The storyline can create a massive impact on the readers while building up the suspense can not only engage the readers and get them glued to the pages of your book but also encourage them to read the whole story to help them understand the narrative you are trying to convey, helping you gain loyal followers that not only read your material but also respective your author expertise.
              </p>
              {" "}
              <p>
                We understand the vitality and necessity of your book, and we know how to shape your thoughts, bring them to life, and compile them in such a form that would convey your message and promote you as a credible, creative author who knows their audience while also establishing you as someone who works towards their literary success.
              </p>
              {" "}
              <div className="d-flex flex-wrap mt-4 align-items-center">
                <button className="me-3 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                {" "}
                <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                  <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center">
                    <span className="icon-chat me-2 icon"></span>
                    {" "}
                    <span className="">
                      <span className="clr-1 fw-700">Chat With Us</span>
                      {" "}
                      <br />
                      {" "}
                      <span className="fw-700">Let's Talk</span>
                    </span>
                  </a>
                </div>
                {" "}
                <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                  <a href="tel:(833) 206-5993" className="call d-flex align-items-center">
                    <span className="icon-phone me-2 icon"></span>
                    {" "}
                    <span className="">
                      <span className="clr-1 fw-700">Call Now</span>
                      {" "}
                      <br />
                      {" "}
                      <span className="fw-700">(833) 206-5993</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-lg-6 col-md-4 align-self-end">
              <img className="lozad w-100" src="/ghostwriting-lp/assets/img/book.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 pb-5">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-10 mb-4">
              <h2 className="f-40 fw-700">{" Our Process "}</h2>
              {" "}
              <p>
                Our process involves several essential stages to ensure the successful creation of your manuscript. It begins with Initial Research and Draft Outlining, where we delve into your idea and requirements, conducting thorough research and creating a preliminary outline for your review.
              </p>
            </div>
          </div>
        </div>
        {" "}
        <div className="container">
          <div className="row justify-content-between">
            <div className="p-3 col-lg-3 col-md-4 col-sm-6 proces text-center">
              <img className="lozad" src="/ghostwriting-lp/assets/img/research-development.png" />
              {" "}
              <h5>{"Initial Research & Draft Outlining"}</h5>
              {" "}
              <p>
                {"Our aim is to understand your idea & requirements by conducting research, creating a tentative outline for you to review."}
              </p>
            </div>
            {" "}
            <div className="p-3 col-lg-3 col-md-4 col-sm-6 proces text-center">
              <img className="lozad" src="/ghostwriting-lp/assets/img/7.png" />
              {" "}
              <h5>Writing Original Content</h5>
              {" "}
              <p>
                {"Once you approve the outline & table of contents, our dedicated writing team will write & share drafts of the manuscript with you chapter by chapter."}
              </p>
            </div>
            {" "}
            <div className="p-3 col-lg-3 col-md-4 col-sm-6 proces text-center">
              <img className="lozad" src="/ghostwriting-lp/assets/img/8.png" />
              {" "}
              <h5>Critical Review, Edit And Proofread</h5>
              {" "}
              <p>
                {" Our team ensures the manuscript is error-free by Proofreading & Editing the initial draft approved by the author."}
              </p>
            </div>
            {" "}
            <div className="p-3 col-lg-3 col-md-4 col-sm-6 proces text-center">
              <img className="lozad" src="/ghostwriting-lp/assets/img/9.png" />
              {" "}
              <h5>Formatting And Designing</h5>
              {" "}
              <p>
                {" Your manuscript will be formatted according to the International Publishing Standards. Our Illustrators/Designers will add all the pictures, fonts, and illustrations to your book."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 pricing">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center mb-4">
              <h3 className="fw-700 f-40">Providing You The Most Affordable Pricing</h3>
              {" "}
              <p>
                {"At publisher 4 states, You get all of the economic rates without compromising or hurting the quality of your content. "}
              </p>
            </div>
          </div>
          {" "}
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
            <div className="col mb-5 mb-lg-0">
              <div className="package">
                <div className="price">
                  <div className="row align-items-center">
                    <div className="col-12 text-center clr-1"><p className="mb-0 f-30 fw-700">Silver Package</p></div>
                    {" "}
                    <div className="shadow col-12 text-center m-3">
                      <h5 className="f-18 mb-0 chat">Chat Now to Avail Discounted Pricing</h5>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="details">
                  <ul className="list-unstyled c-list">
                    <li className="">{" Creating/updating the outline "}</li>
                    <li className="">
                      {" Completing the entire book 100-150 pages as per the requirements/outline "}
                    </li>
                    <li className="">
                      {" Adjusting the layout and presentation with international publishing standards "}
                    </li>
                    <li className="">{" Unlimited revisions "}</li>
                    <li className="">{" A dedicated team of expert writers "}</li>
                    <li className="">{" Access to the online portal "}</li>
                    <li className="">{" 100% Content Copyrights "}</li>
                    <li className="">{" 100% satisfaction guaranteed. "}</li>
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
                      <a data-legacy-href="javascript:void(0)" className="chat">
                        Want to discuss?
                        <br />
                        <span className="f-18 fw-700">Live Chat Now</span>
                      </a>
                    </div>
                  </div>
                  {" "}
                  <button className="btns" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">GET STARTED</button>
                </div>
              </div>
            </div>
            {" "}
            <div className="col mb-5 mb-lg-0">
              <div className="package">
                <div className="price">
                  <div className="row align-items-center">
                    <div className="col-12 text-center clr-1">
                      <p className="mb-0 f-30 fw-700">Gold Package</p>
                      {" "}
                      <span className="sticker">Best Seller</span>
                    </div>
                    {" "}
                    <div className="shadow col-12 text-center m-3">
                      <h5 className="f-18 mb-0 chat">Chat Now to Avail Discounted Pricing</h5>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="details">
                  <ul className="list-unstyled c-list">
                    <li>Creating/updating the outline</li>
                    <li>
                      Completing the entire book 100-150 pages as per the requirements/outline
                    </li>
                    <li>
                      Adjusting the layout and presentation with international publishing standards
                    </li>
                    <li>Unlimited revisions</li>
                    <li>Author Central Page Creation</li>
                    <li>Unlimited revisions</li>
                    <li>A dedicated team of expert writers</li>
                    <li>{"Publishing on Amazon, Kindle, and Barnes & Noble"}</li>
                    <li>Access to the online portal</li>
                    <li>Syntax Report</li>
                    <li>Grammar Report</li>
                    <li>Free Cover Design</li>
                    <li>Editing, Proofreading, and formatting</li>
                    <li>100% Content Copyrights</li>
                    <li>100% satisfaction guaranteed.</li>
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
                      <a data-legacy-href="javascript:void(0)" className="chat">
                        Want to discuss?
                        <br />
                        <span className="f-18 fw-700">Live Chat Now</span>
                      </a>
                    </div>
                  </div>
                  {" "}
                  <button className="btns" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">GET STARTED</button>
                </div>
              </div>
            </div>
            {" "}
            <div className="col mb-5 mb-lg-0">
              <div className="package">
                <div className="price">
                  <div className="row align-items-center">
                    <div className="col-12 text-center clr-1"><p className="mb-0 f-30 fw-700">Platinum Package</p></div>
                    {" "}
                    <div className="shadow col-12 text-center m-3">
                      <h5 className="f-18 mb-0 chat">Chat Now to Avail Discounted Pricing</h5>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="details">
                  <ul className="list-unstyled c-list">
                    <li>Creating/updating the outline</li>
                    <li>
                      Completing the entire book 250+ pages as per the requirements/outline.
                    </li>
                    <li>
                      Adjusting the layout and presentation with international publishing standards
                    </li>
                    <li>Unlimited revisions</li>
                    <li>A dedicated team of expert writers</li>
                    <li>{"Publishing on Amazon, Kindle, and Barnes & Noble"}</li>
                    <li>Access to the online portal</li>
                    <li>Syntax Report</li>
                    <li>Grammar Report</li>
                    <li>Free Cover Design</li>
                    <li>Editing, Proofreading, and formatting</li>
                    <li>100% Content Copyrights</li>
                    <li>100% satisfaction guaranteed.</li>
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
                      <a data-legacy-href="javascript:void(0)" className="chat">
                        Want to discuss?
                        <br />
                        <span className="f-18 fw-700">Live Chat Now</span>
                      </a>
                    </div>
                  </div>
                  {" "}
                  <button className="btns" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">GET STARTED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-5 mt-5">
          <div className="container-xl">
            <div className="row text-center justify-content-center">
              <div className="col-lg-10 text-center mb-4">
                <h2 className="fw-700 f-39">At your service 24/7</h2>
                {" "}
                <p>
                  {"Within our company, we deeply understand that writers, regardless of the genre they embrace, are entitled to the support required to manifest their creative visions. "}
                </p>
              </div>
            </div>
            {" "}
            <ul className="nav nav-tabs justify-content-between border-bottom-0" id="myTab" role="tablist">
              <li className="nav-item mb-2" role="presentation">
                <button className="nav-link active" id="Ghostwriting-tab" data-bs-toggle="tab" data-bs-target="#Ghostwriting" type="button" role="tab" aria-controls="Ghostwriting" aria-selected="true">Romance</button>
              </li>
              <li className="nav-item mb-2" role="presentation">
                <button className="nav-link" id="Editing-tab" data-bs-toggle="tab" data-bs-target="#Editing" type="button" role="tab" aria-controls="Editing" aria-selected="false">Science Fiction</button>
              </li>
              <li className="nav-item mb-2" role="presentation">
                <button className="nav-link" id="Publishing-tab" data-bs-toggle="tab" data-bs-target="#Publishing" type="button" role="tab" aria-controls="Publishing" aria-selected="false">Historical Fiction</button>
              </li>
              <li className="nav-item mb-2" role="presentation">
                <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing" type="button" role="tab" aria-controls="marketing" aria-selected="false">Mystery/Thriller</button>
              </li>
              <li className="nav-item mb-2" role="presentation">
                <button className="nav-link" id="outluning-tab" data-bs-toggle="tab" data-bs-target="#outluning" type="button" role="tab" aria-controls="outluning" aria-selected="false">Self-Help</button>
              </li>
              <li className="nav-item mb-2" role="presentation">
                <button className="nav-link" id="formating-tab" data-bs-toggle="tab" data-bs-target="#formating" type="button" role="tab" aria-controls="formating" aria-selected="false">Fantasy</button>
              </li>
            </ul>
            {" "}
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="Ghostwriting" role="tabpanel" aria-labelledby="Ghostwriting-tab">
                <div className="row py-4 align-items-center">
                  <div className="col-lg-6">
                    <img className="lozad" src="/ghostwriting-lp/assets/img/category/romance.png" />
                    {" "}
                    <h3 className="roma fw-700 f-20">{" Romance "}</h3>
                    {" "}
                    <p>
                      A subgenre that consists of love, empathy, and unforgettable characters that the audience relates to, We write stories that are soul inspiring and heart touching, collaborate with our ghostwriters to make an unforgettable masterpiece.
                    </p>
                    {" "}
                    <div className="d-flex flex-wrap mt-3 align-items-center">
                      <button className="me-3 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center">
                          <span className="icon-chat me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Chat With Us</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">Let's Talk</span>
                          </span>
                        </a>
                      </div>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a href="tel:(833) 206-5993" className="call d-flex align-items-center">
                          <span className="icon-phone me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Call Now</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">(833) 206-5993</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="col-lg-6">
                    <div className="book-slider d-flex">
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/r-1.webp" />
                        </a>
                      </div>
                      {" "}
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/r-2.webp" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className="tab-pane fade" id="Editing" role="tabpanel" aria-labelledby="Editing-tab">
                <div className="row py-4 align-items-center">
                  <div className="col-lg-6">
                    <img className="lozad" src="/ghostwriting-lp/assets/img/category/scifi.png" />
                    {" "}
                    <h3 className="roma fw-700 f-20">{" Science Fiction "}</h3>
                    {" "}
                    <p>
                      A subgenre that endeavors fantastical and future concepts often includes cutting-edge technology, space wars, time travel, parallel realities, and wild science fiction.
                    </p>
                    {" "}
                    <div className="d-flex flex-wrap mt-3 align-items-center">
                      <button className="me-3 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center">
                          <span className="icon-chat me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Chat With Us</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">Let's Talk</span>
                          </span>
                        </a>
                      </div>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a href="tel:(833) 206-5993" className="call d-flex align-items-center">
                          <span className="icon-phone me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Call Now</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">(833) 206-5993</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="col-lg-6">
                    <div className="book-slider d-flex">
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/scifi-1.webp" />
                        </a>
                      </div>
                      {" "}
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/scifi-2.webp" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className="tab-pane fade" id="Publishing" role="tabpanel" aria-labelledby="Publishing-tab">
                <div className="row py-4 align-items-center">
                  <div className="col-lg-6">
                    <img className="lozad" src="/ghostwriting-lp/assets/img/category/hifi.png" />
                    {" "}
                    <h3 className="roma fw-700 f-20">{" Historical Fiction "}</h3>
                    {" "}
                    <p>
                      Historical Fiction is a literary style where fictitious stories are interweaved with historically accurate places, people, and events, helping bring the past to life and allowing us to see insights into various cultures and civilizations.
                    </p>
                    {" "}
                    <div className="d-flex flex-wrap mt-3 align-items-center">
                      <button className="me-3 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center">
                          <span className="icon-chat me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Chat With Us</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">Let's Talk</span>
                          </span>
                        </a>
                      </div>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a href="tel:(833) 206-5993" className="call d-flex align-items-center">
                          <span className="icon-phone me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Call Now</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">(833) 206-5993</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="col-lg-6">
                    <div className="book-slider d-flex">
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/hifi-1.webp" />
                        </a>
                      </div>
                      {" "}
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/hifi-2.webp" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className="tab-pane fade" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                <div className="row py-4 align-items-center">
                  <div className="col-lg-6">
                    <img className="lozad" src="/ghostwriting-lp/assets/img/category/Mystery.png" />
                    {" "}
                    <h3 className="roma fw-700 f-20">{" Mystery/Thriller "}</h3>
                    {" "}
                    <p>
                      The genre frequently includes High-Stakes Plots, Constant Pursuits, and unexpected twists and turns that keep readers glued to their seats. It is often distinguished by suspense, immense thrill, and a sense of danger.
                    </p>
                    {" "}
                    <div className="d-flex flex-wrap mt-3 align-items-center">
                      <button className="me-3 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center">
                          <span className="icon-chat me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Chat With Us</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">Let's Talk</span>
                          </span>
                        </a>
                      </div>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a href="tel:(833) 206-5993" className="call d-flex align-items-center">
                          <span className="icon-phone me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Call Now</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">(833) 206-5993</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="col-lg-6">
                    <div className="book-slider d-flex">
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/Mystery-1.webp" />
                        </a>
                      </div>
                      {" "}
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/Mystery-2.webp" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className="tab-pane fade" id="outluning" role="tabpanel" aria-labelledby="outluning-tab">
                <div className="row py-4 align-items-center">
                  <div className="col-lg-6">
                    <img className="lozad" src="/ghostwriting-lp/assets/img/category/self-help.png" />
                    {" "}
                    <h3 className="roma fw-700 f-20">{" Self-Help "}</h3>
                    {" "}
                    <p>
                      We create Self-Help concepts that assist the readers in overcoming all the obstacles and struggles of life to make the best versions of themselves.
                    </p>
                    {" "}
                    <div className="d-flex flex-wrap mt-3 align-items-center">
                      <button className="me-3 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center">
                          <span className="icon-chat me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Chat With Us</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">Let's Talk</span>
                          </span>
                        </a>
                      </div>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a href="tel:(833) 206-5993" className="call d-flex align-items-center">
                          <span className="icon-phone me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Call Now</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">(833) 206-5993</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="col-lg-6">
                    <div className="book-slider d-flex">
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/self-help-1.webp" />
                        </a>
                      </div>
                      {" "}
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/self-help-2.webp" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className="tab-pane fade" id="formating" role="tabpanel" aria-labelledby="formating-tab">
                <div className="row py-4 align-items-center">
                  <div className="col-lg-6">
                    <img className="lozad" src="/ghostwriting-lp/assets/img/category/fantasy.png" />
                    {" "}
                    <h3 className="roma fw-700 f-20">{" Fantasy "}</h3>
                    {" "}
                    <p>
                      It is a genre where fantasy leads the stage and mixes with real-world events and epic journeys, taking place in exotic realms, with magic and witchcraft, a mythic world, and epic quests that keep your audience glued to the pages.
                    </p>
                    {" "}
                    <div className="d-flex flex-wrap mt-3 align-items-center">
                      <button className="me-3 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a data-legacy-href="javascript:void(0)" className="chat d-flex align-items-center">
                          <span className="icon-chat me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Chat With Us</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">Let's Talk</span>
                          </span>
                        </a>
                      </div>
                      {" "}
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-2 col-6">
                        <a href="tel:(833) 206-5993" className="call d-flex align-items-center">
                          <span className="icon-phone me-2 icon"></span>
                          {" "}
                          <span className="">
                            <span className="clr-1 fw-700">Call Now</span>
                            {" "}
                            <br />
                            {" "}
                            <span className="fw-700">(833) 206-5993</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="col-lg-6">
                    <div className="book-slider d-flex">
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/fantasy-1.webp" />
                        </a>
                      </div>
                      {" "}
                      <div className="item">
                        <a data-legacy-href="javascript:void(0)" className="portfolio">
                          <img className="lozad" src="/ghostwriting-lp/assets/img/category/fantasy-2.webp" />
                        </a>
                      </div>
                    </div>
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
            <div className="col-lg-10 text-center mb-4">
              <h3 className="fw-700 f-40">Why Choose Us?</h3>
              {" "}
              <p>
                publisher 4 states provides comprehensive ghostwriting services to aid authors in writing their books and being one step closer to being an accomplished author. Our book writing experts have in-depth experience of 10+ years and are committed to meeting all your expectations and bringing your ghostwriting dream to life.
              </p>
            </div>
          </div>
          {" "}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="row mb-2">
                <div className="col-md-2"><strong className="clr-1 f-70 subhead">01</strong></div>
                {" "}
                <div className="col-md-10">
                  <h4 className="fw-700 f-24">Complete Ownership</h4>
                  {" "}
                  <p>
                    You retain full ownership. We put in all the hard work. You gain all the assets with our skilled book writing assistance.
                  </p>
                </div>
              </div>
              {" "}
              <div className="row mb-2">
                <div className="col-md-2"><strong className="clr-1 f-70 subhead">02</strong></div>
                {" "}
                <div className="col-md-10">
                  <h4 className="fw-700 f-24">Cost-Effectiveness</h4>
                  {" "}
                  <p>
                    We uphold high standards and firmly believe achieving perfection shouldn't drain your financial resources. Our rates are reasonable, and our professional online ghostwriting services are unparalleled.
                  </p>
                </div>
              </div>
              {" "}
              <div className="row mb-2">
                <div className="col-md-2"><strong className="clr-1 f-70 subhead">03</strong></div>
                {" "}
                <div className="col-md-10">
                  <h4 className="fw-700 f-24">Swift Delivery</h4>
                  {" "}
                  <p>
                    Our exceptional work not only aligns with your requirements, but we also acknowledge the value of time and consistently meet our deadlines with expert book writing support.
                  </p>
                </div>
              </div>
              {" "}
              <div className="row mb-2">
                <div className="col-md-2"><strong className="clr-1 f-70 subhead">04</strong></div>
                {" "}
                <div className="col-md-10">
                  <h4 className="fw-700 f-24">Client Contentment</h4>
                  {" "}
                  <p>
                    Client contentment is our top priority, representing the most crucial aspect of any business. We have consistently demonstrated our unwavering commitment to maintaining the quality and standards of our work every time.
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="col-lg-6">
              <div className="row text-center">
                <div className="col-6">
                  <div className="box mb-3">
                    <p className="fw-700 clr-1 f-40 mb-0 subhead">900+</p>
                    {" "}
                    <p className="mb-0">Books Written</p>
                  </div>
                  {" "}
                  <div className="box">
                    <p className="fw-700 clr-1 f-40 mb-0 subhead">50+</p>
                    {" "}
                    <p className="mb-0">Book Experts</p>
                  </div>
                </div>
                {" "}
                <div className="col-6">
                  <div className="box mb-3 mt-lg-3">
                    <p className="fw-700 clr-1 f-40 mb-0 subhead">7+</p>
                    {" "}
                    <p className="mb-0">Year of Experience</p>
                  </div>
                  {" "}
                  <div className="box">
                    <p className="fw-700 clr-1 f-40 mb-0 subhead">100%</p>
                    {" "}
                    <p className="mb-0">Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-fluid lozad bg cta" data-background-image="/ghostwriting-lp/assets/img/Mask-Group.png">
          <div className="row justify-content-md-between">
            <div className="col-lg-4 col-md-7 mt-4 ps-md-5">
              <h3 className="text-white mt-5 fw-700">{" We give words to your thoughts! "}</h3>
              {" "}
              <p className="text-white">{" Start now and avail up to 50% off on all of our packages. "}</p>
            </div>
            {" "}
            <div className="col-xxl-3 col-lg-4 col-md-5 position-relative col-5 d-none d-md-block">
              <img className="lozad w-100" src="/ghostwriting-lp/assets/img/center-img.png" />
            </div>
            {" "}
            <div className="col-lg-2 col-md-6 mt-md-5 pt-4">
              <a href="tel:(833) 206-5993" className="call d-flex align-items-center justify-content-md-start justify-content-center">
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
            <div className="col-lg-2 col-md-6 mt-md-5 pt-4 pe-md-5 mb-5 mb-md-0">
              <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 reviews">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center mb-4">
              <h3 className="fw-700 f-40">What Our Clients Say</h3>
              {" "}
              <p>
                We have been in the industry for a long period, allowing us to gather a bunch of customers who praise our work. Don’t just believe it, read it yourself.
              </p>
            </div>
          </div>
          {" "}
          <div className="slider">
            <div className="item px-3">
              <div className="boxs review p-3 text-center">
                <div className="image"><img className="mx-auto" data-lazy="assets/img/client-1.webp" /></div>
                {" "}
                <div className="discription">
                  <strong>Monica Gibbs</strong>
                  {" "}
                  <p>
                    Everyone on the team worked closely with me and always kept me updated. My book is so well written that it might become a bestseller in future. This one is highly recommended if you're looking for a premium ebook writing company at low prices
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="item px-3">
              <div className="boxs review p-3 text-center">
                <div className="image"><img className="mx-auto" data-lazy="assets/img/client-2.webp" /></div>
                {" "}
                <div className="discription">
                  <strong>Moses Johnson</strong>
                  {" "}
                  <p>
                    So far, the best novel writing services. Their pricing is unbelievable. Everyone in the team is knowledgeable and goes the extra mile when writing or publishing your novel. Thanks to them, I could get my novel published in the best way possible. Their work is better than the rest because of the high quality of their writing, vocabulary choice, and research.
                  </p>
                </div>
              </div>
            </div>
            {" "}
            <div className="item px-3">
              <div className="boxs review p-3 text-center">
                <div className="image"><img className="mx-auto" data-lazy="assets/img/client-3.webp" /></div>
                {" "}
                <div className="discription">
                  <strong>Jodi Carroll</strong>
                  {" "}
                  <p>
                    They never miss a deadline and always complete the job on time. Furthermore, the team is always open to suggestions and communicates excellently. These book writers for hire are responsible, skilled enough, and reliable. Thank you so much, publisher 4 states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="lozad bg" data-background-image="/ghostwriting-lp/assets/img/newyear.webp">
        <div className="overlay">
          <div className="container py-5">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <h3 className="f-30 fw-700 text-white">We Would Love To Hear From You</h3>
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
                    <div className="form-group col-md-6">
                      <div className="form-group mb-3">
                        <input className="form-control" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                      </div>
                      {" "}
                      <div className="form-group mb-3">
                        <input className="form-control" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                      </div>
                      {" "}
                      <div className="form-group mb-3">
                        <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                      </div>
                    </div>
                    {" "}
                    <div className="form-group col-md-6">
                      <textarea className="form-control mb-3" autoComplete="nope" name="message" placeholder="Enter Brief" rows="3"></textarea>
                      {" "}
                      <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              {" "}
              <div className="col-xl-5 col-lg-6 text-white">
                <a href="tel:(833) 206-5993" className="call mb-3 text-start d-flex align-items-center">
                  <span className="icon-phone me-2 icon"></span>
                  {" "}
                  <span className="">
                    <span className="clr-1 fw-700">Call Now</span>
                    {" "}
                    <br />
                    {" "}
                    <span className="fw-700">(833) 206-5993</span>
                  </span>
                </a>
                {" "}
                <a href="mailto:info@publisher4states.com" className="call mb-3 text-start d-flex align-items-center">
                  <span className="icon-mail me-2 icon"></span>
                  {" "}
                  <span className="">
                    <span className="clr-1 fw-700">Mail Us</span>
                    {" "}
                    <br />
                    {" "}
                    <span className="fw-700">info@publisher4states.com</span>
                  </span>
                </a>
                {" "}
                <a data-legacy-href="javascript:void(0)" className="chat mb-4 text-start d-flex align-items-center">
                  <span className="icon-location me-2 icon"></span>
                  {" "}
                  <span className="">
                    <span className="clr-1 fw-700">Find Us</span>
                    {" "}
                    <br />
                    {" "}
                    <span className="fw-700">
                      {"5432 Geary Blvd Unit #796 San Francisco "}
                      <br />
                      CA 94121, United States
                    </span>
                  </span>
                </a>
                {" "}
                <ul className="list-unstyled d-flex">
                  <li>
                    <a href="https://www.facebook.com/americasbookwritingofficial" target="_blank"><span className="icon-fb me-2 icon"></span></a>
                  </li>
                  <li>
                    <a href="http://www.instagram.com/americasbookwriting" target="_blank"><span className="icon-insta me-2 icon"></span></a>
                  </li>
                </ul>
              </div>
            </div>
            {" "}
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 text-white">
                <p className="mb-0">{"© 2023 publisher 4 states | All Rights Reserved "}</p>
              </div>
              {" "}
              <div className="col-lg-5">
                <div className="row justify-content-between align-items-center">
                  <div className="col-2">
                    <a href="https://publisher4states.com/assets/img/dmca-certificate.png" target="_blank">
                      <img className="lozad" src="/ghostwriting-lp/assets/img/dmca.webp" />
                    </a>
                  </div>
                  {" "}
                  <div className="col-3">
                    <img className="lozad" src="/ghostwriting-lp/assets/img/trustpilot.webp" />
                  </div>
                  {" "}
                  <div className="col-6">
                    <img className="lozad" src="/ghostwriting-lp/assets/img/pay.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="modal fade" id="getaquote" tabIndex="-1" aria-labelledby="getaquoteLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body lozad text-center" data-background-image="/ghostwriting-lp/assets/img/newyear-offer.webp" style={{ "backgroundSize": "cover", "backgroundPosition": "center" }}>
              <h3 className="f-24"><span className="fw-700">New Year Offer</span></h3>
              {" "}
              <h4 className="f-18">Professional Ghost Writing Services</h4>
              <h4></h4>
              <h5 className="clr-1 fw-700 f-24">50% OFF</h5>
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
                    <input type="hidden" name="subject" data-add-page-url="1" defaultValue="Footer Form" />
                  </div>
                  {" "}
                  <div className="form-group col-md-12">
                    <input className="form-control mb-3" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                    {" "}
                    <input className="form-control mb-3" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                  </div>
                  {" "}
                  <div className="form-group col-md-12 mb-3">
                    <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                  </div>
                  {" "}
                  <div className="form-group col-md-12">
                    <textarea className="form-control mb-3" autoComplete="nope" name="message" placeholder="Enter Brief" rows="3"></textarea>
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
      <div className="modal fade" id="offerModal" tabIndex="-1" aria-labelledby="offerModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content lozad py-5" data-background-image="/ghostwriting-lp/assets/img/newyear-offer.webp" style={{ "backgroundSize": "cover", "backgroundPosition": "top" }}>
            <div className="modal-body text-center">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              {" "}
              <h1 className="f-40 fw-700">New Year Offer</h1>
              {" "}
              <h2 className="f-30 fw-700">50% off</h2>
              {" "}
              <form className="text-start my-4" method="post" data-lead="1">
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
                    <textarea className="form-control mb-3" autoComplete="nope" name="message" placeholder="Enter Brief" rows="3"></textarea>
                    {" "}
                    <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit</button>
                  </div>
                </div>
              </form>
              {" "}
              <p className="c-claim mb-5 pb-5">
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
