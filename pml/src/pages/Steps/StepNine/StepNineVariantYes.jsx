import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import stepFourteen from "../StepFourteen/sterpFourteen.module.css";
import buttonX from "../../../images/xButton.svg";
import manScreen from "../../../images/stepNine.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";


const StepNineVariantYes = () => {
  return (
    <>
      <div className={stepFourteen.container}>
        <div className={stepFourteen.closeContainer}>
          <button className={stepFourteen.button}><img src={buttonX} alt="X"/></button>
        </div>
        <div className={stepFourteen.content}>
          <div className={stepFourteen.text}>
            <h3>Step 12</h3>
            <h1>Confirmation to list the product</h1>
            <button className={stepFourteen.confirm}>Confirm</button>
          </div>
          <img src={manScreen} alt="Man-Screen" />
        </div>
        <div className={stepFourteen.footer}>
          <CircularProgress value={9} max={14} />
          <div className={stepFourteen.arrowButtons}>
            <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
          </div>
        </div>
      </div>
    </>

  );
};

export default StepNineVariantYes;
