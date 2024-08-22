import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumit Verma </span>
            from <span className="purple"> Lucknow, Uttar Pradesh.</span>
            <br />
            My journey in academia has equipped me with a strong analytical mindset and a detail-oriented approach to problem-solving.
            <br />
            I have completed my B.tech in Information Technology from Kanpur Institute of technology.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and trying new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sumit....</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
