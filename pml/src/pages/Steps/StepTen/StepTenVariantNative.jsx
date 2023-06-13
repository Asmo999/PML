import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import stepEleven from "../StepEleven/stepEleven.module.css";
import button from "../../../images/xButton.svg";
import computerPoster from "../../../images/stepTen.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
const StepTenVariantNative = () => {
  return (
    <>
      <div className={stepEleven.container}>
        <div className={stepEleven.closeContainer}>
          <button className={stepEleven.button}><img src={button} alt="X"/></button>
        </div>
        <div className={stepEleven.content}>
          <img src={computerPoster} alt="Man-Screen" />
          <div className={stepEleven.text}>
            <h3>Step 10</h3>
            <h1>Transaction royalty</h1>
            <div className={stepEleven.option}>
              <div>
                <input  type="radio" name="Check-Radio" id="Yes-Check-Radio" value="Yes"/>
                <label htmlFor="Yes-Check-Radio">without royalty</label>
              </div>
              <div>
                <input  type="radio" name="Check-Radio" id="No-Check-Radio" value="No"/>
                <label htmlFor="No-Check-Radio">Royalty enabled</label>
              </div>
            </div>
          </div>
        </div>
        <div className={stepEleven.footer}>
          <CircularProgress value={10} max={14} />
          <div className={stepEleven.arrowButtons}>
            <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
            <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTenVariantNative;
