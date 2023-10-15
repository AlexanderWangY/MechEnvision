// import { useState } from "react";
import "./styles/title.css";

const Title = () =>{
    return (
        <div className="body">
            <div className="wavy-background">
                    <div className="menu">
                        <button className="top-right-button">
                            <span className="menu-icon">&#8801;</span>
                        </button>
                    </div>
                    <h1 className="title">MechEnvision</h1>
                    <div className="mission-box">
                        <p className="mission-text">Envision your next project with the power of AI</p>
                        <p className="mission-caption">
    Our tool aims to aid mechanical engineering students in the process of planning, executing, and understanding the theoretical principles behind their very own independent projects. 
    </p>
                        <a className="start-button" href="#">Start</a>

                    </div>
            </div>
        </div>
    )
};


export default Title;
