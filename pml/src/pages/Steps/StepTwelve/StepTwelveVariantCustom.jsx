import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import button from "../../../images/xButton.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
import poster from "../../../images/stepTwelve.svg"
import stepThirteen from "../StepThirteen/stepThirteen.module.css";
import common from "../../common.module.css"
const StepTwelveVarintCustom = () => {
  return (
    <>
      <div className={common.container} >
        <div className={common.closeContainer}>
          <button className={common.button}> <img src={button} alt="X"/></button>
        </div>
        <div className={common.content}>
          <div className={common.text}>
            <h3>Step 12</h3>
            <h1>Transaction royalty<br/> amount</h1>
            <input className={stepThirteen.input_num} type="number" placeholder="%"/>
          </div >
          <img src={poster} alt="B-Float" />
        </div>
        <div className={common.footer}>
          <CircularProgress value={3} max={14} />
          <div className={common.arrowButtons}>
            <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
            <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwelveVarintCustom;
