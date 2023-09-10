import "../styles/Projects.css";
import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Project from "../projects.json";
export default function Projects() {
  const [show, setShow] = useState(false);
  const [openedProject, setOpenedProject] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="projects" className="projects">
      <Modal show={show} centered onHide={handleClose} animation={false}>
        <div className="" style={{ width: "100%" }}>
          <Modal.Header closeButton>
            <Modal.Title>{openedProject.title} Demo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              style={{ width: "100%", height: "250px" }}
              src=" https://firebasestorage.googleapis.com/v0/b/web-dev-acccd.appspot.com/o/portfolio-media%2FReact_App_-_Google_Chrome_2023-09-02_00-14-27_AdobeExpress%20(1).mp4?alt=media&token=5e4ed5d2-5438-40f3-b6be-2836bdd32fd4"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
      <h1 className="text-center fs-1 mb-5">Projects</h1>
      {/* <div className=" bg-danger align-items-center justify-content-center d-flex"> */}
      <div className="projects-container" style={{ padding: "30px 6%" }}>
        {Project.map((project) => (
          <div className="project animate__animated animate__delay-2s animate__fadeInLeft position-relative">
            <img src={project.image} alt="adf" />
            <h2 className="fw-bold mt-2 text-center fs-4 ">{project.title}</h2>
            <div className="d-flex justify-content-center w-100  position-absolute bottom-5">
              <button className="button">Github </button>
              <button
                onClick={() => {
                  setOpenedProject(project);
                  handleShow();
                }}
                className="button"
              >
                Demo{" "}
              </button>
            </div>
          </div>
        ))}

        {/* </div> */}
      </div>
    </div>
  );
}
