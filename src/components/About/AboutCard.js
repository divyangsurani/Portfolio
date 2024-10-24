import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <ImPointRight /> Hi Everyone, I am <span className="purple">DIVYANG SURANI </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            <ImPointRight /> I am working at ZION ELIRA IT SERVICE as front-end developer ( intern ) .
            <br />
            <ImPointRight /> I Have an experience of 6 Months in React Js at Techvault Support Service llp as ( intern ) .
            <br />
            <ImPointRight /> I Pursuing BCA in (Silver Oak University).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Divyang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
