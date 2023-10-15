import React from "react";
import "./styles/title.css";
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom'



const Title: React.FC = () =>{
    return (
        <div className="body">
            <div className="wavy-background">
                    <div className='top-bar'>
                        {/* <h1 className="title">MechEnvision</h1> */}
                        <DropdownMenu />
                        {/* <div className="dropdown">
                            <button className="top-right-button">
                                    <span className="menu-icon">&#8801;</span>
                            </button>
                            <div className="dropdown-content">
                                <a href="#">Page 1</a>
                                <a href="#">Page 2</a>
                                <a href="#">Page 3</a>
                            </div>
                        </div> */}
                    </div>
                    
                    
                    <div className="mission-box">
                        <p className="mission-text">Envision your next project with the power of AI</p>
                        <p className="mission-caption">
    Our tool aims to aid mechanical engineering students in the process of planning, executing, and understanding the theoretical principles behind their very own independent projects. 
    </p>
                        {/* <a className="start-button" href="#">Start</a> */}
                        <Link to="/search" className="start-button">Start</Link>

                    </div>
            </div>
        </div>
    )
};


export default Title;
