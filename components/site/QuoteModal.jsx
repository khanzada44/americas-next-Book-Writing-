/* "Get In Touch" popup form (opened by data-bs-target="#quote"). */
export default function QuoteModal() {
  return (
    <>
      <div className="modal fade" id="quote" tabIndex="-1" aria-labelledby="quoteLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content lozad" data-background-image="/assets/img/americas-pop-banner.webp">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {" "}
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 d-lg-block d-none">
                  <img className="lozad" src="/assets/img/americas-pop-banner-img-Rev-2-1.webp" alt="publisher 4 states " />
                </div>
                {" "}
                <div className="col-md-6 d-lg-block d-none">
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
                      <input type="hidden" name="subject" data-add-page-url="1" defaultValue="Popup Form" />
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
        </div>
      </div>
    </>
  );
}
