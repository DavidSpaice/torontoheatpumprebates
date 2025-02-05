import Header6 from "@/components/headers/Header6";
import Footer6 from "@/components/footers/Footer6";
import Faq from "@/components/common/Faq";
import Features from "@/components/homes/home-6/Features";
import Testimonials from "@/components/homes/home-6/Testimonials";
import TestimonialsDark from "@/components/homes/home-6/TestimonialsDark";
import Blog from "@/components/homes/home-6/Blog";
import Newsletter from "@/components/homes/home-6/Newsletter";
import Contact from "@/components/homes/home-6/Contact";

import { fancyMultipage } from "@/data/menu";

const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Fancy Contact || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function HeatPumpsPage() {
  return (
    <div className="theme-fancy">
      <div className="page" id="top">
        <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
          <Header6 links={fancyMultipage} />
        </nav>
        <main id="main">
          <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
          <div id="about">
            <div>
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* FAQ Section */}
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  <div className="row position-relative">
                    <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                      <h2 className="section-caption-fancy mb-20 mb-xs-10">
                        About Rebates
                      </h2>
                      <h3 className="section-title mb-30">
                        Frequently Asked Questions
                      </h3>
                      <p className="text-gray mb-0">
                        Welcome to our FAQ section where you can find answers to
                        common questions about the Toronto Heat Pump Rebate. We
                        cover eligibility, benefits, installation requirements,
                        and the rebate application process. This resource is
                        designed to help you quickly find the information you
                        need to take advantage of an energy-efficient heat pump
                        system. If you need more help, our team is just a call
                        or click away.
                      </p>
                    </div>
                    <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                      {/* Accordion */}
                      <Faq />
                      {/* End Accordion */}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/*       </section> */}

          <section
            className={`page-section  ${
              dark ? "bg-dark-1 light-content" : ""
            } `}
          >
            <Features />
          </section>

          <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
          <section
            className={`page-section  ${
              dark ? "bg-dark-1 light-content" : ""
            } `}
          >
            {dark ? <TestimonialsDark /> : <Testimonials />}
          </section>
          <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
          <section
            className={`page-section  scrollSpysection  ${
              dark ? "bg-dark-1 light-content" : ""
            } `}
            id="blog"
          >
            <Blog />
          </section>

          <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

          <section
            className={`page-section ${
              dark
                ? "bg-dark-1 bg-gradient-gray-dark-1 light-content"
                : "bg-gradient-gray-light-1 "
            } bg-scroll`}
          >
            <Newsletter />
          </section>

          <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
          <section
            className={`page-section  scrollSpysection  ${
              dark ? "bg-dark-1 light-content" : ""
            } `}
            id="contact"
          >
            <Contact />
          </section>
        </main>
        <footer className="page-section footer bg-dark-1 light-content pb-30">
          <Footer6 />
        </footer>
      </div>
    </div>
  );
}
