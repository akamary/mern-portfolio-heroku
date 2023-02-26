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
import portf1 from "./../assets/images/p1.png";
import portf2 from "./../assets/images/p2.png";
import portf3 from "./../assets/images/p3.png";
import portf4 from "./../assets/images/p4.png";
import food1 from "./../assets/images/food1.png";
import food2 from "./../assets/images/food2.png";
import food3 from "./../assets/images/food3.png";
import food4 from "./../assets/images/food4.png";
import styled from "styled-components";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "./../assets/Experience.css";
import link from "./../assets/images/icons8-link-32.png";

export const Experience = () => {
  const [isReadMore1, setIsReadMore1] = useState(true);
  const [isReadMore2, setIsReadMore2] = useState(true);
  const [isReadMore3, setIsReadMore3] = useState(true);
  const [isReadMore4, setIsReadMore4] = useState(true);
  const [isReadMore5, setIsReadMore5] = useState(true);
  const [isReadMore6, setIsReadMore6] = useState(true);

  const project1 = [
    {
      title: "ProductHunter",
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
      title: "Personal - Portfolio",
      description:
        "Developed and deployed a full stack portfolio app in order to present my projects, the rest can be found in my GitHub profile. By implementing a backend using Node.js (express framework), any visitor can contact me by sending emails using nodemailer and storing in MongoDB the number of visitors, current time and date. Deployed the app using Heroku Cloud.",
      imgUrl: portf1,
      imgUrl2: portf2,
      imgUrl3: portf3,
      imgUrl4: portf4,
    },
  ];
  const project6 = [
    {
      title: "Food App",
      description:
        "Developed a simple responsive Reactjs application and using NoSQL Firebase RT Database for storing the data by sending http requests from my react app to Firebase DB. This project built on 2021, in our semster break. ",
      imgUrl: food1,
      imgUrl2: food2,
      imgUrl3: food3,
      imgUrl4: food4,
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
    setIsReadMore5(!isReadMore5);
  };
  const toggleReadMore6 = () => {
    setIsReadMore6(!isReadMore6);
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
                    isVisible ? "animate__animated animate__fadeInTopRight" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  Here are some of the projects that I have worked on,
                   both personal and academic. The list includes web apps,
                    R&D projects, and more. Each project has a brief 
                    description and one or more links. To learn more about a 
                    project, you can visit the project repository on my <div className="hover-text">
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
                    </div>, where you will find a detailed and complete 
                     description along with examples.{" "}
                    
                  </p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeInBottomLeft" : ""
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
                
                  <Row className="justify-content-center">
                  
                    <div className="item">
                      
                      {project1.map((projectt1, index) => {
                        return (
                          <Col>
                            <h5>ProductsHunter</h5>
                            <div className="proj-imgbx">
                              <Carousel>
                                <Carousel.Item interval={2500}>
                                  <img src={projectt1.imgUrl} />
                                </Carousel.Item>

                                <Carousel.Item interval={2500}>
                                  <img src={projectt1.imgUrl4} />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                  <img src={projectt1.imgUrl5} />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                  <img src={projectt1.imgUrl3} />
                                </Carousel.Item>
                                <Carousel.Item interval={2500}>
                                  <img src={projectt1.imgUrl6} />
                                </Carousel.Item>
                              </Carousel>
                            </div>
                            <div className="proj-txdesc-parent">
                              <div className="proj-txdesc">
                                {isReadMore1
                                  ? projectt1.description.slice(0, 100)
                                  : projectt1.description}
                                <span onClick={toggleReadMore1}>
                                  {isReadMore1 ? "...read more" : " show less"}
                                </span>
                              </div>
                            </div>
                            <div className="soc">
                              <div className="socicon">
                                <span>Spring</span>
                              </div>
                              <div className="socicon">
                                <span>Spring Boot</span>
                              </div>
                              <div className="socicon">
                                <span>React</span>
                              </div>
                              <div className="socicon">
                                <span>PostgreSQL</span>
                              </div>
                            </div>
                            <div className="social-icon-projects">
                              <div className="social-icon">
                                <div className="hover-text">
                                  <span className="tooltip-text" id="bottom">
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
                            <h5>Cars treatment Management System</h5>
                            <div className="proj-imgbx">
                              <Carousel>
                                <Carousel.Item interval={2500}>
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
                                {isReadMore2 ? "...read more" : " show less"}
                              </span>
                            </div>
                            <div className="soc">
                              <div className="socicon">
                                <span>Node.js</span>
                              </div>
                              <div className="socicon">
                                <span>React</span>
                              </div>
                              <div className="socicon">
                                <span>Express</span>
                              </div>
                              <div className="socicon">
                                <span>MongoDB</span>
                              </div>
                            </div>
                            <div className="social-icon-projects">
                              <div className="social-icon">
                                <div className="hover-text">
                                  <span className="tooltip-text" id="bottom">
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
                                {isReadMore3 ? "...read more" : " show less"}
                              </span>
                            </div>
                            <div className="soc">
                              <div className="socicon">
                                <span>Python</span>
                              </div>
                              <div className="socicon">
                                <span> PyQt5</span>
                              </div>
                            </div>
                            <div className="social-icon-projects">
                              <div className="social-icon">
                                <div className="hover-text">
                                  <span className="tooltip-text" id="bottom">
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
                      {project5.map((project, index) => {
                        return (
                          <Col size={12} sm={6} md={12}>
                            <h5>Personal Portfolio</h5>
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
                              </Carousel>
                            </div>
                            <div className="proj-txdesc">
                              {isReadMore5
                                ? project.description.slice(0, 50)
                                : project.description}
                              <span onClick={toggleReadMore5}>
                                {isReadMore5 ? " ...read more" : " show less"}
                              </span>
                            </div>
                            <div className="deployments">
                              {" "}
                              Heroku deployment{" "}
                            </div>
                            <div className="soc">
                              <div className="socicon">
                                <span>Node.js</span>
                              </div>
                              <div className="socicon">
                                <span>React</span>
                              </div>
                              <div className="socicon">
                                <span>Express</span>
                              </div>
                              <div className="socicon">
                                <span>MongoDB</span>
                              </div>
                            </div>
                            <div className="deployments">
                              AWS EC2 instance deployments
                            </div>
                            <div className="subt">
                              In addition to MERN stack, using the next
                              services:
                            </div>
                            <div className="deployments"></div>
                            <div className="soc">
                              <div className="socicon">
                                <span>AWS Cloud</span>
                              </div>
                              <div className="socicon">
                                <span>NGINX</span>
                              </div>
                              <div className="socicon">
                                <span>LetsEncrypt</span>
                              </div>
                              <div className="socicon">
                                <span>Route 53</span>
                              </div>
                            </div>

                            <div className="social-icon-projects">
                              <div className="social-icon">
                                <div className="hover-text">
                                  <span className="tooltip-text" id="bottom">
                                    {" "}
                                    Personal Website
                                  </span>
                                  <a
                                    href="https://github.com/akamary/mern-portfolio-heroku"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <img src={link} alt="Website" />
                                  </a>
                                </div>
                                <div className="hover-text">
                                  <span className="tooltip-text" id="bottom">
                                    {" "}
                                    Personal Portfolio
                                  </span>
                                  <a
                                    href="https://github.com/akamary/mern-portfolio-heroku"
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
                            <h5>Student Management System</h5>
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
                              </Carousel>
                            </div>
                            <div className="proj-txdesc">
                              {isReadMore4
                                ? project.description.slice(0, 100)
                                : project.description}
                              <span onClick={toggleReadMore4}>
                                {isReadMore4 ? "...read more" : " show less"}
                              </span>
                            </div>
                            <div className="soc">
                              <div className="socicon">
                                <span>Node.js</span>
                              </div>
                              <div className="socicon">
                                <span>React</span>
                              </div>
                              <div className="socicon">
                                <span>Express</span>
                              </div>
                              <div className="socicon">
                                <span>MongoDB</span>
                              </div>
                            </div>
                            <div className="social-icon-projects">
                              <div className="social-icon">
                                <div className="hover-text">
                                  <span className="tooltip-text" id="bottom">
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
                      {project6.map((project, index) => {
                        return (
                          <Col size={12} sm={6} md={12}>
                            <h5>Food App</h5>
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
                              </Carousel>
                            </div>
                            <div className="proj-txdesc">
                              {isReadMore6
                                ? project.description.slice(0, 100)
                                : project.description}
                              <span onClick={toggleReadMore6}>
                                {isReadMore6 ? "...read more" : " show less"}
                              </span>
                            </div>
                            <div className="soc">
                              <div className="socicon">
                                <span>React</span>
                              </div>
                              <div className="socicon">
                                <span>Firebase DB</span>
                              </div>
                            </div>
                            <div className="social-icon-projects">
                              <div className="social-icon">
                                <div className="hover-text">
                                  <span className="tooltip-text" id="bottom">
                                    {" "}
                                    Food App
                                  </span>
                                  <a
                                    href="https://github.com/akamary/food-order-app"
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
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
