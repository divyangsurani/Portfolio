import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textutils from "../../Assets/Projects/textutils.png";
import evergreennews from "../../Assets/Projects/evergreennews.png";
import mrgym from "../../Assets/Projects/mrgym.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evergreennews}
              isBlog={false}
              title="NewsAPP"
              description="Developing an evergreen news app using React.js, HTML, CSS, JavaScript, and Bootstrap for the frontend.
              The backend fetches data through an API.
              Challenges may include handling API requests and displaying fetched data efficiently in React components."
              ghLink="https://github.com/divyangsurani/newsapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Text changer"
              description="TextUtils is a React web application built using HTML, CSS, JavaScript, and Bootstrap. It serves as a versatile tool for text manipulation, offering features such as converting text to uppercase or lowercase, copying text to the clipboard, and removing extra spaces. The app's intuitive interface and comprehensive functionalities make it a valuable resource for users seeking efficient text processing solutions."
              ghLink="https://github.com/divyangsurani/TextUtils"
            />
          </Col>   
          
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mrgym}
              isBlog={false}
              title="Text changer"
              description="Mr.Gym Fitness Club is a web application built using HTML, CSS, JavaScript, and Bootstrap,php."
              // ghLink="https://github.com/divyangsurani/TextUtils"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
