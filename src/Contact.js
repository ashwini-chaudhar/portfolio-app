import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setname] = useState("");
  const form = useRef();
  const [email, seteamil] = useState("");
  const [msg, setmsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    ///console.log(e)
    console.log(form.current);
    const templateparams = {
      form_name: name + "" + email,
      to_name: "shivanikshirasagar09199@gamil.com",
      feedback: msg,
    };
    emailjs.send(
      "service_ivg86bb", 
      "template_d6q8v2t",
      templateparams,
     "jSxzB9tGL_3O5A7RK",
      "portfoliositecontact"
      ).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });

  };
  /*  emailjs
      .sendForm(
        "service_ivg86bb",
        "template_d6q8v2t",
        form.current,
        "jSxzB9tGL_3O5A7RK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
*/
  return (
    <>
      <div>
        <div className="contact-me-card row">
          <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get in Touch</span>
            <div className="py-5 d-flex justify-content-center">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_uwos7l6e.json"
                background="transparent"
                speed="1"
                style={{ width: " 300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
            <form
              ref={form}
              className="d-flex flex-column card-contact-right"
              onSubmit={sendEmail}
            >
              <div className="input-gruop my-3 d-flex flex-column">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type="text"
                  placeholder="enter your name"
                  className="input-groups"
                />
              </div>
              <div className="input-gruop my-3 d-flex flex-column">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    seteamil(e.target.value);
                  }}
                  type="text"
                  placeholder="enter email"
                  className="input-groups"
                />
              </div>
              <div className="input-gruop my-3 d-flex flex-column">
                <label>Message</label>
                <textarea
                  value={msg}
                  onChange={(e) => {
                    setmsg(e.target.value);
                  }}
                  type="text"
                  placeholder="enter your massage"
                  className="input-groups"
                />
              </div>
              <div className="input-gruop my-3 d-flex flex-column">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Send Massage"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
