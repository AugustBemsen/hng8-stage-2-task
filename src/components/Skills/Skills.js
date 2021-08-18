import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <>
      <SkillsStyles>
        <h1 className="heading-text">SKILLS</h1>

        <div class="techs">
          <div class="tech">Javascript</div>
          <div class="tech">React</div>
          <div class="tech">Redux</div>
          <div class="tech">Framer Motion</div>
          <div class="tech">Git</div>
          <div class="tech">SASS</div>
          <div class="tech">Style-Component</div>
          <div class="tech">CSS</div>
          <div class="tech">HTML</div>
          <div class="tech">Figma</div>
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
