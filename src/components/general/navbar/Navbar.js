import React, { useState } from 'react';
import "./Navbar.scss";
import logo from "../../../assets/logo.png";
import Propic from "../../../assets/Propic.jpg";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 20)
    })

    return (
        <div className={scroll ? "navbar nav-scroll-color" : "navbar"}>
            <div className='left-navbar'>
                <div><img src={logo} alt="logo" className='main-page-logo' /></div>
                <div>Home</div>
                <div>Movies</div>
                <div>TV Shows</div>
                <div>My List</div>
            </div>
            <div className='right-navbar'>
                <div><FiSearch size={23} className='icon' /></div>
                <div><IoMdNotificationsOutline size={23} className='icon' /></div>
                <div className='propic'>
                    <img src={Propic} alt='...' />
                    <div><MdArrowDropDown size={23} className='icon' /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
