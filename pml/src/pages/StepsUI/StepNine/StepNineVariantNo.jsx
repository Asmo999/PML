import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepNineVariantNo = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <div>
            <h3>Step 9</h3>
            <h1>Choose payment method</h1>
            <button>Native tokens</button>
            <button>Custom ERC20</button>
          </div>
          <img src="" alt="Man-Screen" />
        </div>
        <div>
          <CircularProgress value={9} max={14} />
          <div>
            <button>Arrow-Circle-Left</button>
            <button>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepNineVariantNo;
