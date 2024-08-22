import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              // imgPath={chatify}
              isBlog={false}
              title="Calculator"
              description="Developed a Calculator app website using HTML, CSS, JavaScript, and vite + ReactJs.Implemented custom logic in a React component to enhance the dynamic behavior of the calculator app.Created reusable components to eliminate code duplication and enhance code organization, scalability, and maintainability.Handled events for button presses, including numbers, symbols, and the equal sign, using event handlers like handleSymbol and handleButtonPress."
              ghLink="https://github.com/gokusumit/calculator"
              demoLink="https://calculator-kohl-xi-22.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Amazon-Clone"
              description="Developed an Amazon clone website using HTML, CSS, and JavaScript.Integrated responsive design principles ensuring compatibility across desktop and mobile platforms.Enhanced UI components for better user interaction, including sliders, dropdowns, and modals.
"
              ghLink="https://github.com/gokusumit/Amazon-Clone"
              demoLink="https://amazon-clone-six-coral.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="QR-Code Generator"
              description="Developed a QR-Code generator using HTML, CSS , Javascript. Generates fully customized QR codes when we entered any text or url

"
              ghLink="https://github.com/gokusumit/QR-CODE-generator"
              demoLink="https://qr-code-generator-eight-beta.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Rock-Paper-Scissors"
              description="Designed a semantic HTML structure to organize the game components, including the game board, player choices, and result display.Used JavaScript's Math.random() function to generate a random number for the computer's choice, ensuring an unpredictable and engaging gameplay experience.Updated the game state and displayed the result using JavaScript's DOM manipulation methods, such as innerHTML and textContent."
              ghLink="https://github.com/gokusumit/rock-paper-scissors-game"
              demoLink="https://rock-paper-scissors-game-two-beta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Super Market Billing system"
              description="This supermarket billing system is a simple console application built in C++ without the use of graphics. This project will help you understand basically two things – use of stream class and file handling in c++ programming language."
              ghLink="https://github.com/gokusumit/Super-market-billing-system"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Tic tac Toe"
              description="Tic-Tac-Toe is a simple and fun game for 2 players, X and O. It is played on a 3x3 grid. Each player's goal is to make 3 in a row or column or daigonal."
              ghLink="https://github.com/gokusumit/Tic--Tac-Toe"
              demoLink="https://tic-tac-toe-olive-six.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
