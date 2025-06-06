import React from 'react';
import icon1 from '../../../images/icon/da-fea_icon01.svg'
import icon2 from '../../../images/icon/da-fea_icon02.svg'
import icon3 from '../../../images/icon/da-fea_icon03.svg'
import icon4 from '../../../images/icon/da-fea_icon04.svg'

import hicon from '../../../images/icon/flower-icon-blue.svg'

const Features = [
    {
        title: 'Data Driven',
        des: 'We build with insight, ensuring every solution is backed by data',
        icon: icon1,
        col:'col-lg-4 col-md-6 fea-col',
    },
    {
        title: 'Innovation First',
        des: 'We bring fresh ideas and creative thinking to every project',
        icon: icon2,
        col:'col-lg-2 col-md-6 fea-col',
    },
    {
        title: 'Business adoption',
        des: 'Seamless, scalable solutions powered by the cloud make it easy to adopt new technology and drive business growth.',
        icon: icon3,
        col:'col-lg-2 col-md-6 fea-col',
    },
    {
        title: 'Solution design',
        des: 'Simple, effective, and intelligent digital products that solve real-world problems',
        icon: icon4,
        col:'col-lg-4 col-md-6 fea-col',
    },


]


const FeatureSection = (props) => {
    return (
        <section className="feature pt-150 pb-90" style={{ backgroundColor: '#f4f5fc' }}>
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-8">
                        <div className="da-sec-titlte text-center mb-70">
                            <span className="sub_title"><span><img src={hicon} alt=""/></span>Why Us</span>
                            <h2 className="title">RubixGen is Cheaper,</h2><h2 className="title"> Faster & Better✨</h2>
                        </div>
                    </div>
                </div>
                <div className="da-feature-wrap">
                    <div className="row g-0" style={{ display: 'flex' }}>
                        {Features.map((features, fitem) => (
                            <div className={features.col} key={fitem} style={{ display: 'flex' }}>
                                <div className="da-feature-item" style={{ display: 'flex', width: '100%' }}>
                                    <div className="xb-item--holder" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '40px 30px' }}>
                                        <div className="xb-item--icon" style={{ marginBottom: '20px' }}><img src={features.icon} alt="" /></div>
                                        <h3 className="xb-item--title" style={{ marginBottom: '15px', fontSize: '24px', fontWeight: '600' }}>{features.title}</h3>
                                        <p className="xb-item--content" style={{ marginTop: 'auto', lineHeight: '1.6', color: '#666' }}>{features.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;