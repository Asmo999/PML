import React from "react";
import Arrowicon from "../../../images/Leftarrow.png";
import RightarrowIcon from "../../../images/rightarrow.png";
import GirlTableImg from "../../../images/girltable.png"
import StepFourCss from "./StepFour.module.css";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepFour = () => {
  return (
    <>
      <div className={StepFourCss.cnt}>
        <div className={StepFourCss.closebtn}>
          <button>X</button>
        </div>
        <div className={StepFourCss.flx}>
          <img className={StepFourCss.girlimg} src={GirlTableImg} alt="Girl-Laptop" />
          <div>
            <h3>Step 4</h3>
            <h1>Insert the abbreviation</h1>
            <input type="text" placeholder="Symbol"/>
          </div>
        </div>
        <div className={StepFourCss.progress}>
          <CircularProgress value={4} max={14} />   
          <div className={StepFourCss.movebtn}>
            <button><img src={Arrowicon} alt="" /></button>
            <button><img src={RightarrowIcon} alt="" /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFour;
