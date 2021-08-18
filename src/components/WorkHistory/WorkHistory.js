import React from "react";
import styled from "styled-components";

const WorkHistory = ({ workHistory }) => {
  return (
    <>
      <WorkHistoryStyles>
        <h1 className="heading-text">WORK HISTORY</h1>

        <div class="works">
          {workHistory.map((work) => (
            <div class="work">
              {work.title} at {work.company} <br />
              {work.year}
            </div>
          ))}
        </div>
      </WorkHistoryStyles>
    </>
  );
};

export default WorkHistory;
const WorkHistoryStyles = styled.div`
  position: relative;

  .works {
    margin-top: 40px;
    .work {
      padding: 15px;
      background: #f9f9f9;
      border-radius: 10px;
      line-height: 40px;
      margin-bottom: 30px;
    }
  }
`;
