/* Site footer (was inc/footer.php). */
export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-4">
              <a href="/" className="logo">
                <img className="lozad mb-3" src="/assets/img/logo-black.png" alt="publisher 4 states" />
              </a>
              {" "}
              <p>
                At publisher 4 states, we provide our clients with affordable professional writing, editing, and proofreading services that are tailored to their specific needs. Additionally, we assist our clients in promoting their work across various media and channels, utilizing advanced tools and our expertise. With our comprehensive range of content solutions, publisher 4 states is your ultimate destination.
              </p>
            </div>
            {" "}
            <div className="col-lg-4">
              <ul className="list-unstyled row pt-5 row-cols-2">
                <li className="mb-3 col"><a href="/ebook-writing">eBook Writing</a></li>
                <li className="mb-3 col"><a href="/book-publishing">Book Publishing</a></li>
                <li className="mb-3 col"><a href="/book-promotion">Book Promotion</a></li>
                <li className="mb-3 col"><a href="/audio-book">Audio Book</a></li>
                <li className="mb-3 col"><a href="/book-video">Book Video</a></li>
                <li className="mb-3 col"><a href="/book-proofreading">Book-Proofreading</a></li>
                <li className="mb-3 col"><a href="/article-publication">Article Publication</a></li>
                <li className="mb-3 col"><a href="/ghost-writing">Ghost Writing</a></li>
                <li className="mb-3 col"><a href="/book-cover-design">Book Cover Design</a></li>
                <li className="mb-3 col"><a href="https://publisher4states.com/blogs/">Blogs</a></li>
                <li className="mb-3 col"><a href="/terms-conditions">Terms Conditions</a></li>
                <li className="mb-3 col"><a href="/privacy-policy">Privacy Policy</a></li>
              </ul>
            </div>
            {" "}
            <div className="col-lg-4 mt-5">
              <ul>
                <li className="">
                  <a className="" href="tel:(833) 206-5993">
                    <i className="fa-solid fa-phone pe-3"></i>
                    (833) 206-5993
                  </a>
                </li>
                <li className="mt-3">
                  <a href="mailto:info@publisher4states.com">
                    <i className="fa-solid fa-envelope pe-3"></i>
                    info@publisher4states.com
                  </a>
                </li>
                <li className="mt-3">
                  <i className="fa-solid fa-location-crosshairs pe-3"></i>
                  <a href="https://maps.app.goo.gl/QZsAUC2swsygx72E8">{" 5432 Geary Blvd, San Francisco, CA 94121, United States"}</a>
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li className="pe-3">
                  <a href="https://www.facebook.com/americasbookwritingofficial" target="_blank"><i className="fa-brands fa-facebook f-24"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/americasbookwriting/" target="_blank"><i className="fa-brands fa-instagram f-24"></i></a>
                </li>
              </ul>
            </div>
          </div>
          {" "}
          <div className="row">
            <div className="col-lg-6 pt-3">
              <p className="mb-0">© publisher 4 states 2024 All rights reserved.</p>
            </div>
            {" "}
            <div className="col-lg-6">
              <ul className="list-unstyled d-flex justify-content-end mb-0">
                <li className="dmc pe-3">
                  <a href="https://publisher4states.com/assets/img/dmca-certificate.png" target="_blank"><img className="lozad" src="/assets/img/dmca-protection.webp" /></a>
                </li>
                <li className="dmc">
                  <a href="https://publisher4states.com/assets/img/dmca-certificate.png" target="_blank"><img className="lozad" src="/assets/img/dmca-compliance.png" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
