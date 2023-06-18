import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import button from "../../../images/xButton.svg";
import computerPoster from "../../../images/stepEleven.svg"
import stepEleven from "./stepEleven.module.css"
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";


const StepElevenVariantCustom = () => {
  return (
    <>
      <div className={stepEleven.container}>
        <div className={stepEleven.closeContainer}>
          <button className={stepEleven.button}><img src={button} alt="X"/></button>
        </div>
        <div className={stepEleven.content}>
          {/* <img src={computerPoster} alt="Man-Screen" /> */}
          <div className={stepEleven.text}>
            <h3>Step 11</h3>
            <h1>Transaction royalty</h1>
            <div className={stepEleven.option}>
              <div>
                <input  type="radio" name="Check-Radio" id="Yes-Check-Radio" value="Yes"/>
                <label htmlFor="Yes-Check-Radio">without royalty</label>
              </div>
              <div>
                <input  type="radio" name="Check-Radio" id="No-Check-Radio" value="No"/>
                <label  htmlFor="No-Check-Radio">Royalty enabled</label>
              </div>
            </div>
          </div>
        </div>
        <div className={stepEleven.footer}>
          <CircularProgress value={11} max={14} />
          <div className={stepEleven.arrowButtons}>
          <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
          <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
        </div>
        </div>
      </div>
    </>
  );
};

export default StepElevenVariantCustom;
