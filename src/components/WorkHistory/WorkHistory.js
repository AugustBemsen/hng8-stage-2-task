import React from "react";
import styled from "styled-components";

const WorkHistory = () => {
  return (
    <>
      <WorkHistoryStyles>
        <h1 className="heading-text">WORK HISTORY</h1>

        <div class="works">
          <div class="work">
            Frontend developer intern at Zuri <br />
            Present
          </div>
          <div class="work">
            Frontend developer intern at HNG Internship
            <br />
            2020
          </div>
          <div class="work">
            SWIES at NTA <br />
            2019
          </div>
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
