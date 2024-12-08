import React, { useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import { BiHomeAlt2, BiEnvelopeOpen } from 'react-icons/bi';
import { RiGalleryLine } from 'react-icons/ri';
import { TiArrowSortedUp } from "react-icons/ti";
import { RiHeartsFill } from "react-icons/ri";
import { TbMessageHeart } from "react-icons/tb";
import { TiGift } from "react-icons/ti";
import { PiHandsPrayingDuotone } from "react-icons/pi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RiHeartsLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";
import style from './index.module.css';
import Salutation from '../../pages/Salutation';
import Couple from '../../pages/Couple';
import Schedule from '../../pages/Schedule';
import Gallery from '../../pages/Gallery';
import Gift from '../../pages/Gift';
import Closing from '../../pages/Closing';


const Navbar = ({ setActiveIndex, activeIndex }) => {
    // const pagesArray = [
    //     <Salutation />,
    //     <Couple />,
    //     <Schedule />,
    //     <Gallery />,
    //     <Gift />,
    //     <Closing />
    // ]
    const [isSideBarHided,setIsSideBarHided] =useState(false);
	const hideSideBar = () => { setIsSideBarHided(e => !e) };
    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <nav className={`navbar rounded-4 ${ style.maxWidth } ${ isSideBarHided ? "" : `${ style.p0 }` } position-absolute ${ style.navbarBg } bg-white d-flex flex-row bottom-0 translate-middle-x start-50 mb-2 ${ style.wNavbar }`} style={{ zIndex: 100 }}>
            <button className={`${style.navHover} bg-transparent border-0 position-absolute start-50 bottom-100 translate-middle-x ${style.toggleNavbarColor}`}>
				<TiArrowSortedUp className={`fs-2 ${style.toggleNavbarTextColor}`} onClick={ () => hideSideBar() }/>
			</button>
            
            <ul className={`${isSideBarHided ? "" : `d-none`} navbar-nav ${ style.navbar } flex-row align-items-center  gap-2   d-flex text-white w-100 overflow-scroll list-group`}>
                {[
                    { icon: <BiHomeAlt2 className="m-0 p-2" size={45}/> },
                    { icon: <RiHeartsLine className="m-0 p-2" size={45}/> },
                    { icon: <RiCalendarScheduleLine className="m-0 p-2" size={45}/> }, 
                    { icon: <TbMessageHeart className="m-0 p-2" size={45}/> },
                    { icon: <TiGift className="m-0 p-2" size={45}/> },
                    { icon: <PiHandsPrayingDuotone className="m-0 p-2"  size={45}/> },
                    { icon: <FaRegCopyright className="m-0 p-2"  size={45}/> }                    
                ].map((item, index) => (
                    <li
                        key={ index }
                        className={`nav-item px-2 d-flex py-2 rounded-3`}
                        onClick={() => handleTabClick(index)}
                    >
                        <button className={`nav-link p-0  ${
                            activeIndex === index ? style.active : ''
                        } ${style.navHover}`}>{item.icon}</button>
                        {/* <p className="fs-5 m-0">{item.label}</p> */}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
