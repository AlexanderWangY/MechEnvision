import React, { useState } from 'react';
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
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="top-right-button">Navigation</button>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#">Page 1</a>
                    <a href="#">Page 2</a>
                    <a href="#">Page 3</a>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;