import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import poster from "../../../images/stepNine2.svg"
import buttonX from "../../../images/xButton.svg";
import stepNine from "./stepNine.module.css"
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
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
            <div className={stepNine.buttons}>
              <button>Native tokens</button>
              <button>Custom ERC20</button>
            </div>

          </div>
          <img src={poster} alt="Man-Screen" />
        </div>
        <div className={stepNine.footer}>
          <CircularProgress value={9} max={14} />
          <div className={stepNine.arrowButtons}>
            <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
            <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
          </div>
        </div>
      </div>
      </>
  );
};

export default StepNineVariantNo;
