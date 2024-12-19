'use client'
import React, { useState } from "react";
import Image from "next/image";
import "./MyNavbar.css"
import Dropdown from "./Dropdown";

import {
    Navbar,
    Link
} from "@nextui-org/react";

// const MyNavbar = () => {
//     return (
//         <nav>
//             <menu>
//                 <li><Link href="/">Home</Link></li>
//                 <menu className="dropdown">
//                     <li><Link href="/info/about">About us</Link></li>
//                     <li><Link href="/info/business">Working with businesses</Link></li>
//                     <li><Link href="/info/facilities">Facilities</Link></li>
//                 </menu>
//                 <menu>
//                     <li><Link href="/courses/computing">Computing</Link></li>
//                     <li><Link href="/courses/design">Design</Link></li>
//                 </menu>
//                 <li><Link href="/learning-resources">Learning Resources</Link></li>
//             </menu>
//         </nav>
//     )
// }

const MyNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the state
        console.log(menuOpen);
    };
    return (
        <Navbar className="navbar">
            <menu className={menuOpen ? "navbarContent" : "navbarContentInactive"} justify="center">
                <div className="navbarHeader">
                    <Link href="/"><Image src="/images/logo.png" width={64} height={57} alt="Logo"></Image></Link>
                    <button className='burger' onClick={toggleMenu}>&#9776;</button>
                </div>
                <li><Link href="/" className={menuOpen ? "navItem" : "navItemInactive"}>Home</Link></li>
                <li><Link href="/learning-resources" className={menuOpen ? "navItem" : "navItemInactive"}>Learning Resources</Link></li>
                <Dropdown title="Courses" menuOpen={menuOpen}>
                    <menu className={menuOpen ? "navbarDropdown" : "navbarDropdownInactive"}>
                        <li><Link href="/courses/computing" className={menuOpen ? "navItem" : "navItemInactive"}>Computing</Link></li>
                        <li><Link href="/courses/design" className={menuOpen ? "navItem" : "navItemInactive"}>Design</Link></li>
                    </menu>
                </Dropdown>
                <Dropdown title="Information" menuOpen={menuOpen}>
                    <menu className={menuOpen ? "navbarDropdown" : "navbarDropdownInactive"}>
                        <li><Link href="/info/about" className={menuOpen ? "navItem" : "navItemInactive"}>About Us</Link></li>
                        <li><Link href="/info/business" className={menuOpen ? "navItem" : "navItemInactive"}>Working with businesses</Link></li>
                        <li><Link href="/info/facilities" className={menuOpen ? "navItem" : "navItemInactive"}>Facilities</Link></li>
                    </menu>
                </Dropdown>
            </menu>
        </Navbar>
    )
}

export default MyNavbar;