import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import compare1 from "../assets/images/ProductsCmp.png";
import final2 from "../assets/images/FinalProject.png";
import final1 from "../assets/images/FinalProjectMain.png";
import final3 from "../assets/images/FinalVisualization.png";
import compare2 from "../assets/images/CmpProject2.png";
import compare3 from "./../assets/images/CmpProject3.png";
import compare4 from "./../assets/images/CmpProjLogin.png";
import compare5 from "./../assets/images/CmpProjSignUp.png";
import compare6 from "./../assets/images/CmpProjProducts.png";
import carspa1 from "./../assets/images/CarSpa1.png";
import carspa2 from "./../assets/images/CarSpa2.png";
import carspa3 from "./../assets/images/CarSpa3.png";
import student1 from "./../assets/images/StudentSysLogin.png";
import student2 from "./../assets/images/StudentSysRegister.png";
import student3 from "./../assets/images/StudentSysLect.png";
import student4 from "./../assets/images/StudentSysLectadd.png";
import student5 from "./../assets/images/StudentSysUser.png";
import github from "./../assets/images/icons8-github.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export const Projects = () => {
  const [isReadMore1, setIsReadMore1] = useState(true);
  const [isReadMore2, setIsReadMore2] = useState(true);
  const [isReadMore3, setIsReadMore3] = useState(true);
  const [isReadMore4, setIsReadMore4] = useState(true);
  const [isReadMore5, setIsReadMore5] = useState(true);

  const project1 = [
    {
      title: "Products Compare",
      description:
        "The goal of this project is to implement an Restfull API application for tracking and fetching products by implementing a backend app using Spring Boot in addition to a frontend app using Reactjs and other technologies. Authentication and Authorization for securing both apps. Spring Data JPA Pagination.",
      imgUrl: compare1,
      imgUrl2: compare2,
      imgUrl3: compare3,
      imgUrl4: compare4,
      imgUrl5: compare5,
      imgUrl6: compare6,
    },
  ];
  const project2 = [
    {
      title: "Approximation Algorithms - Final Project",
      description:
        "In the project we present a way in which we can use approximation algorithms for minimizing the busy time of machines that are scheduled with different jobs, while the jobs can work in a parallel manner. We summarized an article and wrote a book, in addition to a software we developed for visualizing the outcome of the algorithms presented in the book in Python and PyQt5 for the design.",
      imgUrl: final1,
      imgUrl2: final2,
      imgUrl3: final3,
    },
  ];
  const project3 = [
    {
      title: "Cars Treatment",
      description:
        "The goal of this project is to implement a Car Service app for cars treatments that supports user authentication and authorization. Technologies utilized: PostgreSQL, ExpressJS, ReactJS, NodeJS, Redux and Heroku cloud.",
      imgUrl: carspa1,
      imgUrl2: carspa2,
      imgUrl3: carspa3,
    },
  ];
  const project4 = [
    {
      title: "Student System",
      description:
        "The goal of this project is to implement an application Students System that supports User Authentication (Registration, Login) with MongoDB and Authorization to restrict access to protected resources using JWT. By implementing a backend app using Express.js and a frontend app using Reactjs.",
      imgUrl: student1,
      imgUrl2: student2,
      imgUrl3: student3,
      imgUrl4: student4,
      imgUrl5: student5,
    },
  ];

  const project5 = [
    {
      title: "Student System",
      description:
        "The goal of this project is to implement an application Students System that supports User Authentication (Registration, Login) with MongoDB and Authorization to restrict access to protected resources using JWT. By implementing a backend app using Express.js and a frontend app using Reactjs.",
      imgUrl: student1,
      imgUrl2: student2,
      imgUrl3: student3,
      imgUrl4: student4,
      imgUrl5: student5,
    },
  ];

  const toggleReadMore1 = () => {
    setIsReadMore1(!isReadMore1);
  };
  const toggleReadMore2 = () => {
    setIsReadMore2(!isReadMore2);
  };
  const toggleReadMore3 = () => {
    setIsReadMore3(!isReadMore3);
  };
  const toggleReadMore4 = () => {
    setIsReadMore4(!isReadMore4);
  };
  const toggleReadMore5 = () => {
    setIsReadMore4(!isReadMore5);
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    This is a list of personal/academic projects- Web apps
                    Projects, R&D Projects and more.. You can access all of my
                    projects, including those that are not included in this
                    list, in my{" "}
                    <div className="hover-text">
                      <span className="tooltip-text" id="top">
                        {" "}
                        My GitHub Account
                      </span>
                      <a
                        href="https://github.com/akamary/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub{" "}
                      </a>
                      account
                    </div>
                  </p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">MY PROJECTS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                )}
              </TrackVisibility>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible ? "animate__animated animate__zoomIn" : ""
                        }
                      >
                        <Row className="justify-content-center">
                          <div className="item">
                            {project1.map((project, index) => {
                              return (
                                <Col size={12} sm={6} md={12}>
                                  <h5>Products Compare</h5>
                                  <div className="proj-imgbx">
                                    <Carousel>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl} />
                                      </Carousel.Item>

                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl4} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl5} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl3} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl6} />
                                      </Carousel.Item>
                                    </Carousel>
                                  </div>
                                  <div className="proj-txdesc">
                                    {isReadMore1
                                      ? project.description.slice(0, 100)
                                      : project.description}
                                    <span onClick={toggleReadMore1}>
                                      {isReadMore1
                                        ? "...read more"
                                        : " show less"}
                                    </span>
                                  </div>
                                  <br></br>
                                  <div className="social-icon-projects">
                                    <div className="social-icon">
                                      <div className="hover-text">
                                        <span
                                          className="tooltip-text"
                                          id="bottom"
                                        >
                                          {" "}
                                          Products Compare-GitHub
                                        </span>
                                        <a
                                          href="https://github.com/akamary/StockTrackerCompare"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <img src={github} alt="GitHub" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              );
                            })}
                          </div>

                          <div className="item">
                            {project3.map((project, index) => {
                              return (
                                <Col size={12} sm={6} md={12}>
                                  <h5>Cars Treatment</h5>
                                  <div className="proj-imgbx">
                                    <Carousel>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl2} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl3} />
                                      </Carousel.Item>
                                    </Carousel>
                                  </div>
                                  <div className="proj-txdesc">
                                    {isReadMore2
                                      ? project.description.slice(0, 100)
                                      : project.description}
                                    <span onClick={toggleReadMore2}>
                                      {isReadMore2
                                        ? "...read more"
                                        : " show less"}
                                    </span>
                                  </div>
                                  <br></br>
                                  <div className="social-icon-projects">
                                    <div className="social-icon">
                                      <div className="hover-text">
                                        <span
                                          className="tooltip-text"
                                          id="bottom"
                                        >
                                          {" "}
                                          Cars Treatment-GitHub
                                        </span>
                                        <a
                                          href="https://github.com/akamary/cars-treatments-client"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <img src={github} alt="GitHub" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              );
                            })}
                          </div>
                          <div className="item">
                            {project2.map((project, index) => {
                              return (
                                <Col size={12} sm={6} md={12}>
                                  <h5>Approximation Algorithms</h5>
                                  <div className="proj-imgbx">
                                    <Carousel>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl2} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl3} />
                                      </Carousel.Item>
                                    </Carousel>
                                  </div>
                                  <div className="proj-txdesc">
                                    {isReadMore3
                                      ? project.description.slice(0, 100)
                                      : project.description}
                                    <span onClick={toggleReadMore3}>
                                      {isReadMore3
                                        ? "...read more"
                                        : " show less"}
                                    </span>
                                  </div>
                                  <br></br>
                                  <div className="social-icon-projects">
                                    <div className="social-icon">
                                      <div className="hover-text">
                                        <span
                                          className="tooltip-text"
                                          id="bottom"
                                        >
                                          {" "}
                                          Final Project-GitHub
                                        </span>
                                        <a
                                          href="https://github.com/akamary/FinalProject"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <img src={github} alt="GitHub" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              );
                            })}
                          </div>
                          <div className="item">
                            {project4.map((project, index) => {
                              return (
                                <Col size={12} sm={6} md={12}>
                                  <h5>Student System</h5>
                                  <div className="proj-imgbx">
                                    <Carousel>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl} />
                                      </Carousel.Item>

                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl2} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl3} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl4} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl5} />
                                      </Carousel.Item>
                                    </Carousel>
                                  </div>
                                  <div className="proj-txdesc">
                                    {isReadMore4
                                      ? project.description.slice(0, 100)
                                      : project.description}
                                    <span onClick={toggleReadMore4}>
                                      {isReadMore4
                                        ? "...read more"
                                        : " show less"}
                                    </span>
                                  </div>
                                  <br></br>
                                  <div className="social-icon-projects">
                                    <div className="social-icon">
                                      <div className="hover-text">
                                        <span
                                          className="tooltip-text"
                                          id="bottom"
                                        >
                                          {" "}
                                          Student System-GitHub
                                        </span>
                                        <a
                                          href="https://github.com/akamary/student_system"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <img src={github} alt="GitHub" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              );
                            })}
                          </div>
                          <div className="item">
                            {project4.map((project, index) => {
                              return (
                                <Col size={12} sm={6} md={12}>
                                  <h5>Student System</h5>
                                  <div className="proj-imgbx">
                                    <Carousel>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl} />
                                      </Carousel.Item>

                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl2} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl3} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl4} />
                                      </Carousel.Item>
                                      <Carousel.Item interval={5000}>
                                        <img src={project.imgUrl5} />
                                      </Carousel.Item>
                                    </Carousel>
                                  </div>
                                  <div className="proj-txdesc">
                                    {isReadMore5
                                      ? project.description.slice(0, 100)
                                      : project.description}
                                    <span onClick={toggleReadMore5}>
                                      {isReadMore5
                                        ? "...read more"
                                        : " show less"}
                                    </span>
                                  </div>
                                  <br></br>
                                  <div className="social-icon-projects">
                                    <div className="social-icon">
                                      <div className="hover-text">
                                        <span
                                          className="tooltip-text"
                                          id="bottom"
                                        >
                                          {" "}
                                          Student System-GitHub
                                        </span>
                                        <a
                                          href="https://github.com/akamary/student_system"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <img src={github} alt="GitHub" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </Col>
                              );
                            })}
                          </div>
                        </Row>
                      </div>
                    )}
                  </TrackVisibility>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
