import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import stepEight from "./stepEight.module.css";
import button from "../../../images/xButton.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
import poster from "../../../images/stepEight.svg"
import common from "../../common.module.css"
const StepEightVariantYes = () => {
  return (
    <div className={common.container}>
      <div className={common.closeContainer}>
        <button className={common.button}><img src={button} alt="X"/></button>
      </div>

      <div className={stepEight.box}>
        <div className={stepEight.box_txt}>
        <h1>Step 8</h1>
        <h3>Choose the market to push</h3>
        </div>
        <div className={stepEight.inputs}>
          <div>
            <input className={common.input} type="radio" name="Market-radio" id="Market-radio" />
            <label className={stepEight.label} htmlFor="Market-radio">Market name</label>
          </div>
          <div>
            <input className={common.input} type="radio" name="Market-radio" id="Market-radio" />
            <label className={stepEight.label} htmlFor="Market-radio">Market name</label>
          </div>
          <div>
            <input className={common.input} type="radio" name="Market-radio" id="Market-radio" />
            <label className={stepEight.label} htmlFor="Market-radio">Market name</label>
          </div>
          <div>
            <input className={common.input} type="radio" name="Market-radio" id="Market-radio" />
            <label className={stepEight.label} htmlFor="Market-radio">Market name</label>
          </div>
        </div>
        <img id={stepEight.img}  src={poster} alt="poster"/>
      </div>
      <div className={common.footer}>
        <CircularProgress value={8} max={14} />
        <div className={common.arrowButtons}>
          <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
          <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
        </div>
    </div>
    </div>
  );
};
export default StepEightVariantYes;
