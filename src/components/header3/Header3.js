import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo/ruby-white.png";
import logo2 from "../../images/logo/ruby-black.png";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./header3_styles.css";
const Header3 = (props) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Enhanced navigation function to handle different page scenarios
  const handleNavigation = (sectionId, e) => {
    e.preventDefault();

    if (isContactPage) {
      // If on contact page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="xb-header-area"
      className={`header-area header-style-two header-style-six header-transparent ${isContactPage ? "contact-page-header" : ""}`}
    >
      <div
        className={`xb-header stricky  ${isSticky ? "stricked-menu stricky-fixed" : ""}`}
      >
        <div className="container">
          <div className="header__wrap ul_li_between">
            <div className="header-logo">
              <Link onClick={ClickHandler} to="/">
                {isContactPage ? (
                  <>
                    <img
                      src={logo2}
                      alt=""
                      style={{ height: "60px", width: "auto" }}
                    />
                    <img
                      src={logo2}
                      alt=""
                      style={{ height: "60px", width: "auto" }}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={logo}
                      alt=""
                      style={{ height: "60px", width: "auto" }}
                    />
                    <img
                      src={logo2}
                      alt=""
                      style={{ height: "60px", width: "auto" }}
                    />
                  </>
                )}
              </Link>
            </div>

            <div className="header-right ul_li">
              <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                <nav className="main-menu collapse navbar-collapse">
                  <ul>
                    <li className="menu-item">
                      <Link onClick={ClickHandler} to="/">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <a
                        href="#company"
                        onClick={(e) => handleNavigation("company", e)}
                      >
                        <span>Company</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="#services"
                        onClick={(e) => handleNavigation("services", e)}
                      >
                        <span>Services</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="#portfolio"
                        onClick={(e) => handleNavigation("portfolio", e)}
                      >
                        <span>Portfolio</span>
                      </a>
                    </li>
                    {!isContactPage && (
                      <li className="menu-item">
                        <Link onClick={ClickHandler} to="/contact">
                          <span>Contact</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
                <div className="xb-header-wrap">
                  <div
                    className={`xb-header-menu ${mobailActive ? "active" : ""}`}
                  >
                    <div className="xb-header-menu-scroll lenis lenis-smooth">
                      <div
                        className="xb-menu-close xb-hide-xl xb-close"
                        onClick={() => setMobailState(!mobailActive)}
                      ></div>
                      <div className="xb-logo-mobile xb-hide-xl">
                        <Link onClick={ClickHandler} to="/" rel="home">
                          <img src={logo2} alt="" />
                        </Link>
                      </div>
                      <div className="xb-header-mobile-search xb-hide-xl">
                        <form role="search" onSubmit={SubmitHandler}>
                          <input
                            type="text"
                            placeholder="Search..."
                            name="s"
                            className="search-field"
                          />
                          <button className="search-submit" type="submit">
                            <i className="far fa-search"></i>
                          </button>
                        </form>
                      </div>
                      <nav className="xb-header-nav">
                        <MobileMenu />
                      </nav>
                    </div>
                  </div>
                  <div className="xb-header-menu-backdrop"></div>
                </div>
              </div>
              <div className="header-bar-mobile side-menu d-xl-none">
                <button
                  className="xb-nav-mobile"
                  onClick={() => setMobailState(!mobailActive)}
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
              {!isContactPage && (
                <div className="header-contact d-none d-md-block">
                  <Link
                    onClick={ClickHandler}
                    to="/contact"
                    className="thm-btn thm-btn--data thm-btn--header"
                  >
                    Get Started
                    <span>
                      <i className="fal fa-plus"></i>
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header3;
