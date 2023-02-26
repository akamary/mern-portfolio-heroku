import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useRef } from "react";
import "./../assets/Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Engineer", "Developer"];
  const period = 2000;
  const ref = useRef("#connect");

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const handleClick = () => {
    return ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row xs="1" md="1" lg="1">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__backInDown" : ""
                }
              >
                <span className="tagline">Welcome !</span>
                <span className="writer">
                <h1>
                  {`Hello, my name is Aviv! As a hard-working and quick learner,`}
                  
                  {` I am eager to start my career as `}

                  <br></br>
                  {` a Software `}

                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Engineer,Developer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                  </span >
                  
                <p>
                I am a tech enthusiast with a Bachelor of Science degree in Software Engineering
                 and experience in building web applications. I am committed to delivering high-quality
                  code and enjoy working in a collaborative team environment.
                  <br></br>
                  I am looking for a full-time junior developer role.
                </p>
                <p>
                  <a href="#connect" role="button">
                    Contact Me <ArrowDownCircle size={25} />
                  </a>
                </p>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
};
