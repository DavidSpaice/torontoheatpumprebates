import { features3 } from "@/data/features";
import React from "react";
import Image from "next/image";
export default function Features() {
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Image */}
        <div className="col-lg-6 col-xl-7 d-flex align-items-center">
          <div className="w-100">
            <div className="mb-20">
              <Image
                src="/assets/images/demo-fancy/section-image-7.png"
                alt="Image Description"
                width={1200}
                height={658}
                className="w-100"
              />
            </div>
            {/* <div className="small text-gray text-center">
              Illustration by{" "}
              <a
                href="https://icons8.com/illustrations/author/TQQ1qAnr9rn5"
                rel="noopener nofollow"
                target="_blank"
              >
                Oleg Shcherba{" "}
              </a>
              from{" "}
              <a
                href="https://icons8.com/illustrations"
                rel="noopener nofollow"
                target="_blank"
              >
                Ouch
              </a>
              !
            </div> */}
          </div>
        </div>
        {/* End Images */}
        {/* Section Text */}
        <div className="col-lg-6 col-xl-5 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption-fancy mb-20 mb-xs-10">
              Unlock Toronto Heat Pump Rebates{" "}
            </h2>
            <h3 className="section-title-small mb-30">Save up to $7,500! </h3>
            <p className="section-descr mb-30">
              Take advantage of Toronto's generous rebate programs when you
              upgrade to a high-efficiency heat pump. Through initiatives like
              the Ontario Home Energy Savings Program and the Canada Green Homes
              Grant, eligible homeowners can save up to $7,500.
            </p>
            <p className="section-descr mb-30">
              Air Source Heat Pump Upgrade: Upgrade your existing heat pump
              system to a more efficient model and receive a rebate of up to
              $7,500. Comprehensive Home Energy Assessment: Identify additional
              home improvements to boost energy savings. Simplified Application
              Process: Our team will guide you through every step to help you
              maximize your rebate quickly and easily.
            </p>
            {/* Features List */}
            {/*             <div className="row features-list">
              {features3.map((feature, index) => (
                <div
                  key={index}
                  className="col-sm-6 col-lg-12 col-xl-6 d-flex mb-3"
                >
                  <div className="features-list-icon">
                    <i className="mi-check" />
                  </div>
                  <div className="features-list-text">{feature.text}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        {/* End Section Text */}
      </div>
    </div>
  );
}
