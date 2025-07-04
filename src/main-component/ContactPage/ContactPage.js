import React, { Fragment, useEffect, useState } from "react";
import ContactSection from "../../components/ContactSection";
import Header3 from "../../components/header3/Header3";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/data-solutions-components/Footer/Footer";
import Bg from "../../images/bg/page_bg01.jpg";
import CtaSection from "../../components/CtaSection/CtaSection";
import icon from "../../images/icon/music-icon.svg";
import bImg1 from "../../images/hero/contact-img.png";
import bImg2 from "../../images/shape/brd_shape.png";

const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize); // listen to resize

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        <Header3 />
        <section
          className="page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div className="container" style={{ paddingTop: "150px" }}>
            <div className="page-title-wrap sd-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-lg-9 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <img src={icon} alt="" /> Contact us
                    </span>
                    <h2 className="title">
                      Build Smart. Scale Fast. <br />
                      Evolve Always with <br />
                      RubixGen Solutions
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 mt-30">
                  <div className="sd-right-img pos-rel">
                    {!isMobile && <img src={bImg1} alt="" />}
                    <div className="sd-arrow-shape style-3">
                      <img className="xbzoominzoomup" src={bImg2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
        <CtaSection />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ContactPage;
