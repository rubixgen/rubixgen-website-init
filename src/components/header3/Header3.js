import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import icon2 from '../../images/icon/m_01.svg'
import icon3 from '../../images/icon/m_02.svg'
import icon4 from '../../images/icon/m_03.svg'
import icon5 from '../../images/icon/m_04.svg'
import icon6 from '../../images/icon/m_05.svg'
import icon7 from '../../images/icon/m_06.svg'
import icon8 from '../../images/icon/m_07.svg'
import icon9 from '../../images/icon/m_08.svg'
import icon10 from '../../images/icon/m_09.svg'
import icon11 from '../../images/icon/m_10.svg'
import icon12 from '../../images/icon/m_11.svg'
import logo from '../../images/logo/ruby-white.png'
import logo2 from '../../images/logo/ruby-black.png'
import clogo1 from '../../images/logo/client-logo.svg'
import clogo2 from '../../images/logo/client-logo2.svg'
import avatar from '../../images/bg/avatar.png'
import quote from '../../images/icon/quote.png'
import mImg from '../../images/casestudy/mm_img.png'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header3 = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (

        <div id="xb-header-area" className="header-area header-style-two header-style-six header-transparent">
            <div className={`xb-header stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="header__wrap ul_li_between">
                        <div className="header-logo">
                            <Link onClick={ClickHandler} to="/">
                                <img src={logo} alt="" />
                                <img src={logo2} alt="" />
                            </Link>
                        </div>
                        <div className="header-right ul_li">
                            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                                <nav className="main-menu collapse navbar-collapse">
                                    <ul>
                                        <li className="menu-item">
                                            <Link onClick={ClickHandler} to="#"><span>Home</span></Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link onClick={ClickHandler} to="/"><span>company</span></Link>
                                        </li>
                                        <li className="menu-item-has-children megamenu">
                                            <Link onClick={ClickHandler} to="/service"><span>Services</span></Link>
                                            <ul className="submenu">
                                                <li>
                                                    <div className="mega_menu_wrapper">
                                                        <div className="container">
                                                            <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
                                                                <div className="row justify-content-lg-between">
                                                                    <div className="col-xl-8">
                                                                        <div className="megamenu_widget_inner">
                                                                            <div className="row">
                                                                                <div className="col-xl-6">
                                                                                    <div className="megamenu_widget">
                                                                                        <ul
                                                                                            className="icon_list unordered_list_block">
                                                                                            <li>
                                                                                                <Link onClick={ClickHandler}
                                                                                                    to="/service-single/Niche-research">
                                                                                                    <span
                                                                                                        className="icon_list_text">International
                                                                                                        SEO</span>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link onClick={ClickHandler}
                                                                                                    to="/service-single/Niche-research">
                                                                                                    <span
                                                                                                        className="icon_list_text">Niche
                                                                                                        research</span>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link onClick={ClickHandler}
                                                                                                    to="/service-single/Niche-research">
                                                                                                    <span
                                                                                                        className="icon_list_text">Link
                                                                                                        building </span>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link onClick={ClickHandler}
                                                                                                    to="/service-single/Niche-research">
                                                                                                    <span
                                                                                                        className="icon_list_text">Enterprise
                                                                                                        SEO</span>
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xl-6">
                                                                                    <div className="megamenu_widget">
                                                                                        <ul
                                                                                            className="icon_list unordered_list_block">
                                                                                            <li>
                                                                                                <Link onClick={ClickHandler}
                                                                                                    to="/service-single/Niche-research">
                                                                                                    <span
                                                                                                        className="icon_list_text">Penalty
                                                                                                        recovery</span>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link onClick={ClickHandler}
                                                                                                    to="/service-single/Niche-research">
                                                                                                    <span
                                                                                                        className="icon_list_text">Content
                                                                                                        optimization</span>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link onClick={ClickHandler}
                                                                                                    to="/service-single/Niche-research">
                                                                                                    <span
                                                                                                        className="icon_list_text">Technical
                                                                                                        SEO</span>
                                                                                                </Link>
                                                                                            </li>
                                                                                            <li>
                                                                                                <Link onClick={ClickHandler}
                                                                                                    to="/service-single/Niche-research">
                                                                                                    <span
                                                                                                        className="icon_list_text">Competitor
                                                                                                        analysis</span>
                                                                                                </Link>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="social_area">
                                                                            <div className="social_inner ul_li">
                                                                                <h5>Follow Us:</h5>
                                                                                <ul
                                                                                    className="social_icons_block unordered_list">
                                                                                    <li>
                                                                                        <Link onClick={ClickHandler} to="/">
                                                                                            <i
                                                                                                className="fab fa-facebook-f"></i>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={ClickHandler} to="/">
                                                                                            <i
                                                                                                className="fab fa-linkedin-in"></i>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={ClickHandler} to="/">
                                                                                            <svg width="18" height="18"
                                                                                                viewBox="0 0 18 18"
                                                                                                fill="none"
                                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                                <path
                                                                                                    d="M10.6774 7.62177L17.2342 0H15.6805L9.98719 6.61788L5.43998 0H0.195312L7.07159 10.0074L0.195312 18H1.74916L7.76141 11.0113L12.5636 18H17.8083L10.677 7.62177H10.6774ZM8.54921 10.0956L7.8525 9.09906L2.30903 1.16971H4.69564L9.16929 7.56895L9.866 8.56546L15.6812 16.8835H13.2946L8.54921 10.096V10.0956Z"
                                                                                                    fill="#0C111D" />
                                                                                            </svg>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={ClickHandler} to="/">
                                                                                            <i className="fab fa-dribbble"></i>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <p className="career_link m-0">Looking for new
                                                                                career? <Link onClick={ClickHandler} to="/career">We’re
                                                                                    Hiring</Link></p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-3">
                                                                        <div className="megamenu_case">
                                                                            <h3>Software</h3>
                                                                            <h4>Madical SEO success..</h4>
                                                                            <img src={mImg} alt="" />
                                                                            <Link onClick={ClickHandler} className="megamenu_btn" to="/casestudy">
                                                                                <span className="btn_label">Read
                                                                                    casestudy</span>
                                                                                <span className="btn_icon">
                                                                                    <svg width="13" height="13"
                                                                                        viewBox="0 0 13 13" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M13 1C13 0.447715 12.5523 2.00008e-07 12 -5.28728e-08L3 7.47917e-07C2.44771 4.10743e-07 2 0.447716 2 1C2 1.55228 2.44772 2 3 2L11 2L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292894L0.292893 11.2929L1.70711 12.7071Z"
                                                                                            fill="white" />
                                                                                    </svg>
                                                                                </span>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/casestudy"><span>Casestudy</span></Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/casestudy"><span>Casestudy</span></Link></li>
                                                <li><Link onClick={ClickHandler} to="/casestudy-details/Marketing"><span>Casestudy Details</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/blog"><span>Blog</span></Link>
                                            <ul className="submenu">
                                                <li><Link onClick={ClickHandler} to="/blog"><span>Blog</span></Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-single/AI-in-Neuroimaging-IXICOs-Cloud-Transformation"><span>Blog Details</span></Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/contact"><span>Contact</span></Link></li>
                                    </ul>
                                </nav>
                                <div className="xb-header-wrap">
                                    <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                                        <div className="xb-header-menu-scroll lenis lenis-smooth">
                                            <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                                            <div className="xb-logo-mobile xb-hide-xl">
                                                <Link onClick={ClickHandler} to="/" rel="home"><img src={logo2}
                                                    alt="" /></Link>
                                            </div>
                                            <div className="xb-header-mobile-search xb-hide-xl">
                                                <form role="search" onSubmit={SubmitHandler}>
                                                    <input type="text" placeholder="Search..." name="s"
                                                        className="search-field" />
                                                    <button className="search-submit" type="submit"><i
                                                        className="far fa-search"></i></button>
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
                                <button className="xb-nav-mobile" onClick={() => setMobailState(!mobailActive)}>
                                    <i className="far fa-bars"></i>
                                </button>
                            </div>
                            <div className="header-contact d-none d-md-block">
                                <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--data thm-btn--header">Get Stated
                                    <span><i className="fal fa-plus"></i></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header3;