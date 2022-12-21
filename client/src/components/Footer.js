import { Container, Row, Col } from "react-bootstrap";
import linkedin from "./../assets/images/linkedin-icon.svg";
import github from "./../assets/images/icons8-github.svg";
import gmail from "./../assets/images/icons8-gmail-logo-64.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-center">
            <div className="logo">
              <span className="circle-sketch-highlight">AVIV KAMARY</span>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-center">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/kamaryaviv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Icon" />
              </a>
              <a
                href="https://github.com/akamary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Icon" />
              </a>
              <a
                href="mailto:kamaryaviv@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gmail} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
