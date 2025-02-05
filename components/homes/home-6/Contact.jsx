"use client";
import { useState } from "react";
import { contactItems } from "@/data/contact";
import Image from "next/image";

export default function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <div className="container position-relative">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">Contact Us</h2>
          <h3 className="section-title mb-50 mb-sm-30">
            Ready to Help You Save!
          </h3>
          {/* Contact Information */}
          <div className="row">
            <div className="col-md-11">
              {contactItems.map((item, index) => (
                <div
                  className={`contact-item ${
                    index !== 3 ? "mb-40 mb-sm-20" : ""
                  }`}
                  key={index}
                >
                  <div className="ci-icon">
                    <i className={item.iconClass} />
                  </div>
                  <h4 className="ci-title visually-hidden">{item.title}</h4>
                  <div className="ci-text">{item.text}</div>
                  <div>
                    <a
                      href={item.link.url}
                      target={item.link.target}
                      rel={item.link.rel}
                      className="link-hover-anim"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        {item.link.text}{" "}
                        <i
                          className="mi-arrow-right size-18"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        {item.link.text}{" "}
                        <i
                          className="mi-arrow-right size-18"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* End Contact Information */}
        </div>
        {/* End Left Column */}

        {/* Right Column */}
        <div className="col-lg-8 col-xl-7 offset-xl-1">
          <div className="position-relative">
            {/* Decorative Image */}
            <div className="decoration-11 d-none d-xl-block">
              <div className="wow fadeInUp">
                <Image
                  src="/assets/images/demo-fancy/contact-section-image.png"
                  width={225}
                  height={250}
                  alt=""
                />
              </div>
            </div>
            {/* End Decorative Image */}

            <div className="box-shadow round p-4 p-sm-5">
              <h4 className="h3 mb-30">Get in Touch</h4>

              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="form contact-form"
                id="contact_form"
              >
                <div className="row">
                  {/* Name */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-lg round form-control"
                        placeholder="Enter your name"
                        pattern=".{3,100}"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-lg round form-control"
                        placeholder="Enter your email"
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="input-lg round form-control"
                    placeholder="Enter your phone number"
                    pattern=".{7,15}"
                    required
                    aria-required="true"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="input-lg round form-control"
                    style={{ height: 130 }}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    {/* Send Button */}
                    <div className="pt-3">
                      <button
                        className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                        id="submit_btn"
                        aria-controls="result"
                        type="submit"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-7 d-flex align-items-center">
                    {/* Inform Tip */}
                    <div className="form-tip w-100 pt-3 mt-sm-20">
                      <i className="icon-info size-16" />
                      All the fields are required. By sending the form you agree
                      to the <a href="#">Terms &amp; Conditions</a> and{" "}
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
              {/* End Contact Form */}
            </div>
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </div>
  );
}
