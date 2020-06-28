import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "@material-ui/core";
import "./style.css";

const contacts = [
  {
    name: "LinkedIn",
    icon: "fa fa-fw fa-2x fa-linkedin-square valign-middle",
    link: "https://www.linkedin.com/in/kristina-alekseeva-0285b585/",
  },
  {
    name: "Facebook",
    icon: "fa fa-fw fa-2x fa-facebook-square valign-middle",
    link: "https://www.facebook.com/cristina.camomilla",
  },
  {
    name: "GitHub",
    icon: "fa fa-fw fa-2x fa-github-square valign-middle",
    link: "https://github.com/javascriptkitty/",
  },
  {
    name: "Email",
    icon: "fa fa-fw fa-2x fa-envelope-square valign-middle",
    link: "mailto:cristina.alekseeva@gmail.com",
  },
];

const Contacts = () => {
  return (
    <section className="contacts">
      <Container>
        <a name="contacts"></a>
        <h1>Contact me</h1>
        <h4>I am available for freelance projects and full-time employment.</h4>

        <div className="linkButtons">
          {contacts.map((contact) => {
            return (
              <Button
                variant="contained"
                size="medium"
                href={contact.link}
                target="_blank"
              >
                {" "}
                <i className={contact.icon}></i>
                <strong>{contact.name}</strong>
              </Button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
