import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ticon1 from "../../../images/icon/flower-icon-blue.svg";
import tImg1 from "../../../images/testimonial/solar.jpg";
import tImg2 from "../../../images/testimonial/sunLogo.png";



const Testimonial = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className="testimonial pt-150 pb-140" id="portfolio">
            <div className="container">
                <div className="da-sec-titlte text-center mb-60">
                    <span className="sub_title"><span><img src={ticon1} alt="" /></span>Case studies</span>
                    <h2 className="title">Who we've helped 🌟</h2>
                </div>
                <div className="da-testimonial-wrap pos-rel">
                    <div className="da-testimonial-slider swiper-container">
                        <div className="swiper-wrapper">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                speed={1800}
                                parallax={true}
                                ref={swiperRef}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                <SwiperSlide className="da-testimonial">
                                    <div className="row align-items-center mt-none-30">
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-left">
                                                <h2 className="xb-item--title">RubixGen developed the Sun Pledge Holdings website</h2>
                                                <p className="xb-item--content content--one">We began by understanding Sun Pledge Holdings' vision and objectives. Our team crafted a user-centric design that reflects the company's commitment to sustainable energy, ensuring a seamless user experience across all devices.
                                                    Sub Pledge Holdings
                                                </p>
                                                <div className="xb-item--holder ul_li align-items-start">
                                                    <div className="xb-item--meta">
                                                        <h3 className="xb-item--number">459+ Projects </h3>
                                                        <span className="xb-item--text">Solar Initiative Project aims to transform communities by providing accessible and affordable solar energy solutions.</span>
                                                    </div>
                                                    <div className="xb-item--meta">
                                                        <h3 className="xb-item--number">In 1+ Years</h3>
                                                        <span className="xb-item--text">Sun pledge solar is in operation for 1+ years and completed many projects to date.</span>
                                                    </div>
                                                </div>
                                                <p className="xb-item--content content--three">Utilizing modern web technologies and agile methodologies, we streamlined the development process. This approach allowed us to build a robust and scalable website without unnecessary delays.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-right">
                                                <div className="xb-item--author">
                                                    <a href="https://sunpledgeholdings.com/" target="_blank" rel="noreferrer"> <img src={tImg1} alt="" /></a>
                                                </div>
                                                <div className="xb-item--avatar">
                                                <a href="https://sunpledgeholdings.com/" target="_blank" rel="noreferrer"><img src={tImg2} alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="da-testimonial">
                                    <div className="row align-items-center mt-none-30">
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-left">
                                                <h2 className="xb-item--title">RubixGen developed the Sun Pledge Holdings website</h2>
                                                <p className="xb-item--content content--one">We began by understanding Sun Pledge Holdings' vision and objectives. Our team crafted a user-centric design that reflects the company's commitment to sustainable energy, ensuring a seamless user experience across all devices.
                                                    Sub Pledge Holdings
                                                </p>
                                                <div className="xb-item--holder ul_li align-items-start">
                                                    <div className="xb-item--meta">
                                                        <h3 className="xb-item--number">459+ Projects </h3>
                                                        <span className="xb-item--text">Solar Initiative Project aims to transform communities by providing accessible and affordable solar energy solutions.</span>
                                                    </div>
                                                    <div className="xb-item--meta">
                                                        <h3 className="xb-item--number">In 1+ Years</h3>
                                                        <span className="xb-item--text">Sun pledge solar is in operation for 1+ years and completed many projects to date.</span>
                                                    </div>
                                                </div>
                                                <p className="xb-item--content content--three">Utilizing modern web technologies and agile methodologies, we streamlined the development process. This approach allowed us to build a robust and scalable website without unnecessary delays.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-right">
                                                <div className="xb-item--author">
                                                    <a href="https://sunpledgeholdings.com/" target="_blank" rel="noreferrer"> <img src={tImg1} alt="" /></a>
                                                </div>
                                                <div className="xb-item--avatar">
                                                <a href="https://sunpledgeholdings.com/" target="_blank" rel="noreferrer"><img src={tImg2} alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="da-swiper-btn swiper-button-prev" ref={prevRef}><i className="fal fa-long-arrow-left"></i></div>
                    <div className="da-swiper-btn swiper-button-next" ref={nextRef}><i className="fal fa-long-arrow-right"></i></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
