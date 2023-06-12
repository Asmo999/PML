import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import stepThirteen from "../StepThirteen/stepThirteen.module.css";
import button from "../../../images/xButton.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";

;
const StepElevenVariantNative = () => {
  return (
      <div className={stepThirteen.container}>
        <div className={stepThirteen.closeContainer}>
          <button className={stepThirteen.button}> <img src={button} alt="X"/></button>
        </div>
        <div className={stepThirteen.content}>
          <div className={stepThirteen.text}>
            <h1>Step 11</h1>
            <h3>Token Price</h3>
          </div>
          <div className={stepThirteen.inputs}>
            <div>
              <input type="text" placeholder="Info from NFT name page"/>
              <input type="Number" placeholder="Price" />
            </div>
            <div>
              <input type="text" placeholder="Info from NFT name page"/>
              <input type="Number" placeholder="Price" />
            </div>
            <div>
              <input type="text" placeholder="Info from NFT name page"/>
              <input type="Number" placeholder="Price" />
            </div>
          </div>
        </div>
        <div className={stepThirteen.footer}>
          <CircularProgress value={7} max={14} />
          <div className={stepThirteen.arrowButtons}>
            <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
            <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
          </div>
        </div>
      </div>
  );
};
export default StepElevenVariantNative;