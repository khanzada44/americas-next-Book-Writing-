/* Site footer (was inc/footer.php). */
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-4">
              <Link href="/" className="logo">
                <img className="lozad mb-3" src="/assets/img/logo-black.png" alt="publisher 4 states" />
              </Link>
              {" "}
              <p>
                At publisher 4 states, we provide our clients with affordable professional writing, editing, and proofreading services that are tailored to their specific needs. Additionally, we assist our clients in promoting their work across various media and channels, utilizing advanced tools and our expertise. With our comprehensive range of content solutions, publisher 4 states is your ultimate destination.
              </p>
            </div>
            {" "}
            <div className="col-lg-4">
              <ul className="list-unstyled row pt-5 row-cols-2">
                <li className="mb-3 col"><Link href="/ebook-writing">eBook Writing</Link></li>
                <li className="mb-3 col"><Link href="/book-publishing">Book Publishing</Link></li>
                <li className="mb-3 col"><Link href="/book-promotion">Book Promotion</Link></li>
                <li className="mb-3 col"><Link href="/audio-book">Audio Book</Link></li>
                <li className="mb-3 col"><Link href="/book-video">Book Video</Link></li>
                <li className="mb-3 col"><Link href="/book-proofreading">Book-Proofreading</Link></li>
                <li className="mb-3 col"><Link href="/article-publication">Article Publication</Link></li>
                <li className="mb-3 col"><Link href="/ghost-writing">Ghost Writing</Link></li>
                <li className="mb-3 col"><Link href="/book-cover-design">Book Cover Design</Link></li>
                {/* <li className="mb-3 col">
                  <a href="https://publisher4states.com/blogs/" target="_blank" rel="noopener noreferrer">
                    Blogs
                  </a>
                </li> */}
                <li className="mb-3 col"><Link href="/terms-conditions">Terms Conditions</Link></li>
                <li className="mb-3 col"><Link href="/privacy-policy">Privacy Policy</Link></li>
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
                  <a href="https://maps.app.goo.gl/QZsAUC2swsygx72E8" target="_blank" rel="noopener noreferrer">
                    {" 5432 Geary Blvd, San Francisco, CA 94121, United States"}
                  </a>
                </li>
              </ul>
              {" "}
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li className="pe-3">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook f-24"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram f-24"></i>
                  </a>
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
                  <a href="https://publisher4states.com/assets/img/dmca-certificate.png" target="_blank" rel="noopener noreferrer">
                    <img className="lozad" src="/assets/img/dmca-protection.webp" alt="DMCA Protection" />
                  </a>
                </li>
                <li className="dmc">
                  <a href="https://publisher4states.com/assets/img/dmca-certificate.png" target="_blank" rel="noopener noreferrer">
                    <img className="lozad" src="/assets/img/dmca-compliance.png" alt="DMCA Compliance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}