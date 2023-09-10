import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <section id="home" className="bg-gray-900  text-light">
      <div className="home-left">
        <p>Hi there! I'm</p>
        <h1 className="text-light">
          Muhammad Ahmad, a Frontend Developer based in Lahore, Pakistan
        </h1>
        <p>
          As a web and app developer, I blend business goals with user needs to
          create impactful digital experiences that drive results. With a
          passion for creativity and innovation, I strive to make user-friendly
          solutions that leave a lasting impact.
        </p>
      </div>
      <div className="home-right">
        <div className="img-cont">
          <img src={require("../assets/ahmad.png")} alt="my pic" />
        </div>
      </div>
    </section>
  );
}
