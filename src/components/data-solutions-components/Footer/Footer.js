import React from 'react';
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Bg from '../../../images/bg/da-footer.jpg'
import logo from '../../../images/logo/ruby-black.png'

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const Footer = (props) => {
  return (
    <footer className="footer footer-style-six pb-80 bg_img pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="da-footer-title">
        <h2 className="title marquee-left">
          <Link onClick={ClickHandler} to="/">
            <div className="marquee">
              <div className="marquee-content" style={{marginTop: "300px"}}>
                <Marquee speed={50} gradient={false}>
                  Let's Build your product. <span>Book a free consultation. </span>
                  Let's Build your product. <span>Book a free consultation. </span>
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
                <Link onClick={ClickHandler} to="/home-3"><img src={logo} alt="" /></Link>
              </div>
              <span className="xb-item--content mt-20">Intelligent Digital Solutions</span>
            </div>
          </div>
          <div className="footer-copyright mt-40 ul_li_between">
            <p className="copyright">Copyright© 2025 <Link onClick={ClickHandler} to="/home-3">RubixGen PVT Ltd</Link>. All rights reserved.</p>
            <ul className="footer-links ul_li">
              <li><Link onClick={ClickHandler} to="/terms-conditions">Terms of Service</Link></li>
              <li><Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;