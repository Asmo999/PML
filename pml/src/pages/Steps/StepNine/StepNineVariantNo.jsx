import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import poster from "../../../images/stepNine2.svg"
import buttonX from "../../../images/xButton.svg";
import stepNine from "./stepNine.module.css"
const StepNineVariantNo = () => {
  return (
    <>
      <div className={stepNine.container}>
        <div className={stepNine.closeContainer}>
          <button className={stepNine.button}><img src={buttonX} alt="X"/></button>
        </div>
        <div className={stepNine.content}>
          <div className={stepNine.text}>
            <h3>Step 9</h3>
            <h1>Choose payment method</h1>
            <button>Native tokens</button>
            <button>Custom ERC20</button>
          </div>
          <img src={poster} alt="Man-Screen" />
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
