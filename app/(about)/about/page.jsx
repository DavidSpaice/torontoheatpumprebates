import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import About from "@/components/homes/home-6/About";
import Testimonials from "@/components/homes/home-6/Testimonials";
import TestimonialsDark from "@/components/homes/home-6/TestimonialsDark";
import Contact from "@/components/homes/home-6/Contact";
import { features7 } from "@/data/features";
import { featuresTitle7 } from "@/data/features";
import Features from "@/components/heatPumps/Features";
import { fancyMultipage } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Fancy About || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function AboutPage() {
  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 links={fancyMultipage} />
          </nav>
          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* <!-- Background Shape --> */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt=""
                />
              </div>
              {/* <!-- End Background Shape --> */}

              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="About" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Us" />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          ></b>
                        </span>
                      </span>
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Serving Torontonians with Dedication
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section  scrollSpysection ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="about"
            >
              <div className="container position-relative">
                <div className="row mb-xs-40">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <p
                      className="section-descr mb-40 mb-sm-20 wow fadeInUp"
                      data-wow-delay="0.06s"
                    >
                      Heat Pump Rebates Toronto, located in Toronto, Ontario,
                      Canada, is strategically positioned to efficiently serve
                      our customers throughout the city. As a leading provider
                      of energy-efficient heating and cooling solutions, we
                      specialize in assisting both residential and commercial
                      clients in navigating the complexities of heat pump
                      rebates and installations.
                    </p>
                    <div
                      className="local-scroll wow fadeInUp"
                      data-wow-delay="0.12s"
                    >
                      {/* <Link
                        href={`/fancy-services${dark ? "-dark" : ""}`}
                        className="link-hover-anim"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          View our services{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          View our services{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </Link> */}
                    </div>
                  </div>
                </div>
                {/* Images Composition */}
                <About />
                {/* End Images Composition */}
              </div>
            </section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section className="page-section">
              <div className="page-section">
                <div className="row mb-xs-40">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <h3 className="section-title-small mb-30">Our Mission</h3>
                    <p
                      className="section-descr mb-40 mb-sm-20 wow fadeInUp"
                      data-wow-delay="0.06s"
                    >
                      Our mission at Heat Pump Rebates Toronto is clear: to
                      promote energy-efficient solutions by making heat pump
                      technology accessible, affordable, and rewarding for homes
                      and businesses across Toronto. We are committed to helping
                      our clients maximize their rebates and transition to more
                      sustainable heating and cooling systems.
                    </p>
                    {/* <div
                      className="local-scroll wow fadeInUp"
                      data-wow-delay="0.12s"
                    >
                      <Link
                      href={`/fancy-services${dark ? "-dark" : ""}`}
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        View our services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        View our services{" "}
                        <i
                          className="mi-arrow-right size-24"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link> 
                    </div> */}
                  </div>
                </div>
              </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section className="page-section">
              <Features
                featuresTitles={featuresTitle7}
                features={features7}
                imagePosition="left"
              />
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
            >
              {dark ? <TestimonialsDark /> : <Testimonials />}
            </section>
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
        </div>{" "}
      </div>
    </>
  );
}
