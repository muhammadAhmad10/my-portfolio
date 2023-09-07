import React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { styled } from "@mui/system";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const CustomButton = styled(Button)({
  background: "#000fac",
  "&:hover": {
    color: "#0000Fb",
  },
});
const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderHoverColor": "#ffffff",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)", // Label color when focused
            },
          },
        },
      },
    },
  });

export default function Contact() {
  const outerTheme = useTheme();

  return (
    <section className="">
      <div className=" d-flex justify-content-center align-items-center pt-3 pb-4">
        <h1 className="text-start ">Let's Work Togather!</h1>
      </div>
      <div className="contact">
        <div className="left-contact">
          <div className="contact-item">
            <div
              style={{
                borderRadius: "10px",
              }}
              className=" pb-3 text-center email-whatsapp"
            >
              <FontAwesomeIcon
                color="#25d366"
                className="mt-1 mb-1"
                icon={faWhatsapp}
              />
              <p>Whatsapp</p>
              <p className="mb-2">+923018067153</p>
              <a href="#!">Send a Message</a>
            </div>
            <div
              style={{
                borderRadius: "10px",
              }}
              className=" pb-3 text-center email-whatsapp"
            >
              <FontAwesomeIcon className="mt-1 mb-1" icon={faEnvelope} />
              <p>Email</p>
              <p className="mb-2">ahmadcs442@gmail.com</p>
              <a href="#!">Send a Message</a>
            </div>
          </div>
        </div>
        <div className="right-contact">
          <div className="pt-4" style={{ marginTop: "15px" }}>
            <form className="form">
              <ThemeProvider theme={customTheme(outerTheme)}>
                <div className="form-group mt-3">
                  <TextField
                    id="standard-basic"
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                  />
                </div>
                <div className="form-group mt-3">
                  <TextField
                    id="standard-basic"
                    fullWidth
                    label="Email"
                    variant="outlined"
                  />
                </div>
                <div className="form-group mt-3">
                  <TextField
                    id="standard-multiline-static"
                    label="Message"
                    multiline
                    rows={3}
                    fullWidth
                    placeholder="Enter your message here...."
                    variant="outlined"
                  />
                </div>
                <div className="mt-5">
                  <CustomButton
                    style={{ background: "#1235b5", color: "white" }}
                    fullWidth
                    variant="contained"
                  >
                    Send Message
                  </CustomButton>
                </div>
              </ThemeProvider>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
