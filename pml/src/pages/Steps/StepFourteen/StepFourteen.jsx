import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepNineVariantYes = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <div>
            <h3>Step 14</h3>
            <h1>Confirm to list the product</h1>
            <button>Confirm</button>
          </div>
          <img src="" alt="Man-Screen" />
        </div>
        <div>
          <CircularProgress value={9} max={9} />
          <button>Arrow-Circle-Left</button>
        </div>
      </div>
    </>
  );
};

export default StepNineVariantYes;
