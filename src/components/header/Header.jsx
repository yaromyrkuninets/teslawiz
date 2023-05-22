import { useRef } from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll';
import { motion } from 'framer-motion';

import { FaBars } from "react-icons/fa";
import {RxCross1} from "react-icons/rx";

import '../../styles/header.scss';

import logo from '../../assets/icons/logo.svg';
import inst from '../../assets/icons/inst.svg';

const Header = () => {

    const [isClicked, setIsClicked] = useState(false);

    const toggleBtn = useRef('');
    const toggleBar = useRef('');
    const dropDownmenu = useRef('');

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <header className='header'>
                <div className="header__navbar">
                    <div className="header__logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className="header__links">
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-20} duration={500} >About Us</Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true} offset={-20} duration={500} >Services</Link>
                        </li>
                        <li>
                            <Link to="team" spy={true} smooth={true} offset={-20} duration={500} >Team</Link>
                        </li>
                        <li>
                            <Link to="testimonials" spy={true} smooth={true} offset={-20} duration={500} >Testimonials</Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={-30} duration={700} >Contact</Link>
                        </li>
                    </ul>
                    <div className="header__contacts">
                        <motion.button whileTap={{scale: 1.1}} className="header__contact">
                            <Link to="contact" spy={true} smooth={true} offset={-30} duration={500} >Contact Us</Link>
                        </motion.button>
                        <motion.a whileTap={{scale: 1.3}} href="https://www.instagram.com/first_service_1/" className="header__inst">
                            <img src={inst} alt="instagram" className='header__inst-img' />
                        </motion.a>
                    </div>
                

                    <div ref={toggleBtn} onClick={handleClick} className="header__toggle-btn">
                        {!isClicked ? <FaBars ref={toggleBar} className='header__bar'/> : <RxCross1 className='header__bar'/>}
                    </div>
                    <div ref={dropDownmenu} className={`header__dropdown-menu ${isClicked ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-20} duration={500} >About Us</Link>
                            </li>
                            <li>
                                <Link to="services" spy={true} smooth={true} offset={-20} duration={500} >Services</Link>
                            </li>
                            <li>
                                <Link to="team" spy={true} smooth={true} offset={-20} duration={500} >Team</Link>
                            </li>
                            <li>
                                <Link to="testimonials" spy={true} smooth={true} offset={-20} duration={500} >Testimonials</Link>
                            </li>
                            <li>
                                <Link to="contact" spy={true} smooth={true} offset={-30} duration={500} >Contact</Link>
                            </li>
                            <li>
                                <button  className="header__contact">
                                    <Link to="contact" spy={true} smooth={true} offset={-30} duration={500} >Contact Us</Link>
                                </button>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/first_service_1/" className="header__inst">
                                    <img src={inst} alt="instagram" className='header__inst-img' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;