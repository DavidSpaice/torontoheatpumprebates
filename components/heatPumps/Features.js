import React from "react";
import Image from "next/image";

export default function Features({
  featuresTitles = [],
  features = [],
  imagePosition = "left",
}) {
  const imageColumnClasses =
    imagePosition === "left"
      ? "col-lg-6 col-xl-7 d-flex align-items-center order-last order-lg-first mb-md-60 mb-sm-40"
      : "col-lg-6 col-xl-7 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40";

  // For the text column
  const textColumnClasses =
    imagePosition === "left"
      ? "col-lg-6 col-xl-5 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40"
      : "col-lg-6 col-xl-5 d-flex align-items-center order-last order-lg-first mb-md-60 mb-sm-40";

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Image Column */}
        <div className={imageColumnClasses}>
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
          </div>
        </div>

        {/* Text Column */}
        <div className={textColumnClasses}>
          <div className="w-100">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">
                Signs Your Heat Pump Needs Repair{" "}
              </h2>
            {featuresTitles.map((featuresTitle, index) => (
              <>
                <h3 className="section-title-small mb-30">
                  {featuresTitle.title}
                </h3>
                <p className="section-descr mb-30">{featuresTitle.subtitle}</p>
              </>
            ))}
            {/* Features List */}
            <div className="row features-list">
              {features.map((feature, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
