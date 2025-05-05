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

    // Smooth scroll function for navigation
    const scrollToSection = (sectionId, e) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
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
                                            <a href="#company" onClick={(e) => scrollToSection('company', e)}><span>Company</span></a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#services" onClick={(e) => scrollToSection('services', e)}><span>Services</span></a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#portfolio" onClick={(e) => scrollToSection('portfolio', e)}><span>Portfolio</span></a>
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