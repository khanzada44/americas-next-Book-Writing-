import '@/components/home/home.css';
import TrustStrip from '@/components/home/TrustStrip';
import AboutSplit from '@/components/home/AboutSplit';
import ServicesGrid from '@/components/home/ServicesGrid';
import ProcessSteps from '@/components/home/ProcessSteps';
import WhyUs from '@/components/home/WhyUs';
import GenreTabs from '@/components/home/GenreTabs';
import Testimonials from '@/components/home/Testimonials';
import CtaBand from '@/components/home/CtaBand';
import FaqContact from '@/components/home/FaqContact';
import KindleShowcase from '@/components/sections/KindleShowcase';
import { homeSchema } from '@/components/home/schema';

export const metadata = {
  title: { absolute: "Hire publisher 4 states, the #1 Book Writing Agency in US" },
  description: "Hire the #1 Book Writing Agency in USA to get Professional Book Writing Services and turn your ideas into best-selling books. Call us now and get started today!",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://publisher4states.com/" },
};

export default function HomePage() {
  return (
    <>
      {homeSchema.map((json, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
      ))}

      {/* original video hero (kept as it was, outside .ph so the new styles never touch it) */}
      <section className="py-5 banner position-relative">
        <video className="lozad position-absolute" data-poster="/assets/img/video-poster.webp" autoPlay muted playasline="" loop>
          <source src="/assets/videos/bookwritingvideo-1.webm" type="video/mp4" />
        </video>
        {" "}
        <div className="container-xl">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-12 col-md-12 col-xl-11 text-white text-center pt-5">
              <p className="f-20"><strong>Award Winning Book Writing Services</strong></p>
              {" "}
              <h1 className="fw-700 f-36">
                {" Become the Best-Seller Author with publisher 4 states "}
                <br />
                <span className="clr-2">The Best Book Writing Company in USA</span>
              </h1>
              {" "}
              <div className="d-flex justify-content-center -tel:090008401center mt-3">
                <button className="me-2 mb-2" type="button" data-bs-toggle="modal" data-bs-target="#quote">Get Started</button>
                <a className="btn mb-2 btn-2" href="tel:090008401">090008401</a>
              </div>
              {" "}
              <ul className="list-unstyled row row-cols-sm-6 justify-content-center row-cols-2 px-5 mt-3">
                <li className="col">
                  <img className="lozad" src="/assets/img/banner-seal-white-4.webp" alt="publisher 4 states" />
                </li>
                <li className="col">
                  <img className="lozad" src="/assets/img/banner-seal-white-3.png" alt="publisher 4 states" />
                </li>
                <li className="col">
                  <img className="lozad" src="/assets/img/banner-seal-white-2.webp" alt="publisher 4 states" />
                </li>
                <li className="col">
                  <img className="lozad" src="/assets/img/banner-seal-white-1.webp" alt="publisher 4 states" />
                </li>
              </ul>
            </div>
          </div>
          {" "}
          <div className="row bannerbook d-none d-md-block">
            <div className="container">
              <img className="lozad" src="/assets/img/home_banner_bottam_img.png" alt="publisher 4 states" />
            </div>
          </div>
        </div>
      </section>

      <main className="ph">
        <TrustStrip />
        <AboutSplit />
        <ServicesGrid />
        <KindleShowcase />
        <ProcessSteps />
        <WhyUs />
        <GenreTabs />
        <Testimonials />
        <CtaBand />
        <FaqContact />
      </main>
    </>
  );
}