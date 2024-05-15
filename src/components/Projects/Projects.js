import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textutils from "../../Assets/Projects/textutils.png";
import evergreennews from "../../Assets/Projects/evergreennews.png";
import mrgym from "../../Assets/Projects/mrgym.png";
import blog from "../../Assets/Projects/blog.png";
import mern from "../../Assets/Projects/mern.png";
import threads from "../../Assets/Projects/threads.png";

function Projects() {
  useEffect(() => {
    document.title = "Divyang | Projects"
  }, [])
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
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="BITS-0F-C0DE"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. 
              Supports dark mode and easy to write blogs using markdown. "
              ghLink="https://github.com/divyangsurani/bits-of-code"
              demoLink="https://bits-of-code-gamma.vercel.app/"
            />
          </Col>
          <Col md={5} className="project-card">
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

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Text changer"
              description="TextUtils is a React web application built using HTML, CSS, JavaScript, and Bootstrap. It serves as a versatile tool for text manipulation, offering features such as converting text to uppercase or lowercase, copying text to the clipboard, and removing extra spaces. The app's intuitive interface and comprehensive functionalities make it a valuable resource for users seeking efficient text processing solutions."
              ghLink="https://github.com/divyangsurani/TextUtils"
              demoLink="https://text-utils-p87y.vercel.app/"
            />
          </Col>
           <Col md={5} className="project-card">
            <ProjectCard
              imgPath={mern}
              isBlog={false}
              title="Mern-chat-app"
              description="A MERN chat app is a real-time messaging platform built using MongoDB, Express.js, React.js, and Node.js. It enables users to register, log in, and engage in one-on-one or group conversations with real-time messaging capabilities."
              ghLink="https://github.com/divyangsurani/mern-chat-app"
              demoLink="https://chat-app-produ.onrender.com"
            />
          </Col>
                
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={threads}
              isBlog={false}
              title="threads-clone"
              description="Thread-Clone: MERN + Socket.io + Chakra UI. JWT Auth, Create/Delete/Like/Comment Posts, Follow/Unfollow, Freeze Account, Dark/Light Mode, Fully Responsive. Chat App with Image Support, Seen/Unseen Status, Notification Sounds. Free Deployment."
              ghLink="https://github.com/divyangsurani/threads-clone"
              demoLink="https://threads-clone-6khh.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
