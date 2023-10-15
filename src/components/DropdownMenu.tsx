import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './styles/dropdownmenu.css'; // You can create a CSS file for your component

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="row">
            <h1 className="title">MechEnvision</h1>
            <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="top-right-button">Navigation</button>
            {isOpen && (
                <div className="dropdown-content">
                    <Link to="/">Home</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/about">About Us</Link>

                </div>
            )}
        </div>
        </div>
        
    );
}

export default DropdownMenu;