import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import stepEight from "./stepEight.module.css";
import button from "../../../images/xButton.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
import poster from "../../../images/stepEight.svg"
const StepEightVariantYes = () => {
  return (
    <div className={stepEight.container}>
      <div className={stepEight.closeContainer}>
        <button className={stepEight.button}><img src={button} alt="X"/></button>
      </div>

      <div>
        <h1>Step 8</h1>
        <h3>Choose the market to push</h3>
        <div>
          <div className={stepEight.inputs}>
            <input type="radio" name="Market-radio" id="Market-radio" />
            <label className={stepEight.lbl} htmlFor="Market-radio">Market name</label>
          </div>
          <div>
            <input type="radio" name="Market-radio" id="Market-radio" />
            <label className={stepEight.lbl} htmlFor="Market-radio">Market name</label>
          </div>
          <div>
            <input type="radio" name="Market-radio" id="Market-radio" />
            <label className={stepEight.lbl} htmlFor="Market-radio">Market name</label>
          </div>
          <div>
            <input type="radio" name="Market-radio" id="Market-radio" />
            <label  className={stepEight.lbl} htmlFor="Market-radio">Market name</label>
          </div>
          <img id={stepEight.img}  src={poster} alt="poster"/>
        </div>
      </div>
      <div className={stepEight.footer}>
        <CircularProgress value={8} max={14} />
        <div className={stepEight.arrowButtons}>
          <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
          <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
        </div>
    </div>
    </div>
  );
};
export default StepEightVariantYes;
