import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepTwelveVarintCustom = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <div>
            <h3>Step 13</h3>
            <h1>Transaction royalty amount</h1>
            <input type="number" placeholder="%"/>
          </div>
          <img src="" alt="B-Float" />
        </div>
        <div>
          <CircularProgress value={3} max={14} />
          <div>
            <button>Arrow-Circle-Left</button>
            <button>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwelveVarintCustom;
