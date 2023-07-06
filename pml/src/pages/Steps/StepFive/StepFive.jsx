import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import man from "../../../images/stepFifth.svg"
import button from "../../../images/xButton.svg"
import arrow_right from "../../../images/arrow-right-circle.svg"
import arrow_left from "../../../images/arrow-left-circle.svg"
import common from "../../common.module.css"
import stepEight from "../StepEight/stepEight.module.css";




const StepFive = () => {
  return (
    <>
      <div className={common.container}>
        <div className={common.closeContainer}>
          <button className={common.button}><img src={button} alt="X"/></button>
        </div>
        <div className={common.content}>
          <div className={common.text}>
            <h3>Step 5</h3>
            <h1>Has your collection<br/> already been uploaded?</h1>
            <div className={stepEight.option}>
              <div>
                <input className={common.input} type="radio" name="Check-Radio" id="Yes-Check-Radio" value="Yes"/>
                <label className={stepEight.label} htmlFor="Yes-Check-Radio">Yes</label>
              </div>
              <div>
                <input className={common.input} type="radio" name="Check-Radio" id="No-Check-Radio" value="No"/>
                <label className={stepEight.label} htmlFor="No-Check-Radio">No</label>
              </div>
            </div>
          </div>
          <img src={man} alt="Man-Screen" />
        </div>
        
        <div className={common.footer}>
          <CircularProgress value={5} max={14} />
          <div className={common.arrowButtons}>
            <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
            <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFive;
