import './styles/about.css';
import React from "react";

const About: React.FC = () =>{
  return (
    <main>
      <section id="about-us">
        <h1>About Us</h1>
        <div id="about-us-text">
          <p>
          </p>
        </div>
      </section>
      <section id="mission">
        <h3>Mission Statement</h3>
        <div id="mission-text">
          <p>
            Our tool aims to aid mechanical engineering students in the process of planning, executing, and understanding the theoretical principles behind their very own independent projects.
          </p>
        </div>
      </section>
      <section id="why">
        <h3>Why?</h3>
        <div id="why-text">
          <p>
            Independent projects allow students to apply theoretical knowledge to practical situations to develop a deeper understanding of engineering concepts.
          </p>
        </div>
      </section>
      <section id="authors">
        <h3>Authors</h3>
        <div id="authors-text">
          <p>Joseph Molina, Soor Hansalia, Hugo Liu, Alexander Wang, Lucja Stawikowska</p>
        </div>
      </section>
    </main>
  );
}

export default About;