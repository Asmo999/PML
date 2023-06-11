import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepTenVariantCustom = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <img src="" alt="computer-blockchain" />
          <div>
            <h3>Step 10</h3>
            <h1>Insert valid token address</h1>
            <input type="text" placeholder="Token address"/>
          </div>
        </div>
        <div>
          <CircularProgress value={10} max={14} />   
          <div>
            <button>Arrow-Circle-Left</button>
            <button>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTenVariantCustom;
