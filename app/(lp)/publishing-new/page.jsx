import PageAssets from '@/components/PageAssets';

export const metadata = {
  title: { absolute: "Comprehensive Book Publishing Services - publisher 4 states" },
  description: "From manuscript to market, trust publisher 4 states for end-to-end book publishing services that bring your story to the world.",
  robots: { index: false, follow: false },
};

export default function PublishingNewPage() {
  return (
    <>
      <PageAssets
        styles={[
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
          "https://site-assets.fontawesome.com/releases/v6.2.0/css/all.css",
          "https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.css",
          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/css/intlTelInput.css",
          "/publishing-new/assets/css/owl.carousel.min.css",
          "/publishing-new/assets/css/owl.theme.default.min.css",
          "/publishing-new/assets/css/custom.css",
          "/publishing-new/_legacy/publishing-new-index-1.css",
          "/publishing-new/_legacy/publishing-new-index-2.css",
        ]}
        scripts={[
          "https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js",
          "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
          "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js",
          "https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.js",
          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
          "/publishing-new/assets/js/owl.carousel.min.js",
          "/publishing-new/assets/js/custom.js",
          "/publishing-new/_legacy/publishing-new-index-1.js",
          "/publishing-new/_legacy/publishing-new-index-2.js",
          "https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/intlTelInput-jquery.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
          "/publishing-new/_legacy/publishing-new-index-3.js",
        ]}
      />
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <img src="/publishing-new/assets/images/logo.webp" alt="logo" className="img-fluid logo" />
            </a>
            {" "}
            <div className="navbar-buttons">
              <a href="tel:+1-(833) 206-5993" className="call-btn">Schedule A Call</a>
              {" "}
              <button className="chat-btn">Live Chat Now!</button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className="banner-main-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="banner-inner-content">
                  <h1>Book Publishing Services - Helping Dreamers Become Successful Authors</h1>
                  {" "}
                  <p>
                    At publisher 4 states, we specialize in helping new and aspiring authors take their first steps toward their dream and become well-known worldwide. You bring the book to the table and leave it to us to turn it into the next best-seller!
                  </p>
                  {" "}
                  <h5>
                    <b>$17,125,443</b>
                    {" raised for local book stores."}
                  </h5>
                  {" "}
                  <div className="website-main-buttons">
                    <button className="chat-btn">Live Chat Now!</button>
                    {" "}
                    <a href="tel:+1-(833) 206-5993" className="call-btn">Call Us Now</a>
                  </div>
                </div>
              </div>
              {" "}
              <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="banner-inner-published-form">
                  <h4>Start Your Publishing Journey</h4>
                  {" "}
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
                    <input type="hidden" name="subject" data-add-page-url="1" defaultValue="Banner Form" />
                    {" "}
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <select name="manuscript_ready" className="form-select" aria-label="Default select example" defaultValue="Do you have a manuscript ready?">
                            <option disabled>Do you have a manuscript ready?</option>
                            <option value="Yes, I'm ready to publish today">Yes, I'm ready to publish today</option>
                            <option value="Yes, I'll be ready to publish in 1 to 3 months">Yes, I'll be ready to publish in 1 to 3 months</option>
                            <option value="Yes, I'll be ready to publish in 3 to 6 months">Yes, I'll be ready to publish in 3 to 6 months</option>
                            <option value="Yes, I’ll be ready to publish in 6 to 12 months">Yes, I’ll be ready to publish in 6 to 12 months</option>
                            <option value="No, I do not have a book or manuscript ready">No, I do not have a book or manuscript ready</option>
                          </select>
                        </div>
                      </div>
                      {" "}
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <select name="published_before" className="form-select" aria-label="Default select example" defaultValue="Have you published before?">
                            <option disabled>Have you published before?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                      {" "}
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <select name="plan_on_publishing" className="form-select" aria-label="Default select example" defaultValue="What type of book do you plan on publishing?">
                            <option disabled>What type of book do you plan on publishing?</option>
                            <option value="Business">Business</option>
                            <option value="Biography">Biography</option>
                            <option value="Inspirational">Inspirational</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                            <option value="How-To">How-To</option>
                            <option value="Autobiography/Memoir">Autobiography/Memoir</option>
                            <option value="Self-Help">Self-Help</option>
                            <option value="Children">Children</option>
                            <option value="Spiritual/Religious">Spiritual/Religious</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Art/Photography">Art/Photography</option>
                            <option value="Cookbook">Cookbook</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      {" "}
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group-select">
                          <h6>What services are you looking for?</h6>
                          {" "}
                          <div className="form-check-flex">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="services[]" value="Self Publishing" id="selfPublishing" />
                              {" "}
                              <label className="form-check-label" htmlFor="selfPublishing">{" Self Publishing "}</label>
                            </div>
                            {" "}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="services[]" value="Editing" id="editing" />
                              {" "}
                              <label className="form-check-label" htmlFor="editing">{" Editing "}</label>
                            </div>
                            {" "}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="services[]" value="Cover Design" id="coverDesign" />
                              {" "}
                              <label className="form-check-label" htmlFor="coverDesign">{" Cover Design "}</label>
                            </div>
                            {" "}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="services[]" value="Printing" id="printing" />
                              {" "}
                              <label className="form-check-label" htmlFor="printing">{" Printing "}</label>
                            </div>
                            {" "}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="services[]" value="Interior Formatting" id="interiorFormatting" />
                              {" "}
                              <label className="form-check-label" htmlFor="interiorFormatting">{" Interior Formatting "}</label>
                            </div>
                            {" "}
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="services[]" value="Illustration" id="illustration" />
                              {" "}
                              <label className="form-check-label" htmlFor="illustration">{" Illustration "}</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Your Name" required defaultValue="" />
                        </div>
                      </div>
                      {" "}
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <input type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                        </div>
                      </div>
                      {" "}
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <input type="email" name="email" placeholder="Your Email" defaultValue="" required />
                        </div>
                      </div>
                      {" "}
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group form-group-last">
                          <button className="submit-btn" type="submit" name="cta3" value="Submit Now">Submit</button>
                          {" "}
                          <div className="error mt-3 alert alert-danger text-left mb-0" style={{ "display": "none" }}></div>
                          {" "}
                          <div className="success mt-3 alert alert-success text-left mb-0" style={{ "display": "none" }}></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        <section className="main-info-wrap main-info-wrap2">
          <div className="container">
            <div className="main-info-inner">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="main-info-image">
                    <img src="/publishing-new/assets/images/main-info-img.webp" alt="img" className="img-fluid" />
                  </div>
                </div>
                {" "}
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="main-info-content">
                    <h2>Hire A Decorated Book Publishing Company</h2>
                    {" "}
                    <p>
                      Do you know what's better than a professional company? One that has received multiple awards for their service in the field. Thanks to our consistent performance in getting new authors a share of the world stage, we have received multiple awards over the years we have been operating.
                    </p>
                    {" "}
                    <div className="badges-brands-inner">
                      <div className="badges-brands-item">
                        <div className="badges-brands-img">
                          <img src="/publishing-new/assets/images/badges-logo/niea-logo.webp" alt="badges" />
                        </div>
                        {" "}
                        <div className="badges-brands-img">
                          <img src="/publishing-new/assets/images/badges-logo/ibpa-logo.webp" alt="badges" />
                        </div>
                        {" "}
                        <div className="badges-brands-img">
                          <img src="/publishing-new/assets/images/badges-logo/purple-dragon-logo.webp" alt="badges" />
                        </div>
                        {" "}
                        <div className="badges-brands-img">
                          <img src="/publishing-new/assets/images/badges-logo/nde-logo.webp" alt="badges" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        <section className="step-works-wrap">
          <div className="container">
            <div className="step-works-head">
              <h3>eBook Writing Expertise We Offer</h3>
              {" "}
              <p>
                If you are looking for the best book publishers in the market, you have come to the right place.
              </p>
            </div>
            {" "}
            <div className="row align-items-center">
              <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="step-works-inner">
                  <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="step-works-box">
                        <span>01.</span>
                        {" "}
                        <div className="works-box-head">
                          <i className="fas fa-circle"></i>
                          {" "}
                          <h4>Traditional Publishing</h4>
                        </div>
                        {" "}
                        <p>
                          Our traditional publishing service is a partnership with established publishing houses. Your manuscript undergoes rigorous selection and refinement, leading to wide distribution and bookstore presence. Our experienced team manages editing, design, marketing, and distribution, ensuring your book receives professional treatment.
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="step-works-box">
                        <span>02.</span>
                        {" "}
                        <div className="works-box-head">
                          <i className="fas fa-circle"></i>
                          {" "}
                          <h4>Self-Publishing</h4>
                        </div>
                        {" "}
                        <p>
                          Empower your authorial journey with self-publishing. You retain creative control, from manuscript to cover design, formatting, and pricing. We provide guidance on every step, offering editing, design, and marketing support. Your book is available on various online platforms, and you earn higher royalties.
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="step-works-box">
                        <span>03.</span>
                        {" "}
                        <div className="works-box-head">
                          <i className="fas fa-circle"></i>
                          {" "}
                          <h4>Hybrid Publishing</h4>
                        </div>
                        {" "}
                        <p>
                          Hybrid publishing combines the best of both worlds. You maintain creative control like in self-publishing while benefiting from our professional editing, design, and marketing expertise. Your book is produced to industry standards, reaching both online platforms and physical stores for maximum exposure.
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="step-works-box marg-zero">
                        <span>04.</span>
                        {" "}
                        <div className="works-box-head">
                          <i className="fas fa-circle"></i>
                          {" "}
                          <h4>Vanity Publishing</h4>
                        </div>
                        {" "}
                        <p>
                          With vanity publishing, you invest in every aspect of your book's production. While you maintain creative control, you must note that marketing and distribution responsibilities largely fall on you. Vanity publishing is suitable for authors seeking full control over their work's design and content.
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="step-works-box marg-zero">
                        <span>05.</span>
                        {" "}
                        <div className="works-box-head">
                          <i className="fas fa-circle"></i>
                          {" "}
                          <h4>Print-on-Demand (POD) Services</h4>
                        </div>
                        {" "}
                        <p>
                          Our Print-on-Demand (POD) service eliminates upfront printing costs. Books are printed as orders come in, reducing waste and financial risk. Your book remains available for purchase online and in physical stores, offering a convenient and efficient solution for both you and your readers.
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                      <div className="step-works-box marg-zero">
                        <span>06.</span>
                        {" "}
                        <div className="works-box-head">
                          <i className="fas fa-circle"></i>
                          {" "}
                          <h4>eBook Publishing Platforms</h4>
                        </div>
                        {" "}
                        <p>
                          Explore the digital realm with eBook publishing. We format and optimize your manuscript for various eBook platforms, making your work accessible to readers on e-readers, tablets, and smartphones. eBook publishing offers affordability, global reach, and immediate availability, expanding your readership across borders.
                        </p>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="website-main-buttons"><a href="tel:+1-(833) 206-5993" className="call-btn">Call Now</a></div>
                </div>
              </div>
              {" "}
              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="step-works-img">
                  <img src="/publishing-new/assets/images/step-works-img.webp" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        <section className="cta-main-wrap">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="cta-left-img">
                  <img src="/publishing-new/assets/images/cta-img1.webp" alt="img" className="img-fluid" />
                </div>
              </div>
              {" "}
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="cta-main-content">
                  <h2>It's Time to Cement Your Hard Work Using the Right Publishing Service</h2>
                  {" "}
                  <p>
                    Choosing the wrong publishing company for your book is like working hard on something and them throwing it out in the trash. Give the care your book deserves by hiring the right professionals.
                  </p>
                  {" "}
                  <div className="website-main-buttons"><a href="tel:+1-(833) 206-5993" className="call-btn">Call Now</a></div>
                </div>
              </div>
              {" "}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="cta-right-img">
                  <img src="/publishing-new/assets/images/cta-img2.webp" alt="img" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        <section className="portfolio-publish-wrap">
          <div className="container">
            <div className="portfolio-publish-head"><h2>Portfolio</h2></div>
            {" "}
            {" "}
            <div className="portfolio-publish-tablist">
              <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="portfolio-publish-tablist-buttons">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-portfolio1-tab" data-bs-toggle="pill" data-bs-target="#pills-portfolio1" type="button" role="tab" aria-controls="pills-portfolio1" aria-selected="true">Fiction</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-portfolio2-tab" data-bs-toggle="pill" data-bs-target="#pills-portfolio2" type="button" role="tab" aria-controls="pills-portfolio2" aria-selected="false">Non-Fiction</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-portfolio3-tab" data-bs-toggle="pill" data-bs-target="#pills-portfolio3" type="button" role="tab" aria-controls="pills-portfolio3" aria-selected="false">Self-Care</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-portfolio4-tab" data-bs-toggle="pill" data-bs-target="#pills-portfolio4" type="button" role="tab" aria-controls="pills-portfolio4" aria-selected="false">Informative</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-portfolio5-tab" data-bs-toggle="pill" data-bs-target="#pills-portfolio5" type="button" role="tab" aria-controls="pills-portfolio5" aria-selected="false">Children's</button>
                      </li>
                    </ul>
                  </div>
                  {" "}
                  <div className="portfolio-publish-tablist-content">
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-portfolio1" role="tabpanel" aria-labelledby="pills-portfolio1-tab" tabIndex="0">
                        <div className="portfolio-publish-tablist-inner">
                          <div className="row">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/fiction/1.webp" data-fancybox="fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/fiction/1.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/fiction/2.webp" data-fancybox="fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/fiction/2.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/fiction/3.webp" data-fancybox="fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/fiction/3.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/fiction/4.webp" data-fancybox="fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/fiction/4.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/fiction/5.webp" data-fancybox="fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/fiction/5.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/fiction/6.webp" data-fancybox="fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/fiction/6.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/fiction/7.webp" data-fancybox="fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/fiction/7.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/fiction/8.webp" data-fancybox="fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/fiction/8.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="tab-pane fade" id="pills-portfolio2" role="tabpanel" aria-labelledby="pills-portfolio2-tab" tabIndex="0">
                        <div className="portfolio-publish-tablist-inner">
                          <div className="row">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/non-fiction/1.webp" data-fancybox="non-fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/non-fiction/1.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/non-fiction/2.webp" data-fancybox="non-fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/non-fiction/2.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/non-fiction/3.webp" data-fancybox="non-fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/non-fiction/3.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/non-fiction/4.webp" data-fancybox="non-fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/non-fiction/4.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/non-fiction/5.webp" data-fancybox="non-fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/non-fiction/5.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/non-fiction/6.webp" data-fancybox="non-fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/non-fiction/6.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/non-fiction/7.webp" data-fancybox="non-fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/non-fiction/7.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/non-fiction/8.webp" data-fancybox="non-fiction">
                                  <img src="/publishing-new/assets/images/portfolio-mock/non-fiction/8.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="tab-pane fade" id="pills-portfolio3" role="tabpanel" aria-labelledby="pills-portfolio3-tab" tabIndex="0">
                        <div className="portfolio-publish-tablist-inner">
                          <div className="row">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/self-care/1.webp" data-fancybox="self-care">
                                  <img src="/publishing-new/assets/images/portfolio-mock/self-care/1.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/self-care/2.webp" data-fancybox="self-care">
                                  <img src="/publishing-new/assets/images/portfolio-mock/self-care/2.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/self-care/3.webp" data-fancybox="self-care">
                                  <img src="/publishing-new/assets/images/portfolio-mock/self-care/3.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/self-care/4.webp" data-fancybox="self-care">
                                  <img src="/publishing-new/assets/images/portfolio-mock/self-care/4.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/self-care/5.webp" data-fancybox="self-care">
                                  <img src="/publishing-new/assets/images/portfolio-mock/self-care/5.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/self-care/6.webp" data-fancybox="self-care">
                                  <img src="/publishing-new/assets/images/portfolio-mock/self-care/6.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/self-care/7.webp" data-fancybox="self-care">
                                  <img src="/publishing-new/assets/images/portfolio-mock/self-care/7.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/self-care/8.webp" data-fancybox="self-care">
                                  <img src="/publishing-new/assets/images/portfolio-mock/self-care/8.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="tab-pane fade" id="pills-portfolio4" role="tabpanel" aria-labelledby="pills-portfolio4-tab" tabIndex="0">
                        <div className="portfolio-publish-tablist-inner">
                          <div className="row">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/informative/1.webp" data-fancybox="informative">
                                  <img src="/publishing-new/assets/images/portfolio-mock/informative/1.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/informative/2.webp" data-fancybox="informative">
                                  <img src="/publishing-new/assets/images/portfolio-mock/informative/2.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/informative/3.webp" data-fancybox="informative">
                                  <img src="/publishing-new/assets/images/portfolio-mock/informative/3.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/informative/4.webp" data-fancybox="informative">
                                  <img src="/publishing-new/assets/images/portfolio-mock/informative/4.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/informative/5.webp" data-fancybox="informative">
                                  <img src="/publishing-new/assets/images/portfolio-mock/informative/5.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/informative/6.webp" data-fancybox="informative">
                                  <img src="/publishing-new/assets/images/portfolio-mock/informative/6.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/informative/7.webp" data-fancybox="informative">
                                  <img src="/publishing-new/assets/images/portfolio-mock/informative/7.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/informative/8.webp" data-fancybox="informative">
                                  <img src="/publishing-new/assets/images/portfolio-mock/informative/8.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="tab-pane fade" id="pills-portfolio5" role="tabpanel" aria-labelledby="pills-portfolio5-tab" tabIndex="0">
                        <div className="portfolio-publish-tablist-inner">
                          <div className="row">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/children/1.webp" data-fancybox="children">
                                  <img src="/publishing-new/assets/images/portfolio-mock/children/1.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/children/2.webp" data-fancybox="children">
                                  <img src="/publishing-new/assets/images/portfolio-mock/children/2.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/children/3.webp" data-fancybox="children">
                                  <img src="/publishing-new/assets/images/portfolio-mock/children/3.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/children/4.webp" data-fancybox="children">
                                  <img src="/publishing-new/assets/images/portfolio-mock/children/4.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/children/5.webp" data-fancybox="children">
                                  <img src="/publishing-new/assets/images/portfolio-mock/children/5.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/children/6.webp" data-fancybox="children">
                                  <img src="/publishing-new/assets/images/portfolio-mock/children/6.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/children/7.webp" data-fancybox="children">
                                  <img src="/publishing-new/assets/images/portfolio-mock/children/7.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
                            {" "}
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                              <div className="portfolio-publish-tablist-item imglist">
                                <a href="/publishing-new/assets/images/portfolio-mock/children/8.webp" data-fancybox="children">
                                  <img src="/publishing-new/assets/images/portfolio-mock/children/8.webp" alt="img" className="img-fluid" />
                                </a>
                              </div>
                            </div>
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
        {" "}
        {" "}
        {" "}
        <section className="main-info-wrap">
          <div className="container">
            <div className="main-info-inner">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="main-info-image">
                    <img src="/publishing-new/assets/images/main-info-img2.webp" alt="img" className="img-fluid" />
                  </div>
                </div>
                {" "}
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="main-info-content">
                    <h3>Why We Are One of the Best at What We Do?</h3>
                    {" "}
                    <p>
                      From thorough editing to captivating design and strategic marketing, we leave no stone unturned in ensuring your manuscript realizes its full potential. Our client-focused approach and years of industry experience set us apart and enable us to deliver our clients' desired results. The success stories of authors who have entrusted us with their literary dreams stand as a testament to our dedication to shaping exceptional books that connect with readers worldwide.
                    </p>
                    {" "}
                    <ul>
                      <li>
                        <b>Focused Commitment:</b>
                        {" Your triumph fuels our every effort."}
                      </li>
                      <li>
                        <b>One Solution:</b>
                        {" We cover editing to distribution seamlessly."}
                      </li>
                      <li>
                        <b>Book Experts:</b>
                        {" Veteran professionals ensure top-notch quality."}
                      </li>
                      <li>
                        <b>Author-Centric Approach:</b>
                        {" Your vision shapes our strategy."}
                      </li>
                      <li>
                        <b>Proven Excellence:</b>
                        {" Our record leaves no room for doubt."}
                      </li>
                    </ul>
                    {" "}
                    <div className="website-main-buttons"><button className="chat-btn">Live chat Now!</button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        <section className="cta-banner-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="cta-banner-content">
                  <h3>Turning Your Good into Perfection</h3>
                  {" "}
                  <p>
                    You have already done a good job writing the book. Now, let's do something excellent and take your project to the next level.
                  </p>
                  {" "}
                  <div className="website-main-buttons">
                    <a href="tel:+1-(833) 206-5993" className="call-btn">Call Us Now</a>
                    {" "}
                    <button className="chat-btn">Live Chat Now!</button>
                  </div>
                </div>
              </div>
              {" "}
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="cta-banner-img">
                  <img src="/publishing-new/assets/images/cta-ban-img.webp" alt="img" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        <section className="why-choose-wrap">
          <div className="container">
            <div className="why-choose-inner">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="why-choose-content">
                    <div className="why-choose-content-head">
                      <h3>The Value We Offer to Our Valuable Clients</h3>
                      {" "}
                      <p>
                        We deliver exceptional client value by combining our expertise with tailored solutions. Our results-driven approach, seasoned professionals, and commitment to exceeding expectations make us the best choice for authors seeking exceptional publishing services.
                      </p>
                    </div>
                    {" "}
                    <div className="why-choose-content-box">
                      <i className="fa-solid fa-check"></i>
                      {" "}
                      <div className="choose-content-box-info">
                        <h4>Dedication to Excellence</h4>
                        {" "}
                        <p>
                          We uphold the highest standards, infusing passion into every detail. Our dedication ensures your manuscript evolves into a polished masterpiece that resonates with readers globally.
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="why-choose-content-box">
                      <i className="fa-solid fa-check"></i>
                      {" "}
                      <div className="choose-content-box-info">
                        <h4>Author-Centric Approach</h4>
                        {" "}
                        <p>
                          Your aspirations shape our strategy. We prioritize your unique vision, providing tailor-made solutions that bring your literary dreams to life with authenticity and impact.
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="why-choose-content-box">
                      <i className="fa-solid fa-check"></i>
                      {" "}
                      <div className="choose-content-box-info">
                        <h4>Unmatched Expertise</h4>
                        {" "}
                        <p>
                          Our experienced team wields industry insights to enhance your manuscript's potential. With seasoned professionals across editing, design, and marketing, we ensure your success story becomes a reality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="why-choose-image">
                    <img src="/publishing-new/assets/images/why-choose-img.webp" alt="img" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        {" "}
        <section className="contact-area-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="contact-area-content">
                  <div className="contact-area-head"><h5>Get In Touch!</h5></div>
                  {" "}
                  <div className="contact-area-form">
                    <h4>Send A Message</h4>
                    {" "}
                    <p>
                      Your book becoming what you always dreamed of is just a click away. Don't let this opportunity slip from your hands.
                    </p>
                    {" "}
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
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-6 col-12">
                          <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" required defaultValue="" />
                          </div>
                        </div>
                        {" "}
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-6 col-12">
                          <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" defaultValue="" required />
                          </div>
                        </div>
                        {" "}
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="form-group">
                            <input type="text" name="phone" minLength="10" maxLength="12" placeholder="Your Phone" defaultValue="" required />
                          </div>
                        </div>
                        {" "}
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="form-group">
                            <textarea autoComplete="nope" name="message" placeholder="Message" rows="3"></textarea>
                          </div>
                        </div>
                        {" "}
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="form-group">
                            <button className="submit-btn" type="submit" cite="Submit" data-hover="Submit" name="cta1" value="Submit Now">Send Message</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {" "}
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="faqs-area-inner">
                  <div className="faqs-area-head"><h5>FAQs</h5></div>
                  {" "}
                  <div className="faqs-sec-item">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">{" What is the process of traditional publishing? "}</button>
                        </h4>
                        {" "}
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            {" Traditional publishing entails submitting your manuscript to established publishing houses. If your work is accepted, the publisher takes on professional editing, cover design, marketing, and distribution responsibilities. This route offers the advantage of wider exposure, including access to physical bookstores and the support of an established publishing team. "}
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">{" What is self-publishing and its benefits? "}</button>
                        </h4>
                        {" "}
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            {" Self-publishing allows authors to take full control of the publishing process. You oversee everything from editing and design to distribution. This grants creative freedom, flexibility in pricing, and the potential for higher earnings through increased royalties. Self-publishing is advantageous for authors seeking to maintain ownership of their work and expedite the publication timeline. "}
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">{" How does hybrid publishing work? "}</button>
                        </h4>
                        {" "}
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            {" Hybrid publishing blends aspects of both traditional and self-publishing. You maintain creative control over your manuscript while enjoying the expertise of professional services, such as editing and design. This approach strikes a balance between the independence of self-publishing and the industry standards associated with traditional publishing, offering authors a comprehensive solution that maximizes both creative input and professional quality. "}
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">{" What is the significance of print-on-demand (POD) services? "}</button>
                        </h4>
                        {" "}
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            {" Print-on-demand (POD) services revolutionize printing by only producing books when orders are placed. This eliminates the need for large upfront printing quantities, reduces the risk of unsold inventory, and minimizes storage requirements. Authors benefit from cost-effectiveness, lower financial risk, and an environmentally friendly approach that aligns with current market demands. "}
                          </div>
                        </div>
                      </div>
                      {" "}
                      <div className="accordion-item">
                        <h4 className="accordion-header" id="headingFive">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">{" How do eBook publishing platforms work? "}</button>
                        </h4>
                        {" "}
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            {" eBook publishing platforms convert your manuscript into digital formats suitable for e-readers, tablets, and smartphones. This digital transformation allows your book to be accessed by a global audience instantly, offering affordability and convenience. The digital nature of eBooks enables readers to access your work from anywhere, expanding your reach and potential readership beyond geographical boundaries. "}
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
      </main>
      <footer className="footer-main-sec">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12">
                    <div className="footer-logo-area">
                      <div className="footer-logo">
                        <img src="/publishing-new/assets/images/logo.webp" alt="logo" className="img-fluid" />
                      </div>
                      {" "}
                      <h4>About Us</h4>
                      {" "}
                      <p>
                        We are wordsmiths and storytellers passionate about bringing dreams to life on paper. With a focus on creativity, quality, and innovation, we turn ideas into timeless literary masterpieces.
                      </p>
                    </div>
                    {" "}
                    <div className="footer-social-area">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/americasbookwritingofficial" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/americasbookwriting/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {" "}
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="footer-info-area">
                      <h4>USA Office</h4>
                      {" "}
                      <ul>
                        <li>
                          <p>
                            <i className="fa-light fa-location-dot"></i>
                            {" 5432 Geary Blvd, San Francisco,CA 94121,United States"}
                          </p>
                        </li>
                        <li>
                          <a href="tel:+1-(833) 206-5993">
                            <i className="fa-solid fa-phone"></i>
                            {" +1-(833) 206-5993"}
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@publisher4states.com">
                            <i className="fa-light fa-envelope-circle-check"></i>
                            {" info@publisher4states.com"}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {" "}
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="footer-info-area">
                      <h4>UAE Office</h4>
                      {" "}
                      <ul>
                        <li>
                          <p>
                            <i className="fa-light fa-location-dot"></i>
                            {" Office 210, The Bayswater Tower, Marasi Drive Business Bay, Dubai"}
                          </p>
                        </li>
                        <li>
                          <a href="tel:+1-(833) 206-5993">
                            <i className="fa-solid fa-phone"></i>
                            {" +1-(833) 206-5993"}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="footer-links-area">
                  <ul className="footer-nav-links">
                    <li><a href="/terms-conditions">Terms Of Use</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              {" "}
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="footer-copyright"><p>© 2024 publisher 4 states All Rights Reserved</p></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
