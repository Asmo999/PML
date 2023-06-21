import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import buttonX from "../../../images/xButton.svg"
import manScreen from "../../../images/stepNine.svg"
import arrow_left from  "../../../images/arrow-left-circle.svg"
import common from "../../common.module.css"
const StepFourteen = () => {
  return (
      <>
        <div className={common.container}>
          <div className={common.closeContainer}>
            <button className={common.button}><img src={buttonX} alt="X"/></button>
          </div>
          <div className={common.content}>
            <div className={common.text}>
              <h3>Step 14</h3>
              <h1>Confirmation to list the product</h1>
              <button className={common.confirm}>Confirm</button>
            </div>
            <img src={manScreen} alt="Man-Screen" />
          </div>
          <div className={common.footer}>
            <CircularProgress value={9} max={9} />
            <div className={common.arrowButtons}>
              <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
            </div>
          </div>
        </div>
      </>
  );
};

export default StepFourteen;
