import React, { useEffect } from "react";
import shape from "../../../images/shape/about-glassisom.png";
import "./about.css"; // Import the custom CSS for animation

const About = () => {
  return (
    <section className="about" id="company">
      <div className="container">
        <div className="row">
          <div className="mt-2 col-lg-6">
            <div className="da-about-left">
              <h2 className="title">
                Intelligent software <br /> solutions tailored to <br />
                meet your business needs
              </h2>
              <div className="img">
                <img src={shape} alt="decorative shape" />
              </div>
            </div>
          </div>
          <div className="my-2  lg:mx-4 col-lg-6">
            <div className="da-about-right">
              <p className="content">
                We build responsive, user-friendly websites that make a lasting
                impression. From simple informational sites to complex
                e-commerce platforms, our websites are designed to engage
                visitors and convert them into customers.
              </p>
              <p className="content">
                Our mobile app development services help businesses connect with
                customers on the go.
              </p>
              <p className="content mb-4">
                We develop custom web applications that solve complex business
                problems. Our web apps are built with scalability and
                performance in mind, ensuring they can grow with your business
                and handle increasing demands.🏆
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
