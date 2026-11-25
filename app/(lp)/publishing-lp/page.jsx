import PageAssets from '@/components/PageAssets';

export const metadata = {
  title: { absolute: "Get Your Book Published In No Time | publisher 4 states" },
  robots: { index: false, follow: false },
};

export default function PublishingLpPage() {
  return (
    <>
      <PageAssets
        styles={[
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css",
          "/publishing-lp/assets/css/vendor.css",
          "/publishing-lp/assets/css/style.css",
          "/publishing-lp/_legacy/publishing-lp-index-1.css",
        ]}
        scripts={[
          "/publishing-lp/assets/js/jquery-3.7.0.min.js",
          "/publishing-lp/_legacy/publishing-lp-index-1.js",
          "/publishing-lp/assets/js/plugin.js",
          "/publishing-lp/assets/js/lozad.min.js",
          "/publishing-lp/assets/js/custom.js",
          "/publishing-lp/_legacy/publishing-lp-index-2.js",
          "/publishing-lp/_legacy/publishing-lp-index-3.js",
          "/publishing-lp/_legacy/publishing-lp-index-4.js",
          "https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
          "/publishing-lp/_legacy/publishing-lp-index-5.js",
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
              <a className="logo" href="https://publisher4states.com/publishing-lp">
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
      <section className="banner bg lozad" data-background-image="/publishing-lp/assets/img/newyear.webp">
        <div className="overlay pt-5">
          <img className="d-lg-block d-none left" src="/publishing-lp/assets/img/left.webp" />
          {" "}
          <div className="container-xl pt-5 mt-3">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-8 col-lg-10 text-center">
                <p className="subhead text-white">Are you looking for a book publishing company?</p>
                {" "}
                <h1 className="f-50 text-white">Empowering Authors with Top Book Publishers for Success</h1>
                {" "}
                <p className="text-white">
                  Entrust our team of professional book publishers from the best book publishing companies to provide a seamless publishing experience specifically designed to propel your book towards success.
                </p>
                {" "}
                <div className="row justify-content-center py-2">
                  <div className="col-sm-8 col-10">
                    <ul className="list-unstyled text-white c-list row row-cols-md-2 row-cols-1 text-md-start mb-0">
                      <li className="col mb-2">{" Publishing by experts "}</li>
                      <li className="col mb-2">{" 10,000+ Publishing Platforms. "}</li>
                      <li className="col mb-2">{" Author guidance. "}</li>
                      <li className="col mb-2">{" Quick Turn Around Time. "}</li>
                    </ul>
                  </div>
                </div>
                {" "}
                <form className="text-start mt-3 mb-4" method="post" data-lead="1">
                  <img className="lozad" src="/publishing-lp/assets/img/header-before.webp" />
                  {" "}
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
                    <div className="form-group col-lg-3 col-md-6 mb-3">
                      <input className="form-control" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                    </div>
                    {" "}
                    <div className="form-group col-lg-3 col-md-6 mb-3">
                      <input className="form-control" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                    </div>
                    {" "}
                    <div className="form-group col-lg-3 col-md-6 mb-3">
                      <input className="form-control" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                    </div>
                    {" "}
                    <div className="form-group col-lg-3 col-md-6 mb-3">
                      <input className="form-control" autoComplete="nope" name="message" placeholder="Enter Brief" defaultValue="" />
                    </div>
                    {" "}
                    <div className="form-group col-lg-3 col-md-6">
                      <button className="btn w-100" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {" "}
          <img className="d-lg-block d-none right" src="/publishing-lp/assets/img/right.webp" />
          {" "}
          <img className="lozad w-100" src="/publishing-lp/assets/img/banner.webp" />
        </div>
      </section>
      <section className="platforms">
        <div className="container">
          <div className="slider">
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/1.webp" /></div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/2.webp" /></div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/3.webp" /></div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/4.webp" /></div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/5.webp" /></div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/6.webp" /></div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/7.webp" /></div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/8.webp" /></div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/9.webp" /></div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="platform"><img data-lazy="assets/img/platforms/10.webp" /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-we-do py-5">
        <div className="container-xl">
          <div className="row text-center justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h2 className="f-700 f-40">What We Do?</h2>
              {" "}
              <p>
                publisher 4 states offers comprehensive range of book publishing services to help authors publish their books.Our self book publishing experts have a decade of experience and are committed to meeting all your expectations.
              </p>
            </div>
          </div>
          {" "}
          <div className="container-xl">
            <ul className="nav nav-tabs row row-cols-lg-6 row-cols-md-4 justify-content-center row-cols-2 text-center" id="service" role="tablist">
              <li className="nav-item mb-4" role="presentation">
                <button className="nav-link active" id="1-tab" data-bs-toggle="tab" data-bs-target="#1" type="button" role="tab" aria-controls="1" aria-selected="true">
                  <img className="lozad d-block mx-auto" src="/publishing-lp/assets/img/service/1.webp" />
                  {" Book Publishing "}
                </button>
              </li>
              <li className="nav-item mb-4" role="presentation">
                <button className="nav-link" id="2-tab" data-bs-toggle="tab" data-bs-target="#2" type="button" role="tab" aria-controls="2" aria-selected="false">
                  <img className="lozad d-block mx-auto" src="/publishing-lp/assets/img/service/2.webp" />
                  {" Ghostwriting Service "}
                </button>
              </li>
              <li className="nav-item mb-4" role="presentation">
                <button className="nav-link" id="3-tab" data-bs-toggle="tab" data-bs-target="#3" type="button" role="tab" aria-controls="3" aria-selected="false">
                  <img className="lozad d-block mx-auto" src="/publishing-lp/assets/img/service/3.webp" />
                  {" Book Marketing "}
                </button>
              </li>
              <li className="nav-item mb-4" role="presentation">
                <button className="nav-link" id="4-tab" data-bs-toggle="tab" data-bs-target="#4" type="button" role="tab" aria-controls="4" aria-selected="true">
                  <img className="lozad d-block mx-auto" src="/publishing-lp/assets/img/service/4.webp" />
                  {" E-Book "}
                </button>
              </li>
              <li className="nav-item mb-4" role="presentation">
                <button className="nav-link" id="5-tab" data-bs-toggle="tab" data-bs-target="#5" type="button" role="tab" aria-controls="5" aria-selected="false">
                  <img className="lozad d-block mx-auto" src="/publishing-lp/assets/img/service/5.webp" />
                  {" Book Cover Design "}
                </button>
              </li>
              <li className="nav-item mb-4" role="presentation">
                <button className="nav-link" id="6-tab" data-bs-toggle="tab" data-bs-target="#6" type="button" role="tab" aria-controls="6" aria-selected="false">
                  <img className="lozad d-block mx-auto" src="/publishing-lp/assets/img/service/6.webp" />
                  {" E-Book Editing "}
                </button>
              </li>
            </ul>
          </div>
          {" "}
          <div className="tab-content" id="serviceContent">
            <div className="tab-pane fade show active" id="1" role="tabpanel" aria-labelledby="1-tab">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="service">
                    <img className="w-100 lozad" src="/publishing-lp/assets/img/service/publishing.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-lg-7">
                  <h3 className="fw-700 f-30">Turn Your Dream Into Reality By Becoming A Published Author.</h3>
                  {" "}
                  <p>
                    {" Our excellence has earned us a reputation as one of the best book publishing services around. We assure you that your book is of the highest quality. Let us help you achieve your goal of publishing your own book on Amazon. "}
                  </p>
                  {" "}
                  <ul className="list-unstyled c-list row row-cols-md-2 row-cols-1">
                    <li className="mb-2">{"Book Design & Formatting"}</li>
                    <li className="mb-2">{"Printing & Production"}</li>
                    <li className="mb-2">Self Publishing</li>
                    <li className="mb-2">Author Support</li>
                  </ul>
                  {" "}
                  <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-3">
                      <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Request Quote</button>
                    </div>
                    {" "}
                    <div className="col-xl-4 col-md-4 mb-2">
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
                    <div className="col-xl-4 col-md-4 mb-2">
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
            {" "}
            <div className="tab-pane fade" id="2" role="tabpanel" aria-labelledby="2-tab">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="service">
                    <img className="w-100 lozad" src="/publishing-lp/assets/img/service/writing.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-lg-7">
                  <h3 className="fw-700 f-30">Your Words, Our Expertise: Tailored Ghostwriting for Your Book</h3>
                  {" "}
                  <p>
                    We will work with you to make and write a book that perfectly reflects your ideas and style. You will work directly with experts in book publishing and the best writers, who will make sure that your dream book is of the highest quality.
                  </p>
                  {" "}
                  <ul className="list-unstyled c-list row row-cols-md-2 row-cols-1">
                    <li className="mb-2">Publishing Guidance</li>
                    <li className="mb-2">Book Formatting</li>
                    <li className="mb-2">Revisions and Feedback</li>
                    <li className="mb-2">Writing and Editing</li>
                  </ul>
                  {" "}
                  <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-3">
                      <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Request Quote</button>
                    </div>
                    {" "}
                    <div className="col-xl-4 col-md-4 mb-2">
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
                    <div className="col-xl-4 col-md-4 mb-2">
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
            {" "}
            <div className="tab-pane fade" id="3" role="tabpanel" aria-labelledby="3-tab">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="service">
                    <img className="w-100 lozad" src="/publishing-lp/assets/img/service/marketing.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-lg-7">
                  <h3 className="fw-700 f-30">Our Strategic Marketing Plans to Get Noticed Your Book</h3>
                  {" "}
                  <p>
                    {" The goal of our book marketing service is to help authors succeed in the competitive world of publishing. We understand that writing a great book is a challenging process, but getting your book noticed is also a daunting task. Our expert will create a marketing plan that will expand your author platform and boost book sales."}
                  </p>
                  {" "}
                  <ul className="list-unstyled c-list row row-cols-md-2 row-cols-1">
                    <li className="mb-2">Strategic Planning</li>
                    <li className="mb-2">Targeted Audience</li>
                    <li className="mb-2">High Conversion</li>
                    <li className="mb-2">Proper Distribution</li>
                  </ul>
                  {" "}
                  <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-3">
                      <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Request Quote</button>
                    </div>
                    {" "}
                    <div className="col-xl-4 col-md-4 mb-2">
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
                    <div className="col-xl-4 col-md-4 mb-2">
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
            {" "}
            <div className="tab-pane fade" id="4" role="tabpanel" aria-labelledby="4-tab">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="service">
                    <img className="w-100 lozad" src="/publishing-lp/assets/img/service/ebook.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-lg-7">
                  <h3 className="fw-700 f-30">{"Your E-Book Will Be High Quality & Impactful."}</h3>
                  {" "}
                  <p>
                    {"We offer E-Book editing, writing and publishing services that are designed to help you share your ideas with the world. Our customizable range will fit your needs. "}
                  </p>
                  {" "}
                  <ul className="list-unstyled c-list row row-cols-md-2 row-cols-1">
                    <li className="mb-2">Distribution</li>
                    <li className="mb-2">Formatting</li>
                    <li className="mb-2">Cover Design</li>
                    <li className="mb-2">{"Editing & Proofreading"}</li>
                  </ul>
                  {" "}
                  <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-3">
                      <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Request Quote</button>
                    </div>
                    {" "}
                    <div className="col-xl-4 col-md-4 mb-2">
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
                    <div className="col-xl-4 col-md-4 mb-2">
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
            {" "}
            <div className="tab-pane fade" id="5" role="tabpanel" aria-labelledby="5-tab">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="service">
                    <img className="w-100 lozad" src="/publishing-lp/assets/img/service/cover.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-lg-7">
                  <h3 className="fw-700 f-30">Stand Out On The Shelf With Designs For Your Book Covers.</h3>
                  {" "}
                  <p>
                    Don't be careless with the cover of your book. A professionally designed book cover instantly conveys the essence and message of your book. Our expert designers have a decade of experience designing book covers of various genres.
                  </p>
                  {" "}
                  <ul className="list-unstyled c-list row row-cols-md-2 row-cols-1">
                    <li className="mb-2">Typography Book Covers</li>
                    <li className="mb-2">Graphic designing</li>
                    <li className="mb-2">Typography</li>
                    <li className="mb-2">Cover formatting</li>
                  </ul>
                  {" "}
                  <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-3">
                      <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Request Quote</button>
                    </div>
                    {" "}
                    <div className="col-xl-4 col-md-4 mb-2">
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
                    <div className="col-xl-4 col-md-4 mb-2">
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
            {" "}
            <div className="tab-pane fade" id="6" role="tabpanel" aria-labelledby="6-tab">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="service">
                    <img className="w-100 lozad" src="/publishing-lp/assets/img/service/editing.webp" />
                  </div>
                </div>
                {" "}
                <div className="col-lg-7">
                  <h3 className="fw-700 f-30">Experienced Editors Will Evaluate The Quality of Your Books.</h3>
                  {" "}
                  <p>
                    {"At publisher 4 states, we offer the best book editing services that help authors refine and polish their manuscripts. Our team of experienced editors provides personalized feedback and guidance to ensure that every book is of the highest quality. "}
                  </p>
                  {" "}
                  <ul className="list-unstyled c-list row row-cols-md-2 row-cols-1">
                    <li className="mb-2">Line by Line Editing</li>
                    <li className="mb-2">Developmental Editing</li>
                    <li className="mb-2">Proofreading</li>
                    <li className="mb-2">Line Editing</li>
                  </ul>
                  {" "}
                  <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-4 mb-3">
                      <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Request Quote</button>
                    </div>
                    {" "}
                    <div className="col-xl-4 col-md-4 mb-2">
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
                    <div className="col-xl-4 col-md-4 mb-2">
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
          </div>
        </div>
      </section>
      <section className="genere py-5 text-center">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h2 className="f-700 f-40">Offering a Wide range of Genres</h2>
              {" "}
              <p>
                Our excellence has earned us a reputation as one of the best book publishing services around. We assure you that your book is of the highest quality. Let us help you achieve your goal of publishing your own book on Amazon.
              </p>
            </div>
          </div>
          {" "}
          <div className="slider">
            <div className="item px-4">
              <div className="cat">
                <img data-lazy="assets/img/genre/1.webp" />
                {" "}
                <h6 className="f-24 fw-700">Travel</h6>
                {" "}
                <p>
                  We offer professional book publishing services for travelogues and outdoor travel guides.
                </p>
              </div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="cat">
                <img data-lazy="assets/img/genre/2.webp" />
                {" "}
                <h6 className="f-24 fw-700">{"Action & Adventure"}</h6>
                {" "}
                <p>
                  The most popular type of book publishing keeps readers entertained and excited.
                </p>
              </div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="cat">
                <img data-lazy="assets/img/genre/3.webp" />
                {" "}
                <h6 className="f-24 fw-700">Comics</h6>
                {" "}
                <p>
                  You can publish thrilling, adventure-serialized stories through comic books.
                </p>
              </div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="cat">
                <img data-lazy="assets/img/genre/5.webp" />
                {" "}
                <h6 className="f-24 fw-700">Drama</h6>
                {" "}
                <p>
                  We offer professional book publishing for your characters and drama series.
                </p>
              </div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="cat">
                <img data-lazy="assets/img/genre/6.webp" />
                {" "}
                <h6 className="f-24 fw-700">Health</h6>
                {" "}
                <p>Expert-written health books can help people stay healthy.</p>
              </div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="cat">
                <img data-lazy="assets/img/genre/7.webp" />
                {" "}
                <h6 className="f-24 fw-700">Horror</h6>
                {" "}
                <p>
                  People want thrills and new experiences, so publish your horror stories.
                </p>
              </div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="cat">
                <img data-lazy="assets/img/genre/8.webp" />
                {" "}
                <h6 className="f-24 fw-700">Romance</h6>
                {" "}
                <p>Are you a romance author? Show your romantic words to the lovers.</p>
              </div>
            </div>
            {" "}
            <div className="item px-4">
              <div className="cat">
                <img data-lazy="assets/img/genre/9.webp" />
                {" "}
                <h6 className="f-24 fw-700">Science Fiction</h6>
                {" "}
                <p>
                  Publish the facts about how actual or imagined science affects people and societies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container cta">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-xl-4 col-md-6">
              <h3 className="f-30">Publish Your Own Book</h3>
              {" "}
              <p className="mb-0">
                Don't wait any longer to share your story with the world. We make it easy and affordable.
              </p>
            </div>
            {" "}
            <div className="col-lg-7 col-md-6">
              <div className="row justify-content-lg-end justify-content-center">
                <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
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
                <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
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
                {" "}
                <div className="col-xl-4 col-lg-4 col-md-12">
                  <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Request Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="fw-700 f-40">Our Process: From Concept to Perfection</h3>
            </div>
          </div>
          {" "}
          <div className="process-wrapper">
            <div className="process-item">
              <h3>Idea Sharing</h3>
              {" "}
              <div>
                <img src="/publishing-lp/assets/img/p-1.webp" />
                {" "}
                <img className="p-img" src="/publishing-lp/assets/img/p-img-top.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img1.webp" />
              </div>
            </div>
            {" "}
            <div className="process-item">
              <h3>Plot Development</h3>
              {" "}
              <div>
                <img src="/publishing-lp/assets/img/p-2.webp" />
                {" "}
                <img className="p-img" src="/publishing-lp/assets/img/p-img-bottom.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img1.webp" />
              </div>
            </div>
            {" "}
            <div className="process-item active">
              <h3>Character Creation</h3>
              {" "}
              <div>
                <img src="/publishing-lp/assets/img/p-3.webp" />
                {" "}
                <img className="p-img" src="/publishing-lp/assets/img/p-img-top.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img1.webp" />
              </div>
            </div>
            {" "}
            <div className="process-item">
              <h3>Draft Creation</h3>
              {" "}
              <div>
                <img src="/publishing-lp/assets/img/p-4.webp" />
                {" "}
                <img className="p-img" src="/publishing-lp/assets/img/p-img-bottom.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img1.webp" />
              </div>
            </div>
            {" "}
            <div className="process-item">
              <h3>Author Feedback</h3>
              {" "}
              <div>
                <img src="/publishing-lp/assets/img/p-5.webp" />
                {" "}
                <img className="p-img" src="/publishing-lp/assets/img/p-img-top.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img1.webp" />
              </div>
            </div>
            {" "}
            <div className="process-item">
              <h3>Revisions</h3>
              {" "}
              <div>
                <img src="/publishing-lp/assets/img/p-6.webp" />
                {" "}
                <img className="p-img" src="/publishing-lp/assets/img/p-img-bottom.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img1.webp" />
              </div>
            </div>
            {" "}
            <div className="process-item">
              <h3>Final Polishing</h3>
              {" "}
              <div>
                <img src="/publishing-lp/assets/img/p-7.webp" />
                {" "}
                <img className="p-img" src="/publishing-lp/assets/img/p-img-top.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img1.webp" />
              </div>
            </div>
            {" "}
            <div className="process-item">
              <h3>Author Approval</h3>
              {" "}
              <div>
                <img src="/publishing-lp/assets/img/p-8.webp" />
                {" "}
                <img className="p-img" src="/publishing-lp/assets/img/p-img-bottom.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img.webp" />
                {" "}
                <img src="/publishing-lp/assets/img/p-img1.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 pricing">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h3 className="fw-700 f-40">Providing You The Most Affordable Pricing</h3>
              {" "}
              <p>
                Our spectrum of publishing services at affordable rates and prices offers you a qualified team of professional writers, editors, and publishing mavericks who work collaboratively
              </p>
            </div>
          </div>
          {" "}
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
            <div className="col mb-4 mb-lg-0">
              <div className="package">
                <div className="price">
                  <div className="row align-items-center">
                    <div className="col-6"><h4 className="f-30">Silver</h4></div>
                    {" "}
                    <div className="col-6 text-end">
                      <p className="mb-0 pe-5">Only</p>
                      {" "}
                      <p className="mb-0 f-30 fw-700">$499</p>
                      {" "}
                      <p className="mb-0"><strike>$1,099</strike></p>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="details">
                  <ul className="list-unstyled c-list">
                    <li className="">{" Editing/Formatting according to IPS "}</li>
                    <li className="">{" Cover, Back, Spine Design "}</li>
                    <li className="">
                      {" Publishing the book in all 3 formats (eBook, paperback and Hardcover) "}
                    </li>
                    <li className="">{" Global availability on Amazon, KDP, Barnes & Noble "}</li>
                    <li className="">{" Unlimited revisions "}</li>
                    <li className="">{" ISBN Barcodes "}</li>
                    <li className="">{" Copyrights "}</li>
                    <li className="">{" 100% ownership "}</li>
                    <li className="">{" 100% satisfaction "}</li>
                    <li className="">{" 100% royalties "}</li>
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
                  <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">GET STARTED</button>
                </div>
              </div>
            </div>
            {" "}
            <div className="col mb-4 mb-lg-0">
              <div className="package">
                <div className="price">
                  <div className="row align-items-center">
                    <div className="col-6"><h4 className="f-30">Gold</h4></div>
                    {" "}
                    <div className="col-6 text-end">
                      <p className="mb-0 pe-5">Only</p>
                      {" "}
                      <p className="mb-0 f-30 fw-700">$799</p>
                      {" "}
                      <p className="mb-0"><strike>$1,499</strike></p>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="details">
                  <ul className="list-unstyled c-list">
                    <li>Editing/Proofreading of the complete manuscript</li>
                    <li>Formatting according to IPS</li>
                    <li>Cover, Back, Spine Design</li>
                    <li>Images/illustrations</li>
                    <li>Author Central Page Creation</li>
                    <li>Unlimited revisions</li>
                    <li>Publishing the book in all 3 formats (eBook, paperback and Hardcover)</li>
                    <li>Global availability on Amazon, KDP, other 10+ Platforms</li>
                    <li>2 Unique Book cover design according to your instruction</li>
                    <li>Publication Consultancy</li>
                    <li>ISBN Barcodes</li>
                    <li>Copyrights</li>
                    <li>100% ownership</li>
                    <li>100% royalties</li>
                    <li>100% satisfaction guarantee</li>
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
                  <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">GET STARTED</button>
                </div>
              </div>
            </div>
            {" "}
            <div className="col mb-4 mb-lg-0">
              <div className="package">
                <div className="price">
                  <div className="row align-items-center">
                    <div className="col-6"><h4 className="f-30">Platinum</h4></div>
                    {" "}
                    <div className="col-6 text-end">
                      <p className="mb-0 pe-5">Only</p>
                      {" "}
                      <p className="mb-0 f-30 fw-700">$1,499</p>
                      {" "}
                      <p className="mb-0"><strike>$3,000</strike></p>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="details">
                  <ul className="list-unstyled c-list">
                    <li>Editing/Proofreading of the complete manuscript</li>
                    <li>Interior Design (Black and White / Full Color)</li>
                    <li>Formatting according to IPS</li>
                    <li>Typesetting/ Layout Adjusments</li>
                    <li>Images/illustrations</li>
                    <li>Author Central Page Creation</li>
                    <li>Unlimited revisions</li>
                    <li>Publishing the book in all 3 formats (eBook, paperback and Hardcover)</li>
                    <li>
                      {"Global availability on Amazon, Kdp, B&N Press, Apple & Google Book Store and 100+ other platforms"}
                    </li>
                    <li>3 Unique Book cover design according to your instruction</li>
                    <li>Publication Consultancy</li>
                    <li>ISBN Barcodes</li>
                    <li>{"Author & Book Website Setup"}</li>
                    <li>Copyrights</li>
                    <li>100% ownership</li>
                    <li>100% royalties</li>
                    <li>100% satisfaction guarantee</li>
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
                  <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">GET STARTED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 pricing">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h3 className="fw-700 f-40">Why Choose Us?</h3>
              {" "}
              <p>
                publisher 4 states offers comprehensive range of book publishing services to help authors publish their books.Our self book publishing experts have a decade of experience and are committed to meeting all your expectations.
              </p>
            </div>
          </div>
          {" "}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="row mb-2">
                <div className="col-2"><strong className="clr-1 f-70 subhead">01</strong></div>
                {" "}
                <div className="col-10">
                  <h4 className="fw-700 f-24">100% Ownership</h4>
                  {" "}
                  <p>
                    You get all the Ownership We make all the effort. You get all the possessions with our expert book Publishing help.
                  </p>
                </div>
              </div>
              {" "}
              <div className="row mb-2">
                <div className="col-2"><strong className="clr-1 f-70 subhead">02</strong></div>
                {" "}
                <div className="col-10">
                  <h4 className="fw-700 f-24">Affordability</h4>
                  {" "}
                  <p>
                    We are perfectionists and firmly believe perfection shouldn’t cost your life savings. Our prices are affordable, and our expert book Publishing online services are unbeatable.
                  </p>
                </div>
              </div>
              {" "}
              <div className="row mb-2">
                <div className="col-2"><strong className="clr-1 f-70 subhead">03</strong></div>
                {" "}
                <div className="col-10">
                  <h4 className="fw-700 f-24">Fast Delivery</h4>
                  {" "}
                  <p>
                    Our top notch work not only delivers as per your specifications, we understand that time is money and meet all our deadlines through expert book Publishing help.
                  </p>
                </div>
              </div>
              {" "}
              <div className="row mb-2">
                <div className="col-2"><strong className="clr-1 f-70 subhead">04</strong></div>
                {" "}
                <div className="col-10">
                  <h4 className="fw-700 f-24">Customer Satisfaction</h4>
                  {" "}
                  <p>
                    Customer satisfaction is our most priority, as it’s the most crucial part of any business. We have proved every time that we never compromise on the quality and standards of our work.
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
                    <p className="mb-0">Books Published</p>
                  </div>
                  {" "}
                  <div className="box">
                    <p className="fw-700 clr-1 f-40 mb-0 subhead">50+</p>
                    {" "}
                    <p className="mb-0">Publishing Experts</p>
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
      <section className="">
        <div className="container cta">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-xl-4 col-md-6">
              <h3 className="f-30">Publish Your Own Book</h3>
              {" "}
              <p className="mb-0">
                Don't wait any longer to share your story with the world. We make it easy and affordable.
              </p>
            </div>
            {" "}
            <div className="col-lg-7 col-md-6">
              <div className="row justify-content-lg-end justify-content-center">
                <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
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
                <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
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
                {" "}
                <div className="col-xl-4 col-lg-4 col-md-12">
                  <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#getaquote">Request Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 reviews">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
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
              <div className="box review p-3 text-center">
                <div className="image"><img className="mx-auto" data-lazy="assets/img/client-1.webp" /></div>
                {" "}
                <div className="discription">
                  <strong>Emeryn Alexandria</strong>
                  {" "}
                  <p>
                    I had a fantastic experience working with Americas book Publishing service. They were able to effectively target my book's audience and increase its visibility on various online platforms. I highly recommend their services to any author looking to improve their book's sales and exposure.
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
                <div className="image"><img className="mx-auto" data-lazy="assets/img/client-1.webp" /></div>
                {" "}
                <div className="discription">
                  <strong>Emeryn Alexandria</strong>
                  {" "}
                  <p>
                    I had a fantastic experience working with Americas book Publishing service. They were able to effectively target my book's audience and increase its visibility on various online platforms. I highly recommend their services to any author looking to improve their book's sales and exposure.
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
                  <strong>Emeryn Alexandria</strong>
                  {" "}
                  <p>
                    I had a fantastic experience working with Americas book Publishing service. They were able to effectively target my book's audience and increase its visibility on various online platforms. I highly recommend their services to any author looking to improve their book's sales and exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="lozad bg" data-background-image="/publishing-lp/assets/img/newyear.webp">
        <div className="overlay">
          <img className="lozad w-100" src="/publishing-lp/assets/img/footer.webp" />
          {" "}
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
                      <input className="form-control mb-3" type="text" name="name" placeholder="Your Name" required defaultValue="" />
                      {" "}
                      <input className="form-control mb-3" type="email" name="email" placeholder="Your Email" defaultValue="" required />
                      {" "}
                      <input className="form-control mb-3" type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
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
                <a href="tel:(833) 206-5993" className="call mb-3 d-flex align-items-center">
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
                <a href="mailto:info@publisher4states.com" className="call mb-3 d-flex align-items-center">
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
                <a data-legacy-href="javascript:void(0)" className="chat mb-4 d-flex align-items-center">
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
                      <img className="lozad" src="/publishing-lp/assets/img/dmca.webp" />
                    </a>
                  </div>
                  {" "}
                  <div className="col-3">
                    <img className="lozad" src="/publishing-lp/assets/img/trustpilot.webp" />
                  </div>
                  {" "}
                  <div className="col-6">
                    <img className="lozad" src="/publishing-lp/assets/img/pay.webp" />
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
            <div className="modal-body lozad" data-background-image="/publishing-lp/assets/img/newyear-offer.webp" style={{ "backgroundSize": "cover", "backgroundPosition": "center" }}>
              <h3 className="f-24 fw-700 text-center">
                Signup Now To Avail New Year Offer
                <span className="clr-1">50%</span>
                {" Off"}
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
                    <input type="hidden" name="subject" data-add-page-url="1" defaultValue="Footer Form" />
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
          <div className="modal-content lozad" data-background-image="/publishing-lp/assets/img/newyear-offer.webp" style={{ "backgroundSize": "cover", "backgroundPosition": "top" }}>
            <div className="modal-body text-center py-5">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              {" "}
              <h1 className="f-40 fw-700">New Year Offer</h1>
              {" "}
              <h2 className="f-30 fw-700">50% off</h2>
              {" "}
              <form className="text-start mb-5" method="post" data-lead="1">
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
