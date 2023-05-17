import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepFour = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <img src="" alt="Girl-Laptop" />
          <div>
            <h3>Step 4</h3>
            <h1>Insert the obbreviation</h1>
            <input type="text" placeholder="Symbol"/>
          </div>
        </div>
        <div>
          <CircularProgress value={4} max={14} />   
          <div>
            <button>Arrow-Circle-Left</button>
            <button>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFour;
