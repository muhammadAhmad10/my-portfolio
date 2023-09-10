import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about">
      <h1 className=" text-light" style={{ marginBottom: "30px" }}>
        About Me
      </h1>

      <div className="about-content">
        <div className="about-left container">
          <img src={require("../assets/me.png")} alt="about pic" />
        </div>
        <div className="about-right pt-1 container-fluid">
          <p>
            Hello there! <b>I'm Muhammad Ahmad</b>, and I'm currently pursuing a
            bachelor's degree in Computer Science at COMSATS University Lahore.
            I love creating apps and websites using a cool technology like
            <b> React and React Native</b>. Also, I'm quite intrigued by the
            world of machine learning and AI.
          </p>
          <p>
            I've spent around <b>5-6 months working on React Native</b> not too
            long ago. During this time, I learned a lot and contributed to a
            real project. Right now, I'm diving even deeper into React to
            sharpen my skills and create even better stuff.
          </p>
          <p>
            When I'm not busy with coding, you might find me exploring the
            fascinating possibilities of <b>machine learning and AI</b>. The
            idea of teaching computers to be smart really excites me!
          </p>
          <p>
            In this fast-changing tech world, I believe in the power of constant
            learning. Every day, I strive to expand my knowledge and skills,
            staying up-to-date with the latest trends and breakthroughs. With a
            curious mind and a passion for creating, I'm on a mission to develop
            innovative apps, user-friendly websites, and maybe even contribute
            to the exciting developments in AI.
          </p>
          <div className="" style={{ padding: "0px 5%" }}>
            <button className="btn" style={{ borderRadius: "0px" }}>
              Get Resume
            </button>
          </div>
        </div>
      </div>
      {/* <div className="education bg-danger container">
        <h1>Education</h1>
        <div className="education-content">
          <div className="education-left">
            <h3>COMSATS University Lahore</h3>
            <p>
              <b>Bachelor's Degree in Computer Science</b>
            </p>
            <p>2019 - 2023</p>
          </div>
          <div className="education-right">
            <h3>Govt. College University Lahore</h3>
            <p>
              <b>Intermediate in Computer Science</b>
            </p>
            <p>2017 - 2019</p>
          </div>
        </div>
        <div className="education-content">
          <div className="education-left">
            <h3>Govt. High School</h3>
            <p>
              <b>Matriculation in Science</b>
            </p>
            <p>2015 - 2017</p>
          </div>
          <div className="education-right">
            <h3>Govt. High School</h3>
            <p>
              <b>Matriculation in Science</b>
            </p>
            <p>2015 - 2017</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
