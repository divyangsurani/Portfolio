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
            <ImPointRight />I am currently intern at Techvault Support Service LLP (Branch).
            <br />
            <ImPointRight />I Pursuing BCA in (Silver Oak University).
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