import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import skills from "../../assets/SkillsData";
import workHistory from "../../assets/workHistoryData";
import Assets from "../Assets/Assets";
import Skills from "../Skills/Skills";
import Top from "../Top/Top";
import TopBg from "../TopBg/TopBg";
import WorkHistory from "../WorkHistory/WorkHistory";

const Body = () => {
  return (
    <AnimatePresence>
      <BodyStyles
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <TopBg />
        <Top />
        <Skills skills={skills} />
        <WorkHistory workHistory={workHistory} />
        <Assets />
      </BodyStyles>
    </AnimatePresence>
  );
};

export default Body;
const BodyStyles = styled(motion.div)`
  width: 80%;
  background: transparent;
  padding: 2rem;
  margin: 3rem auto;
  border-radius: 50px;
  border: 10px solid #ffffff;
  position: relative;

  @media screen and (max-width: 789px) {
    width: 90%;
  }
`;
