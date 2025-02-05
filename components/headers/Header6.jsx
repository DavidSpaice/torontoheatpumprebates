"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

import Image from "next/image";
import LanguageSelect from "./components/LanguageSelect";
import Link from "next/link";
export default function Header6({ links }) {
  return (
    <div className="main-nav-sub container">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap position-static local-scroll">
        <a href="#top" className="logo">
          <span className="row justify-content-center">
            <h4 className="m-0">Heat Pump</h4>
            <h6 className="m-0">Rebates Toronto</h6>
          </span>
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={links} />
          <li className="desktop-nav-display">
            <div className="vr mt-2" />
          </li>
          {/* Languages */}
          {/* <LanguageSelect /> */}
          {/* End Languages */}
          <li>
            {links[0].href.includes("/") ? (
              <Link
                href={links[links.length - 1].href}
                className="opacity-1 no-hover"
              >
                <span
                  className="btn btn-mod btn-w btn-border-c btn-border-white-light btn-small btn-round"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">Get in touch</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      Get in touch
                    </span>
                  </span>
                </span>
              </Link>
            ) : (
              <a href="#contact" className="opacity-1 no-hover">
                <span
                  className="btn btn-mod btn-w btn-border-c btn-border-white-light btn-small btn-round"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">Get in touch</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      Get in touch
                    </span>
                  </span>
                </span>
              </a>
            )}
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
