import React from "react";
import Leftbtn from "../../../images/Leftarrow.png";
import Rightbtn from "../../../images/rightarrow.png";
import StepSixYes from "./StepSixYes.module.css";
import Rocket from "../../../images/rocket.png";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepSixVariantYes = () => {
  return (
    <>
      <div>
        <div className={StepSixYes.closebtn}>
          <button>X</button>
        </div>
        <div className={StepSixYes.flexbox}>
          <img src={Rocket} alt="Girl-Laptop" />
          <div className={StepSixYes.textbox}>
            <h3>Step 6</h3>
            <h1>Insert the hash</h1>
            <input type="text" placeholder="The hash code"/>
          </div>
        </div>
        <div className={StepSixYes.progrescircle}>
          <CircularProgress value={6} max={14} />   
          <div className={StepSixYes.movebtn}>
            <button><img src={Leftbtn} alt="" /></button>
            <button><img src={Rightbtn} alt="" /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepSixVariantYes;
