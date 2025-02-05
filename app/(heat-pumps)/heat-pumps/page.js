import Header6 from "@/components/headers/Header6";
import Footer6 from "@/components/footers/Footer6";
import Faq from "@/components/heatPumps/Faq";
import { features3 } from "@/data/features";
import { featuresTitle3 } from "@/data/features";
import Features from "@/components/heatPumps/Features";
import Service from "@/components/heatPumps/Service";
import Contact from "@/components/homes/home-6/Contact";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";

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
                        <AnimatedText text="Heat" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Pumps" />
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
                      Premier Heat Pump Repair & Maintenance in Toronto
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section scrollSpysection  ${
                dark ? "bg-dark-1 bg-gradient-gray-dark-1 light-content" : " "
              } bg-scroll`}
              id="services"
            >
              <div className="container position-relative">
                <h2 className="section-caption-fancy mb-20 mb-xs-10">
                  what we do
                </h2>
                <Service />
              </div>
            </section>{" "}
            <section className="page-section">
              <Features
                featuresTitles={featuresTitle3}
                features={features3}
                imagePosition="left"
              />
            </section>
            <section className="page-section z-index-1">
              <div className="container position-relative">
                <div className="row position-relative">
                  <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                    <h2 className="section-caption-fancy mb-20 mb-xs-10">
                      how to choose
                    </h2>
                    <h3 className="section-title mb-30">
                      Choosing the Perfect Heat Pump
                    </h3>
                    <p className="text-gray mb-0">
                      Choosing the right heat pump is important for maintaining
                      an efficient, comfortable, and budget-friendly home
                      environment. Here are some key factors to consider before
                      making your decision:
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
