/* Site header and menu (was inc/header.php). */
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="py-3 text-white">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 col-6">
              <Link href="/" className="logo">
                <img className="lozad" src="/assets/img/logo-white.png" alt="Logo" />
              </Link>
            </div>
            {" "}
            <div className="col-6 col-md-8 text-end nav-open d-lg-none">
              <i className="fa-solid fa-bars"></i>
            </div>
            {" "}
            <div className="col-lg-8 col-md-8 ps-5 position-relative">
              <ul className="nav-bar list-unstyled d-lg-flex justify-content-between mb-0">
                <li className="row align-items-center pt-2 d-lg-none">
                  <Link href="/" className="col-lg-2 col-md-4 col-6">
                    <div className="logo">
                      <img className="lozad" src="/assets/img/logo-white.png" alt="Logo" />
                    </div>
                  </Link>
                  {" "}
                  <div className="col-6 col-md-8 text-end nav-open d-lg-none">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </li>
                <li><Link href="/ebook-writing">eBook Writing</Link></li>
                <li><Link href="/book-publishing">Book Publishing</Link></li>
                <li><Link href="/book-promotion">Book Promotion</Link></li>
                <li className="drop-down">
                  <a role="button" data-legacy-href="javascript:void(0)">
                    {"Services "}
                    <i className="fa fa-sort-desc" aria-hidden="true"></i>
                  </a>
                  {" "}
                  <div className="bg-l drop-down-cont">
                    <ul className="row">
                      <li className="col-lg-4 py-lg-3">
                        <Link className="row align-items-center" href="/audio-book">
                          <div className="col-lg-3 d-none d-lg-block">
                            <img className="lozad" src="/assets/img/audio-book-nav.png" alt="Audio Book" />
                          </div>
                          {" "}
                          <div className="col-lg-9">{" Audio Book "}</div>
                        </Link>
                      </li>
                      <li className="col-lg-4 py-lg-3">
                        <Link className="row align-items-center" href="/book-video">
                          <div className="col-lg-3 d-none d-lg-block">
                            <img className="lozad" src="/assets/img/book.png" alt="Book Video" />
                          </div>
                          {" "}
                          <div className="col-lg-9">{" Book Video "}</div>
                        </Link>
                      </li>
                      <li className="col-lg-4 py-lg-3">
                        <Link className="row align-items-center" href="/article-publication">
                          <div className="col-lg-3 d-none d-lg-block">
                            <img className="lozad" src="/assets/img/publishing.png" alt="Article Publication" />
                          </div>
                          {" "}
                          <div className="col-lg-9">{" Article Publication "}</div>
                        </Link>
                      </li>
                      <li className="col-lg-4 py-lg-3">
                        <Link className="row align-items-center" href="/ghost-writing">
                          <div className="col-lg-3 d-none d-lg-block">
                            <img className="lozad" src="/assets/img/ebook-writing.png" alt="Ghost Writing" />
                          </div>
                          {" "}
                          <div className="col-lg-9">{" Ghost Writing "}</div>
                        </Link>
                      </li>
                      <li className="col-lg-4 py-lg-3">
                        <Link className="row align-items-center" href="/book-proofreading">
                          <div className="col-lg-3 d-none d-lg-block">
                            <img className="lozad" src="/assets/img/proof-reading.png" alt="Book Proofreading" />
                          </div>
                          {" "}
                          <div className="col-lg-9">{" Book Proofreading "}</div>
                        </Link>
                      </li>
                      <li className="col-lg-4 py-lg-3">
                        <Link className="row align-items-center" href="/book-cover-design">
                          <div className="col-lg-3 d-none d-lg-block">
                            <img className="lozad" src="/assets/img/icons8-design-50.png" alt="Book Cover Design" />
                          </div>
                          {" "}
                          <div className="col-lg-9">{" Book Cover Design "}</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li>
                  <a href="https://americasbookwriting.com/blogs/" target="_blank" rel="noopener noreferrer">
                    Blogs
                  </a>
                </li> */}
              </ul>
            </div>
            {" "}
            <div className="col-lg-2 d-none d-lg-block">
              <button className="w-100" type="button" data-bs-toggle="modal" data-bs-target="#quote">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}