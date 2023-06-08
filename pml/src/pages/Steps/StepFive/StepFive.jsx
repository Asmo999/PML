import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import stepFive from  "./stepFive.module.css"
import man from "../../../images/stepFifth.svg"
import button from "../../../images/xButton.svg"
import arrow_right from "../../../images/arrow-right-circle.svg"
import arrow_left from "../../../images/arrow-left-circle.svg"




const StepFive = () => {
  return (
    <>
      <div className={stepFive.container}>
        <div className={stepFive.closeContainer}>
          <button className={stepFive.button}><img src={button} alt="X"/></button>
        </div>
        <div className={stepFive.content}>
          <div className={stepFive.text}>
            <h3>Step 5</h3>
            <h1>Has your collection<br/> already been uploaded?</h1>
            <div className={stepFive.option}>
              <div>
                <input  type="radio" name="Check-Radio" id="Yes-Check-Radio" value="Yes"/>
                <label htmlFor="Yes-Check-Radio">Yes</label>
              </div>
              <div>
                <input  type="radio" name="Check-Radio" id="No-Check-Radio" value="No"/>
                <label htmlFor="No-Check-Radio">No</label>
              </div>
            </div>
          </div>
          <img src={man} alt="Man-Screen" />
        </div>

        <div className={stepFive.footer}>
          <CircularProgress value={5} max={14} />
          <div className={stepFive.arrowButtons}>
            <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
            <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFive;
