import React from "react";
import "../styles/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import skills from "../skills.json";

export default function Skills() {
  console.log("skills are: ", skills);
  return (
    <section id="skills" className="skills-section">
      <h1 className="text-center text-light pt-4">Skills</h1>
      {/* <div className=" skill-container"> */}

      <div
        className="mt-5 skills-container d-flex flex-wrap justify-content-center"
        style={{}}
      >
        {skills.map((skill) => (
          <div
            className="skilled d-flex flex-column justify-content-center align-items-center"
            style={{
              borderRadius: "10px",
              width: "100px",
              height: "100px",
              boxShadow: "0px 0px 50px rgba(129, 122, 122, 0.3)",
            }}
            key={skill.id}
          >
            <img
              src={require(`../assets/icons/${skill.icon}`)}
              alt={skill.title}
              style={{ width: "45px", height: "35px" }}
            />{" "}
            <p className="mt-1 text-center">{skill.title}</p>
          </div>
        ))}
      </div>

      <h1 className="text-center text-light pt-5">What I Can Do</h1>

      <div className=" skill-tracks pb-3 pt-3">
        <div className="track container">
          <div className="title-icon">
            <h3 className="fw-bold fs-5">Web Development</h3>
            <FontAwesomeIcon icon={faCode} />
          </div>
          <p>
            I specialize in crafting dynamic and responsive websites that
            showcase the creativity. My mission is to bring your digital dreams
            to life with captivating designs and cutting-edge technological
            solutions. With a relentless focus on user-centered design, I ensure
            that every aspect of your website is geared towards delivering
            seamless and intuitive user experiences.{" "}
          </p>
          <a className="projects-btn  btn" href="#!">
            Hire me
          </a>
        </div>
        <div className="track container">
          <div className="title-icon">
            <h3 className="fw-bold fs-5">App Development</h3>
            <FontAwesomeIcon icon={faMobileScreen} />
          </div>
          <p>
            I specialize in creating innovative and user-centric mobile
            applications that harness the full potential of both native and
            cross-platform frameworks. I believe in the transformative power of
            technology to enhance daily lives. My mission is to provide
            cutting-edge solutions that not only engage users but also
            streamline processes and effectively address real-world challenges.
          </p>
          <a className="projects-btn btn" href="#!">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}
