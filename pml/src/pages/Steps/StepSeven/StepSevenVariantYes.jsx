import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import stepEight from "../StepEight/stepEight.module.css";
import button from "../../../images/xButton.svg";
import posterNft from "../../../images/stepSeven.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
const StepSevenVariantYes = () => {
  return (
    <>
      <div className={stepEight.container}>
        <div className={stepEight.closeContainer}>
          <button className={stepEight.button}><img src={button} alt="X"/></button>
        </div>
        <div className={stepEight.content}>
          <div className={stepEight.text}>
            <h3>Step 7</h3>
            <h1>Are NFT-s 100% pre-minted?</h1>
            <div className={stepEight.option}>
              <div>
                <input type="radio" name="Check-Radio" id="Yes-Check-Radio" />
                <label htmlFor="Yes-Check-Radio">Yes, push it on the market</label>
              </div>
              <div>
                <input type="radio" name="Check-Radio" id="No-Check-Radio" />
                <label htmlFor="No-Check-Radio">No, add custom features</label>
              </div>
            </div>
          </div>
          <div className={stepEight.poster}>
            <img src={posterNft} alt="NFT-coin" />
          </div>
        </div>

      </div>
      <div className={stepEight.footer}>
        <CircularProgress value={10} max={14} />
        <div className={stepEight.arrowButtons}>
          <button> <img src={arrow_left} alt="Arrow-Circle-Left"/></button>
          <button> <img src={arrow_right} alt="Arrow-Circle-Right"/></button>
        </div>
      </div>
    </>
  );
};

export default StepSevenVariantYes;
