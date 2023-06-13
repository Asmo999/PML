import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import button from "../../../images/xButton.svg";
import stepTen from "./stepTen.module.css"
import poster from "../../../images/stepTen2.svg"
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
const StepTenVariantCustom = () => {
  return (
    <>
      <div className={stepTen.container}>
        <div className={stepTen.closeContainer}>
          <button className={stepTen.button}><img src={button} alt="X"/></button>
        </div>
        <div className={stepTen.content}>
          <div className={stepTen.poster}>
             <img src={poster} alt="computer-blockchain" /></div> 
          <div className={stepTen.text}>
            <div>
            <h3>Step 10</h3>
            <h1>Insert valid token address</h1>
            </div>
            <div className={stepTen.input}>
            <input type="text" placeholder="Token address"/>
            </div>
          </div>
        </div>
        <div className={stepTen.footer}>
          <CircularProgress value={10} max={14} />
          <div className={stepTen.arrowButtons}>
            <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
            <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
          </div>
        </div>
        </div>
    </>
  );
};

export default StepTenVariantCustom;
