"use client";
import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// If you have a menu data file, import from there:
import { fancyMultipage } from "@/data/menu";

export default function HowToApplyRebatesPage() {
  // Example local state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    try {
      // Example fetch to an API endpoint '/api/contact' (create or adjust as needed)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send form data");
      }

      // Clear form after successful submission, or display success message, etc.
      setFormData({ name: "", email: "", phone: "", message: "" });
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          {/* Navigation */}
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 links={fancyMultipage} />
          </nav>

          <main id="main">
            {/* Hero Section */}
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* Background Shape */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt="Background Shape"
                />
              </div>
              {/* End Background Shape */}

              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="Step-by-Step Guide to Accessing Your Rebates" />{" "}
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="in Toronto" />
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
                      How to Apply for Heat Pump Rebates in Toronto
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Intro & Form Section */}
            <section className="page-section" style={{ paddingTop: "60px" }}>
              <div className="container position-relative">
                <div className="row">
                  {/* Left Column: Intro */}
                  <div className="col-lg-8">
                    <h2 className="mb-4 fw-bold">
                      Streamline Your Path to Energy Savings
                    </h2>
                    <p className="mb-20">
                      At Heat Pump Rebates Toronto, we're here to help you
                      navigate the process of securing rebates of up to
                      <strong> $7,500</strong> for upgrading your home's heating
                      system with an energy-efficient heat pump. As a recognized
                      contractor supported by Enbridge &amp; other local
                      initiatives, we offer peace of mind during your energy
                      upgrade, contributing to a greener Toronto.
                    </p>

                    <h4 className="fw-bold mt-4">Eligibility Requirements</h4>
                    <div>
                      <strong>Home Requirements:</strong>
                      <ul>
                        <li>
                          Must have been primarily occupied in Ontario for at
                          least one year
                        </li>
                        <li>
                          Single-family homes, row housing, or semi-detached
                        </li>
                        <li>
                          Multi-unit buildings or rental units with separate
                          meters may qualify
                        </li>
                      </ul>
                      <strong>Utility Requirements:</strong>
                      <ul>
                        <li>
                          Must be served by a qualifying utility (e.g.,
                          Enbridge) or municipality
                        </li>
                      </ul>
                    </div>

                    <h4 className="fw-bold mt-4">Installation Requirements</h4>
                    <p>
                      Purchase your heat pump from an authorized dealer or
                      installer. The Heat Pump Rebates Toronto program also
                      requires a verified installation report confirming the
                      system meets the relevant efficiency criteria.
                    </p>

                    <h4 className="fw-bold mt-4">
                      Step-by-Step Application Process
                    </h4>
                    <ol className="mb-4">
                      <li>
                        <strong>Check Eligibility:</strong>
                        Ensure the heat pump you’ve chosen meets the
                        rebate/installation criteria set by local incentive
                        programs. Contact Heat Pump Rebates Toronto to see how
                        your home qualifies.
                      </li>
                      <li>
                        <strong>Purchase &amp; Install:</strong>
                        Select the right heat pump that aligns with the
                        program’s efficiency standards. We’ll help ensure you
                        have the correct paperwork.
                      </li>
                      <li>
                        <strong>Professional Installation:</strong>
                        Our certified technicians at Heat Pump Rebates Toronto
                        will handle the installation, ensuring it meets all
                        provincial and municipal guidelines.
                      </li>
                      <li>
                        <strong>Submit Your Rebate Application:</strong>
                        Once your system is in place, let us guide you through
                        the application paperwork, including receipts, model
                        details, and more.
                      </li>
                    </ol>
                  </div>

                  {/* Right Column: Form */}
                  <div className="col-lg-4">
                    <div className="box-shadow round p-4 p-sm-5 text-dark">
                      <h5 className="mb-3">
                        Are You Going to Implement Project?
                      </h5>
                      <form
                        onSubmit={handleFormSubmit}
                        className="form contact-form"
                      >
                        <div className="row">
                          {/* Name */}
                          <div className="col-md-12 mb-3">
                            <label htmlFor="name" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="input-lg round form-control"
                              placeholder="Enter your name"
                              required
                              value={formData.name}
                              onChange={handleFormChange}
                            />
                          </div>
                          {/* Phone */}
                          <div className="col-md-12 mb-3">
                            <label htmlFor="phone" className="form-label">
                              Phone
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              className="input-lg round form-control"
                              placeholder="Enter your phone number"
                              required
                              value={formData.phone}
                              onChange={handleFormChange}
                            />
                          </div>
                          {/* Email */}
                          <div className="col-md-12 mb-3">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="input-lg round form-control"
                              placeholder="Enter your email"
                              required
                              value={formData.email}
                              onChange={handleFormChange}
                            />
                          </div>
                        </div>
                        {/* Message */}
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            name="message"
                            id="message"
                            className="input-lg round form-control"
                            style={{ height: 130 }}
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleFormChange}
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <button
                              type="submit"
                              className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim w-100"
                              aria-controls="result"
                            >
                              <span>Send</span>
                            </button>
                          </div>
                          <div className="col-md-6 d-flex align-items-center">
                            <div className="form-tip w-100 pt-3 mt-sm-20">
                              <i className="icon-info size-16" />
                              All fields are required. By sending the form, you
                              agree to the{" "}
                              <a href="#">Terms &amp; Conditions</a> and{" "}
                              <a href="#">Privacy Policy</a>.
                            </div>
                          </div>
                        </div>
                        <div
                          id="result"
                          role="region"
                          aria-live="polite"
                          aria-atomic="true"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Available Rebates Section */}
            <section className="page-section">
              <div className="container">
                <h3 className="fw-bold mb-4">Available Rebates in Toronto</h3>
                <p>
                  Along with provincial programs, Toronto homeowners may also be
                  eligible for:
                </p>
                <ul>
                  <li>
                    <strong>Enbridge Home Efficiency Rebate:</strong> Up to
                    $5,000 for qualifying heat pumps
                  </li>
                  <li>
                    <strong>IESO Rebates:</strong> Additional incentives for
                    energy-efficient upgrades
                  </li>
                  <li>
                    <strong>Canada Greener Homes Grant:</strong> Up to $5,600
                    for various home retrofits
                  </li>
                </ul>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="page-section">
              <div className="container">
                <h2 className="section-title mb-40 text-center wow fadeInUp">
                  Why Choose Heat Pump Rebates Toronto?
                </h2>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Expertise</h5>
                      <p className="mb-0">
                        As government-approved contractors, we understand all
                        the rebate processes inside and out.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Comprehensive Service</h5>
                      <p className="mb-0">
                        From eligibility checks to installation and rebate
                        application, we handle it all.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Quality Assurance</h5>
                      <p className="mb-0">
                        Our HVAC professionals guarantee high-quality
                        installations that meet all rebate criteria.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Maximized Savings</h5>
                      <p className="mb-0">
                        We verify your eligibility and apply for all applicable
                        rebates, ensuring maximum financial benefit.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-3 border rounded">
                      <h5 className="fw-semibold">Energy Efficiency</h5>
                      <p className="mb-0">
                        Our heat pump solutions deliver year-round comfort and
                        significant energy savings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="page-section bg-gradient-gray-light-1">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h2 className="section-title mb-20 wow fadeInUp">
                      Start Your Energy-Saving Journey Today
                    </h2>
                    <p className="wow fadeInUp">
                      Ready to make the switch or have questions about applying
                      for Toronto heat pump rebates? Our team is here to guide
                      you every step of the way. Contact us to discover the best
                      options for your home and budget.
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <Link href="#top">
                      <button className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim w-100">
                        <span>Contact Us for a Free Consultation</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>
      </div>
    </>
  );
}
