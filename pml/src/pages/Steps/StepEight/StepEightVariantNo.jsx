import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import button from "../../../images/xButton.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
import stepEight from "./stepEight.module.css"
import posterNft from "../../../images/stepSeven.svg"
import common from "../../common.module.css"

const StepEightVariantNo = () => {
    return (
        <>
            <div className={common.container}>
                <div className={common.closeContainer}>
                    <button className={common.button}><img src={button} alt="X"/></button>
                </div>
                <div className={common.content}>
                    <div className={common.text}>
                        <h3>Step 8</h3>
                        <h1>Are NFT-s 100% <br/>pre-minted?</h1>
                        <div className={stepEight.option}>
                            <div>
                                <input className={common.input} type="radio" name="Check-Radio" id="Yes-Check-Radio"/>
                                <label className={stepEight.label} htmlFor="Yes-Check-Radio">Yes, push it on the market</label>
                            </div>
                            <div>
                                <input className={common.input} type="radio" name="Check-Radio" id="No-Check-Radio"/>
                                <label className={stepEight.label}  htmlFor="No-Check-Radio">No, add custom features</label>
                            </div>
                        </div>
                    </div>
                    <img id={stepEight.image} src={posterNft} alt="NFT-coin"/>
                </div>

            </div>
            <div className={common.footer}>
                <CircularProgress value={8} max={14}/>
                <div className={common.arrowButtons}>
                    <button><img src={arrow_left} alt="Arrow-Circle-Left"/></button>
                    <button><img src={arrow_right} alt="Arrow-Circle-Right"/></button>
                </div>

            </div>
        </>
    );
};

export default StepEightVariantNo;
