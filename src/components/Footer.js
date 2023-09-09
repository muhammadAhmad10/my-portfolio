import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";
import {
  faAngleUp,
  faArrowDownWideShort,
  faArrowTurnUp,
  faArrowUp,
  faArrowUp19,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{ background: "#0f1322" }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="foot">
        <div className="contact-items d-flex flex-column align-items-center">
          <div className=" mb-4 w-100">
            <h2 className="fw-bold mt-4  fs-2">
              Feel free to hip me up. I am looking forward to hear from you!
            </h2>
          </div>
          <div className="social-icons ms-2 mt-3 mb-4">
            <a href="www.facebook.com" className="icon-link">
              <FontAwesomeIcon color="#1877F2" icon={faFacebook} />
            </a>
            <a href="www.github.com" className="icon-link">
              <FontAwesomeIcon
                className="github-icon"
                color="#"
                icon={faGithub}
              />
            </a>
            <a href="www.instagram.com" className="icon-link">
              <FontAwesomeIcon color="#E4405F" icon={faInstagram} />
            </a>
            <a href="www.instagram.com" className="icon-link">
              <FontAwesomeIcon color="#0A66C2" icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="mx-auto px-4">
          <p
            style={{ fontFamily: "cursive" }}
            className="text-light fs-2 mt-4 mb-4 font-bold"
          >
            Muhammad Ahmad
          </p>
          <p className="text-gray-300">
            LDA avenue, near Comsats university lahore, punjab, Pakistan
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-5">
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="arrowup"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </div>
      <hr className="my-3 border-gray-600 " />
      <div className="container mx-auto  d-flex justify-content-center align-items-center px-4">
        <div className="flex flex-wrap justify-center lg:justify-between py-2">
          <div className="text-sm text-gray-400 font-semibold py-1 text-center lg:text-left">
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by Muhammad Ahmad
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © 2023 Muhammad Ahmad. All rights reserved.
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
