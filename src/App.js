import { useState } from "react";
import Education from "./Education";
import "./style.css";
import Programming from "./Programming";
import Work from "./Work";
import Projectwork from "./Projectwork";
import Textmenus from "./Textmenus";
import Contact from "./Contact";
import React from "react";
import resume from './Ashwinichaudhar.pdf';

export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogramming] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);
  function SetAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogramming(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }

  return (
   
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-centers">Ashwini</span>
          <div className="bars mx-2" onClick={() => setopennav(!opennav)}>
            {" "}
          </div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex  bg-new px-9 navbar-new py-5 flex-rows transition-all "
            : "d-flex  bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all "
        }
      >
        <span className="brand-name"> Ashwini's web-world</span>
        <div className="d-flex flex-rows " >
        <a  href="#home" className="mx-4 nav-item">Home</a>
          <a href="#aboutme" className="mx-4 nav-item">About me</a>
          <a  href="#resume" className="mx-4 nav-item">Resume</a>
          <a  href="#text" className="mx-4 nav-item">Textmenus</a>
          <a  href="#contactme" className="mx-4 nav-item">Contact</a>
          
        </div>
      </nav>
      <div className="herosection px-10 py-2">
        <div className="hero-section-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text" id="home">
                {" "}
                Hello, I'm <span className="name-Im-text">Ashwini😎</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Enthusiastic Dev😁
              </span>
              <span className="Im-text-subheading">
                Knack of bulding applications with front and backend operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
               <a href="#contactme"  className="btn-hire-me">Hire Me</a>
                <a  href={resume} className="btn-resume-me">Get Resume</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div className="d-flex justify-content-center custom-div-outer-img">
            <img
                className="img-fluid cutome-img"
                src="https://assets.3dtotal.com/plan1.tlevvm.jpg"
                alt='heroimage'
              ></img>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">About me</span>
          <span className="why-text-sub">Why choose me?</span>

          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_vhs8qxx2.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                Full stack and mobile devloper with background knowledge in MERN
                Stack with Redux,along with the application with most
                efficiency/Strong profotional with a BTech willing to be an
                asset for an organization
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are few Highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full stack web and mobile Devlopment</li>
                    <li>Intractive Front end as pwe the desing</li>
                    <li>Andriod studio, React Native React flutter </li>
                    <li>
                      Node JS, Express, MongoDB (All backend technologies)
                    </li>
                    <li>Docker, Kubernetes, AWS</li>
                  </ul>
                </span>
              </span>
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column">
        <span className="about-me-text" id="resume">Resume</span>
        <span className="why-text-sub">My formal Bio Details</span>

        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto", height: "400px" }}
        >
          <div className="col-lg-4 col-md-4  col-sm-12 resume-left-section d-flex  px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i class="fa-solid fa-user-graduate"></i>
                {""}
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-briefcase"></i>
                {""}
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-file-code"></i>
                {""}
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-list-check"></i>
                {""}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkhistory, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programmings === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogramming, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projectwork />}
          </div>
        </div>
      </div>
      <div className="textmonials-part my-5">
        <div className="textmonilas-inner-part d-flex flex-column">
          <span className="about-me-text" id="text"> Textmonilas</span>
          <span className="why-text-sub mb-5">
            What my clinet say about me{""}
          </span>
          <Textmenus />
        </div>
      </div>
      <div className="contact-me-part" id="contactme">
        <div className="relative-bg"> </div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact me</span>
          <span className="why-text-sub mb-5">Let's Keep in Touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
