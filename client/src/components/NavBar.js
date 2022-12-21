import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import linkedin from "./../assets/images/linkedin-icon.svg";
import gmail from "./../assets/images/icons8-gmail-logo-64.svg";
import github from "./../assets/images/icons8-github.svg";
import { useMediaQuery } from "react-responsive";
import "./../assets/NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 480px)" });

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={scrolled ? "scrolled" : ""}
        collapseOnSelect
      >
        {isTabletOrMobile && (
          <div className="mobilever">
            <Navbar.Brand href="#home">
              <div className="logo">
                <span className="circle-sketch-highlight">AVIV KAMARY</span>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" >
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#project"
                  className={
                    activeLink === "project"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("project")}
                >
                  Projects
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <div className="hover-text">
                    <span className="tooltip-text" id="bottom">
                      {" "}
                      LinkedIn-Aviv Kamary
                    </span>
                    <a
                      href="https://www.linkedin.com/in/kamaryaviv/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} alt="LinkedIn" />
                    </a>
                  </div>
                  <div className="hover-text">
                    <span className="tooltip-text" id="bottom">
                      {" "}
                      GitHub-Aviv Kamary
                    </span>
                    <a
                      href="https://github.com/akamary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub" />
                    </a>
                  </div>
                  <div className="hover-text">
                    <span className="tooltip-text" id="bottom">
                      {" "}
                      Gmail-Aviv Kamary
                    </span>
                    <a
                      href="mailto:kamaryaviv@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={gmail} alt="Gmail" />
                    </a>
                  </div>
                </div>
                <HashLink to="#connect">
                  <button className="vvd">
                    <span>Contact</span>
                  </button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </div>
        )}
        {!isTabletOrMobile && (
          <Container>
            <Navbar.Brand href="#home">
              <div className="logo">
                <span className="circle-sketch-highlight">AVIV KAMARY</span>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#skills"
                  className={
                    activeLink === "skills"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("skills")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  href="#project"
                  className={
                    activeLink === "project"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("project")}
                >
                  Projects
                </Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <div className="hover-text">
                    <span className="tooltip-text" id="bottom">
                      {" "}
                      LinkedIn-Aviv Kamary
                    </span>
                    <a
                      href="https://www.linkedin.com/in/kamaryaviv/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} alt="LinkedIn" />
                    </a>
                  </div>
                  <div className="hover-text">
                    <span className="tooltip-text" id="bottom">
                      {" "}
                      GitHub-Aviv Kamary
                    </span>
                    <a
                      href="https://github.com/akamary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub" />
                    </a>
                  </div>
                  <div className="hover-text">
                    <span className="tooltip-text" id="bottom">
                      {" "}
                      Gmail-Aviv Kamary
                    </span>
                    <a
                      href="mailto:kamaryaviv@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={gmail} alt="Gmail" />
                    </a>
                  </div>
                </div>
                <HashLink to="#connect">
                  <button className="vvd">
                    <span>Contact</span>
                  </button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        )}
      </Navbar>
    </Router>
  );
};
