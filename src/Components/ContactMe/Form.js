import React from "react";
import "./Form.scss";
import SocialBar from "../SocialBarIcon";

export class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <form
          id="contact-form"
          action="https://formspree.io/aryan.katebian@gmail.com"
          method="POST"
        >
          <p>Hey Aryan,</p>
          <p>
            My
            <label htmlFor="your-name">name</label> is
            <input
              type="text"
              name="your-name"
              id="your-name"
              minLength={3}
              placeholder="(your name here)"
              required
            />{" "}
            and my
          </p>
          <p>
            <label htmlFor="email">e-mail address</label> is
            <input
              type="email"
              name="your-email"
              id="email"
              placeholder="(your email address)"
              required
            />
          </p>
          <p>
            {" "}
            I have a <label htmlFor="your-message">message</label> for you,
          </p>
          <p>
            <textarea
              name="your-message"
              id="your-message"
              placeholder="(your msg here)"
              className="expanding"
              required
              defaultValue={""}
            />
          </p>
          <p>
            <button type="submit">
              <svg
                version="1.1"
                className="send-icn"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="100px"
                height="36px"
                viewBox="0 0 100 36"
                enableBackground="new 0 0 100 36"
                xmlSpace="preserve"
              >
                <path
                  d="M100,0L100,0 M23.8,7.1L100,0L40.9,36l-4.7-7.5L22,34.8l-4-11L0,30.5L16.4,8.7l5.4,15L23,7L23.8,7.1z M16.8,20.4l-1.5-4.3
l-5.1,6.7L16.8,20.4z M34.4,25.4l-8.1-13.1L25,29.6L34.4,25.4z M35.2,13.2l8.1,13.1L70,9.9L35.2,13.2z"
                />
              </svg>
              <small>send</small>
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export class Info extends React.Component {
  render() {
    return (
      <div className="information">
        <div>
          <p>
            <span className="glyphicon glyphicon-envelope" />{" "}
            aryan.katebian@gmail.com
          </p>
          <p>
            <span className="glyphicon glyphicon-earphone" /> +44 7463090950
          </p>
          <p>
            <span className="glyphicon glyphicon-home" /> London,UK
          </p>
        </div>
        <SocialBar />
      </div>
    );
  }
}
