import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="banner">
          <h1>Volunteers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus obcaecati non eius, excepturi perspiciatis velit unde
            sit, quam animi blanditiis maiores facilis pariatur, tempore et
            quibusdam culpa! Nesciunt nobis placeat eum asperiores, vero
            consequuntur pariatur.
          </p>
          <Link to={"/donate"} className="btn">
            Donate Now
          </Link>
        </div>
        <div className="banner">
          <img src="/hero.png" alt="hero" />
        </div>
      </section>
    </>
  );
};

export default Hero;
