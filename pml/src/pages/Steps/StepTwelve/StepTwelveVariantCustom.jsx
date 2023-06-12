import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import button from "../../../images/xButton.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
import poster from "../../../images/stepTwelve.svg"
import stepTwelve from "./stepTwelve.module.css"
const StepTwelveVarintCustom = () => {
  return (
    <>
      <div className={stepTwelve.container} >
        <div className={stepTwelve.closeContainer}>
          <button className={stepTwelve.button}> <img src={button} alt="X"/></button>
        </div>
        <div className={stepTwelve.content}>
          <div className={stepTwelve.text}>
            <h3>Step 12</h3>
            <h1>Transaction royalty amount</h1>
            <input type="number" placeholder="%"/>
          </div >
          <div className={stepTwelve.poster}>
          <img src={poster} alt="B-Float" />
          </div>
        </div>
        <div className={stepTwelve.footer}>
          <CircularProgress value={3} max={14} />
          <div className={stepTwelve.arrowButtons}>
            <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
            <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwelveVarintCustom;
