import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepSixVariantYes = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <img src="" alt="Girl-Laptop" />
          <div>
            <h3>Step 6</h3>
            <h1>Insert the hash</h1>
            <input type="text" placeholder="The hash code"/>
          </div>
        </div>
        <div>
          <CircularProgress value={6} max={14} />   
          <div>
            <button>Arrow-Circle-Left</button>
            <button>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepSixVariantYes;
