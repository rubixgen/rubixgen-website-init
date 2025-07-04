import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Bg from "../../../images/bg/da-footer.jpg";
import logo from "../../../images/logo/ruby-black.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer
      className="footer footer-style-six pb-80 bg_img pos-rel bg_img"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="da-footer-title">
        <h2 className="title marquee-left">
          <Link onClick={ClickHandler} to="/">
            <div className="marquee">
              <div className="marquee-content" style={{ marginTop: "300px" }}>
                <Marquee speed={50} gradient={false}>
                  Let's Build your product.{" "}
                  <span>Book a free consultation. </span>
                  Let's Build your product.{" "}
                  <span>Book a free consultation. </span>
                </Marquee>
              </div>
            </div>
          </Link>
        </h2>
      </div>
      <div className="container">
        <div className="xb-footer">
          <div className="da-footer-inner ul_li_between mt-none-30">
            <div className="xb-item--left mt-10">
              <div className="xb-item--logo mt-20">
                <Link onClick={ClickHandler} to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <span className="xb-item--content mt-20">
                Intelligent Digital Solutions
              </span>
            </div>
          </div>
          <div className="footer-copyright mt-40 ul_li_between">
            <p className="copyright">
              Copyright© 2025 RubixGen PVT Ltd. All rights reserved.
            </p>
            <span className="ms-4 xb-item--content mt-20">
              <div
                className="ms-4 xb-item--content mt-20"
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{ color: "#3b5998", fontSize: "30px" }}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  style={{ color: "#1DA1F2", fontSize: "30px" }}
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ color: "#0077B5", fontSize: "30px" }}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ color: "#E4405F", fontSize: "30px" }}
                >
                  <FaInstagram />
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
