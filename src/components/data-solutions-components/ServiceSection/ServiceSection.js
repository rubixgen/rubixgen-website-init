import React, { useState } from 'react';
import Services from '../../../api/service'
import { Link } from "react-router-dom";
import sIcon from '../../../images/icon/flower-icon-blue.svg'
import Bg from '../../../images/bg/da-service_bg.jpg'

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  const [activeIndex, setActiveIndex] = useState(2);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };



  return (
    <section className="service pb-150 bg_img" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="da-sec-titlte text-center mb-30">
              <span className="sub_title"><span><img src={sIcon} alt="" /></span>Our Services</span>
              <h2 className="title">Bringing your ideas to life 🪄</h2>
              <p className="content">Modern, scalable, and high-performing digital products.</p>
            </div>
          </div>
        </div>
        <div className="da-service-wrapper">
          {Services.slice(10, 14).map((service, index) => (
            <div
              key={index}
              className={`da-service-item xb-mouseenter ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="xb-item--holder">
                <div className="xb-item--icon"><img src={service.sIcon} alt="" /></div>
                <h3 className="xb-item--title">{service.title}</h3>
                <span className="xb-item--arrow"><i className="fal fa-long-arrow-right"></i></span>
                <p className="xb-item--content">{service.description}</p>
              </div>
              <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-overlay"></Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ServiceSection;