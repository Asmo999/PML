import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepThree = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <div>
            <h3>Step 3</h3>
            <h1>Insert Smart contract Name</h1>
            <input type="text" placeholder="Smart contract standart"/>
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

export default StepThree;
