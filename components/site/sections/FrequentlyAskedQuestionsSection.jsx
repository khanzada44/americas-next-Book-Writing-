/* Shared section, used on 12 pages. */
export default function FrequentlyAskedQuestionsSection() {
  return (
    <>
      <section className="">
        <div className="row">
          <div className="col-lg-6 bg-d py-5">
            <div className="row justify-content-lg-end justify-content-center">
              <div className="col-xl-8 text-white col-lg-10 col-md-8 col-11">
                <h2 className="f-39 fw-700">Frequently Asked Questions</h2>
                {" "}
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">{" What exactly is Ghost Writing? "}</button>
                    </h3>
                    {" "}
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <p>
                          Finding you the most qualified writer who meets all of your specifications is the best service provided by blog writing services. Writing style, experience, genres, and time constraints force us to consider all factors and recommend the finest blog writer to you.
                        </p>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">{" What is Proofreading, and why is it important? "}</button>
                    </h3>
                    {" "}
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <p>
                          On their phones or tablets, users can listen to any audiobook that has been downloaded. It is a comprehensive recording of a book that, in today's hectic environment, saves a ton of time and makes learning simple.
                        </p>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">{" On what parameters should I hire a website content writer? "}</button>
                    </h3>
                    {" "}
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <p>
                          Definitely! An established Book Writing Help service respects your opinions and works closely with you to comprehend your aims in order to produce a book that is in line with your creative objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="flush-headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">{" How to listen to Audio Books, and are they worth it? "}</button>
                    </h3>
                    {" "}
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <p>
                          Your best option might be to hire a content writer for your website. Check out the reviews first, of course. In your initial search, consult your friends for suggestions. Start looking via website content writing companies or independent contractors if you can't find any. Once you've located an expert, go over your needs with them and base your choice on their knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div className="col-lg-6 py-5 lozad" data-background-image="/assets/img/contact-sec-bg.webp">
            <div className="row justify-content-lg-start justify-content-center">
              <div className="col-xl-8 col-lg-10 col-md-7 col-md-8 col-11">
                <h2 className="f-39 fw-700">Contact Us</h2>
                {" "}
                <form method="post" data-lead="1">
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
                    {" "}
                    <input type="hidden" name="source" defaultValue="" />
                  </div>
                  {" "}
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
                  {" "}
                  <div className="form-group mb-3">
                    <textarea className="form-control" autoComplete="nope" name="message" placeholder="Enter Brief"></textarea>
                  </div>
                  {" "}
                  <div className="form-group">
                    <button className="btn" cite="Submit" data-hover="Submit" type="submit" name="cta1" value="Submit Now">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
