import React, { Fragment } from 'react';
import Header3 from '../../components/header3/Header3';
import Hero3 from '../../components/hero3/hero3';
import About from '../../components/data-solutions-components/about/about';
import ServiceSection from '../../components/data-solutions-components/ServiceSection/ServiceSection';
import Testimonial from '../../components/data-solutions-components/Testimonial/Testimonial';
import QuoteSetion from '../../components/data-solutions-components/QuoteSetion/QuoteSetion';
import DataSolutionFaqSection from '../../components/data-solutions-components/DataSolutionFaqSection/DataSolutionFaqSection';
import Footer from '../../components/data-solutions-components/Footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage3 = () => {

    return (
        <Fragment>
            <div className='data_analytics'>
                <main className="page_content">
                    <Header3 />
                    <Hero3 />
                    <About />
                    <ServiceSection />
                    <Testimonial />
                    <QuoteSetion />
                    <DataSolutionFaqSection />
                    <Scrollbar />
                </main>
                <Footer/>
            </div>
        </Fragment>
    )
};
export default HomePage3;