import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ticon1 from "../../../images/icon/flower-icon-blue.svg";
import tImg1 from "../../../images/testimonial/solar.jpg";
import tImg2 from "../../../images/testimonial/sunLogo.png";
import hdl_web_1 from "../../../images/testimonial/hdl_solutions_web.png";
import hdl_web_2 from "../../../images/testimonial/hdl_web_2.png";

import coolmeal_logo from "../../../images/testimonial/coolmeal.png";
import coolmeal_tech from "../../../images/testimonial/coolmeal_tech.png";

// Sample data array
const projects = [
  {
    title: "RubixGen developed the Sun Pledge Holdings website",
    contentOne: `We began by understanding Sun Pledge Holdings' vision and objectives. Our team crafted a user-centric design that reflects the company's commitment to sustainable energy, ensuring a seamless user experience across all devices.`,
    stats: [
      {
        number: "459+ Projects",
        text: "Solar Initiative Project aims to transform communities by providing accessible and affordable solar energy solutions.",
      },
      {
        number: "In 1+ Years",
        text: "Sun pledge solar is in operation for 1+ years and completed many projects to date.",
      },
    ],
    contentThree:
      "Utilizing modern web technologies and agile methodologies, we streamlined the development process. This approach allowed us to build a robust and scalable website without unnecessary delays.",
    authorImg: tImg1,
    avatarImg: tImg2,
    link: "https://sunpledgeholdings.com/",
  },
  {
    title: "RubixGen developed the HDL Technologies Management System",
    contentOne: `We collaborated with HDL Technologies to build a specialized, multi-platform shop management system tailored for laptop repair businesses in Sri Lanka. Our goal was to streamline repair workflows, enhance customer experience, and enable better inventory and order management across web, desktop, and mobile platforms.`,
    stats: [
      {
        number: "3 Platforms",
        text: "Web, desktop, and mobile applications ensure complete accessibility and operational flexibility for shop owners and workers.",
      },
      {
        number: "Real-Time Tracking",
        text: "Customers and shop managers can track repair progress, updates, and histories using a secure, cloud-based system with QR code support.",
      },
    ],
    contentThree:
      "Using modern technologies like Node.js, React, React Native, Electron.js, MongoDB, and Firebase, our team built a scalable and secure solution with role-based access, real-time notifications, and advanced device tracking. The system supports both internal and external shop operations, reduces manual paperwork, and improves overall business efficiency.",
    authorImg: hdl_web_1, // Replace with appropriate team image or HDL image
    avatarImg: hdl_web_2, // Replace with HDL Technologies logo or related image
    link: "https://hdlcomputersolutions.netlify.app/", // Replace with actual project URL if available
  },
  {
    title:
      "RubixGen developed the Cool Meal – Sri Lankan Meal Plan Recommendation App",
    contentOne: `Cool Meal is a mobile application designed specifically for Sri Lankan users to simplify their weekly meal planning. Our team developed a system that combines user preferences, health data, and budget to generate personalized meal plans with nutritional insights and ingredient lists.`,
    stats: [
      {
        number: "100% Personalized",
        text: "Each meal plan is tailored based on user data such as age, health conditions, allergies, dietary preferences, location, and budget.",
      },
      {
        number: "AI-Driven Planning",
        text: "Leveraging Deep Learning, NLP, and content-based filtering, the app generates smart weekly meal plans with real-time chatbot-based customization.",
      },
    ],
    contentThree:
      "Built using modern technologies including Flutter for cross-platform mobile development, FastAPI and Python for backend services, LangChain for intelligent dialogue, and Scikit-learn/Pandas for data processing and recommendation logic. The system is scalable, secure, and hosted on AWS. This project exemplifies how AI can promote healthier, budget-conscious living in a localized context.",
    authorImg: coolmeal_logo, // Replace with suitable image representing your team or app
    avatarImg: coolmeal_tech, // Replace with Cool Meal logo or relevant image
    link: "https://coolmeal.lk/", // Replace with actual project URL if available
  },
];

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
          <span className="sub_title">
            <span>
              <img src={ticon1} alt="" />
            </span>
            Our Clients
          </span>
          <h2 className="title">Who we've helped 🌟</h2>
        </div>
        <div className="da-testimonial-wrap pos-rel">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            ref={swiperRef}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="da-testimonial">
                <div className="row align-items-center mt-none-30">
                  <div className="col-lg-6 col-md-12 mt-30">
                    <div className="da-tes-left">
                      <h2 className="xb-item--title">{project.title}</h2>
                      <p className="xb-item--content content--one">
                        {project.contentOne}
                      </p>
                      <div className="xb-item--holder ul_li align-items-start">
                        {project.stats.map((stat, idx) => (
                          <div className="xb-item--meta" key={idx}>
                            <h3 className="xb-item--number">{stat.number}</h3>
                            <span className="xb-item--text">{stat.text}</span>
                          </div>
                        ))}
                      </div>
                      <p className="xb-item--content content--three">
                        {project.contentThree}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mt-30">
                    <div className="da-tes-right">
                      <div className="xb-item--author">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <img src={project.authorImg} alt="project" />
                        </a>
                      </div>
                      <div className="xb-item--avatar">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <img src={project.avatarImg} alt="logo" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev hidden md:block" ref={prevRef}>
            {/* <i className="fal fa-long-arrow-left"></i> */}
          </div>
          <div className="swiper-button-next hidden md:block" ref={nextRef}>
            {/* <i className="fal fa-long-arrow-right"></i> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
