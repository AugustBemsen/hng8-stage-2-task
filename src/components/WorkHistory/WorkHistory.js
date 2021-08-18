import React from "react";
import styled from "styled-components";

const WorkHistory = () => {
  return (
    <>
      <WorkHistoryStyles>
        <div class="second-section">
          <h1>WORK HISTORY</h1>

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
        </div>
      </WorkHistoryStyles>
    </>
  );
};

export default WorkHistory;
const WorkHistoryStyles = styled.div``;
