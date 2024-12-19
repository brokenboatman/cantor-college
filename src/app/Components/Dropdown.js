'use client'
import "./Dropdown.css";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

function Dropdown({ children, title, menuOpen }) {
    const [open, setOpen] = useState(false);

    function toggleDropdown() {
        setOpen(!open);
    }
    if (open) {
        return (
            <div>
                <p onClick={toggleDropdown} className={menuOpen ? "navItem" : "navItemInactive"}>{title}  ⬆</p>
                <div>{children}</div>
            </div>
        );
    }
    else {
        return (
            <div>
                <p onClick={toggleDropdown} className={menuOpen ? "navItem" : "navItemInactive"}>{title}  ⬇</p>
            </div>
        );
    }
};

export default Dropdown;