import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "./../data.js";
import "animate.css";
import TrackVisibility from "react-on-screen";

const SkillContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 40px;
  max-width: 1200px;
  max-height: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  span {
    color: white;
  }
  @media (max-width: 560px) {
    display: grid;
    grid-template-columns: auto auto auto;
    max-height: auto;
    margin: 0 auto;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
  }
`;

const SkillItem = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  transition: 0s;
  
  margin: ${(props) => (props.theme.isMobile ? "0 auto" : "0")};
  svg,
  div {
    margin-right: ${(props) => (props.theme.isMobile ? "0" : "10px")};
    font-size: 2rem;
  }
  span {
    color: "white";
    display: ${(props) => (props.theme.isMobile ? "none" : "inline")};
    
  }
  &:hover {
    border-radius: 15px;
    box-shadow: 0px 0px 5px rgba(215, 219, 221, 200);
    background: linear-gradient(
      90.21deg,
      rgba(109, 213, 245, 0.5) -5.91%,
      rgba(35, 10, 148, 0.5) 111.58%
    );
    svg {
      color: ${(props) => props.color};
    }
    div {
      background-color: ${(props) => props.color};
    }
  }
`;

const SvgImage = styled.div`
  background-color: #fff;
  mask: url(${(props) => props.src});
  mask-size: cover;
  width: 2rem;
  height: 2rem;
`;

export const Skills = () => {
  return (
    <section id="skills">
      <div className="skills">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__heartBeat" : ""
              }
            >
              <h2>Languages & Tools</h2>
            </div>
          )}
        </TrackVisibility>
        <SkillContainer>
          {skills.map(({ id, name, icon, svg, color }) => (
            <SkillItem key={id} color={color}>
              {icon && <FontAwesomeIcon icon={icon} />}
              {svg && <SvgImage src={svg} />}
              <span>{name}</span>
            </SkillItem>
          ))}
        </SkillContainer>
      </div>
    </section>
  );
};