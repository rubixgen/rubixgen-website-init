import React from 'react'
import { Link } from 'react-router-dom'
import qImg1 from '../../../images/icon/quote02.png'

const QuoteSetion = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="quote&cta">
            <div className="container-fluid p-0">
                <div className="quote-wrapper ul_li">
                    <div className="da-quote">
                        <div className="xb-item--inner">
                            <span className="xb-item--quote"><img src={qImg1} alt=""/></span>
                            <p className="xb-item--content">“True innovation in tech is not about complexity, but about simplicity done brilliantly✨”</p>
                            <div className="xb-item--holder ul_li">
                            </div>
                        </div>
                    </div>
                    <div className="da-cta">
                        <div className="xb-item--inner">
                            <h2 className="xb-item--title">Don't know where to start?</h2>
                            <div className="xb-btn mt-50">
                                <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--data">
                                    <div className="xb-item--hidden"><span className="xb-item--hidden-text">Book a Discover Call</span></div>
                                    <div className="xb-item--holder">
                                        <span className="xb-item--text xb-item--text1">Book a consultation</span>
                                        <div className="xb-item--icon"><i className="fal fa-plus"></i></div>
                                        <span className="xb-item--text xb-item--text2">It's free. 😎</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuoteSetion;