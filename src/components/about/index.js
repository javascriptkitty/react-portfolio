import React from "react";
import "wired-card";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const About = () => {
  return (
    <section className="about">
      <Container>
        <a name="about"></a>
        <h1>About</h1>
        <wired-card elevation="2">
          <h3>About me</h3>
          <p>
            I graduated from college with a Bachelor of Electrical Engineering,
            and started my career in that field, but I have since found my true
            passion in front end web development. Currently I'm a junior
            developer focused on JQuery and React projects.
          </p>
        </wired-card>
        <wired-card elevation="2">
          <h3>My Skillset</h3>
          <p>
            I possess both strong analytical and design skills. My sharp eye for
            details and sense of aesthetics enables me to deliver a strong UX on
            the projects I work on, while my analytical skills allow me to solve
            complex problems and implement the functional side of modern web
            applications front ends. I work well under pressure and can produce
            high-quality work in short periods of time. I have strong
            interpersonal skills and can work with a wide variety of people.
          </p>
        </wired-card>
      </Container>
    </section>
  );
};

export default About;
