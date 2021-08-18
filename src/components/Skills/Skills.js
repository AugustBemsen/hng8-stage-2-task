import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <>
      <SkillsStyles>
        <div class="first-section">
          <h1>SKILLS</h1>

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
        </div>
      </SkillsStyles>
    </>
  );
};

export default Skills;
const SkillsStyles = styled.div``;
