/* Site footer (was inc/footer.php). */
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-4 text-white small"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/assets/img/footer-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-xl">
        <div className="row gy-3 align-items-start">
          {/* Brand & Short Intro */}
          <div className="col-lg-4">
            <Link href="/" className="logo d-inline-block mb-2">
              <img
                className="lozad"
                src="/assets/img/logo-black.png"
                alt="publisher 4 states"
                style={{ maxHeight: "38px" }}
              />
            </Link>
            <p className="mb-0">
              Publisher 4 States offers affordable writing, editing, proofreading, and book promotion services tailored to authors and creators.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-5">
            <ul className="list-unstyled row row-cols-2 row-cols-sm-3 g-1 mb-0">
              <li className="col"><Link href="/ebook-writing">eBook Writing</Link></li>
              <li className="col"><Link href="/book-publishing">Book Publishing</Link></li>
              <li className="col"><Link href="/book-promotion">Book Promotion</Link></li>
              <li className="col"><Link href="/audio-book">Audio Book</Link></li>
              <li className="col"><Link href="/book-video">Book Video</Link></li>
              <li className="col"><Link href="/book-proofreading">Book Proofreading</Link></li>
              <li className="col"><Link href="/article-publication">Article Publication</Link></li>
              <li className="col"><Link href="/ghost-writing">Ghost Writing</Link></li>
              <li className="col"><Link href="/book-cover-design">Book Cover Design</Link></li>
              <li className="col"><Link href="/terms-conditions">Terms Conditions</Link></li>
              <li className="col"><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="col-lg-3">
            <ul className="list-unstyled mb-2">
              <li className="mb-1">
                <a href="tel:090008401">
                  <i className="fa-solid fa-phone pe-2"></i>
                  090008401
                </a>
              </li>
              <li className="mb-1">
                <a href="mailto:info@publisher4states.com">
                  <i className="fa-solid fa-envelope pe-2"></i>
                  info@publisher4states.com
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://maps.app.goo.gl/QZsAUC2swsygx72E8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-location-crosshairs pe-2"></i>
                  5432 Geary Blvd, San Francisco, CA
                </a>
              </li>
            </ul>

            <div className="d-flex gap-3">
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook fs-6"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram fs-6"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-3 border-secondary opacity-50" />

        {/* Bottom Copyright & Badges */}
        <div className="row gy-2 align-items-center">
          <div className="col-md-6">
            <p className="mb-0">© publisher 4 states 2026 All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled d-flex justify-content-md-end align-items-center gap-2 mb-0">
              <li className="dmc">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    className="lozad"
                    src="/assets/img/dmca-protection.webp"
                    alt="DMCA Protection"
                    style={{ maxHeight: "28px" }}
                  />
                </a>
              </li>
              <li className="dmc">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    className="lozad"
                    src="/assets/img/dmca-compliance.png"
                    alt="DMCA Compliance"
                    style={{ maxHeight: "28px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}