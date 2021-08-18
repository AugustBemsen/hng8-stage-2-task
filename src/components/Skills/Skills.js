import React from "react";
import styled from "styled-components";

const Skills = ({skills}) => {

  return (
    <>
      <SkillsStyles>
        <h1 className="heading-text">SKILLS</h1>

        <div class="techs">
          {skills.map(skill => <div class="tech">{skill}</div>)}
        </div>
      </SkillsStyles>
    </>
  );
};

export default Skills;
const SkillsStyles = styled.div`
  .techs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    width: 100%;
    max-width: 600px;
    margin-top: 30px;

    @media screen and (max-width: 520px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .tech {
      padding: 15px;
      background: #f9f9f9;
      border-radius: 10px;
      text-align: center;
    }
  }
`;
