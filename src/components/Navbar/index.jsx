import React, { useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import { BiHomeAlt2, BiEnvelopeOpen } from 'react-icons/bi';
import { RiGalleryLine } from 'react-icons/ri';
import { TiArrowSortedUp } from "react-icons/ti";
import style from './index.module.css';
import Salutation from '../../pages/Salutation';
import Couple from '../../pages/Couple';
import Schedule from '../../pages/Schedule';
import Gallery from '../../pages/Gallery';
import Gift from '../../pages/Gift';
import Closing from '../../pages/Closing';


const Navbar = ({setActiveIndex, activeIndex}) => {
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
        <nav className={`navbar bg-light d-flex flex-row ${style.z10} position-absolute bottom-0 ${style.wNavbar}`}>
            <button className="bg-transparent border-0 position-absolute text-white start-50 bottom-100 translate-middle-x bg-black">
				<TiArrowSortedUp className={`fs-2 text-black`} onClick={ () => hideSideBar() }/>
			</button>
            <ul className={`${isSideBarHided ? "" : "d-none"} navbar-nav ${style.navbar} flex-row align-items-center gap-3 px-3  d-flex text-white w-100 overflow-scroll list-group`}>
                {[
                    { icon: <BiHomeAlt2 className="fs-2 m-0 p-0" />, label: 'Home' },
                    { icon: <BsCalendar className="fs-2 m-0 p-0" />, label: 'Calendar' },
                    { icon: <RiGalleryLine className="fs-2 m-0 p-0" />, label: 'Gallery' },
                    { icon: <BiEnvelopeOpen className="fs-2 m-0 p-0" />, label: 'Messages' },
                    { icon: <BiHomeAlt2 className="fs-2 m-0 p-0" />, label: 'Home' },
                    { icon: <BsCalendar className="fs-2 m-0 p-0" />, label: 'Calendar' },
                ].map((item, index) => (
                    <li
                        key={index}
                        className={`nav-item px-2 d-flex py-2 justify-content-center flex-column rounded-3 ${
                            activeIndex === index ? style.active : ''
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        <button className="nav-link p-0">{item.icon}</button>
                        <p className="fs-5 m-0">{item.label}</p>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
