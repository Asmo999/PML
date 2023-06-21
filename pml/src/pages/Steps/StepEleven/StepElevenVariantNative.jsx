import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import stepThirteen from "../StepThirteen/stepThirteen.module.css";
import button from "../../../images/xButton.svg";
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
import common from "../../common.module.css"



const StepElevenVariantNative = () => {
    return (
        <>
        <div className={common.container}>
            <div className={common.closeContainer}>
                <button className={common.button}><img src={button} alt="X"/></button>
            </div>
            <div className={stepThirteen.content}>
                <div className={stepThirteen.text}>
                    <h1>Step 11</h1>
                    <h3>Token Price</h3>
                </div>
                <div className={stepThirteen.inputs}>
                    <div>
                        <input className={stepThirteen.input_text}  type="text" placeholder="Info from NFT name page"/>
                        <input className={stepThirteen.input_num} type="Number" placeholder="Price"/>
                    </div>
                    <div>
                        <input className={stepThirteen.input_text}  type="text" placeholder="Info from NFT name page"/>
                        <input className={stepThirteen.input_num} type="Number" placeholder="Price"/>
                    </div>
                    <div>
                        <input className={stepThirteen.input_text}  type="text" placeholder="Info from NFT name page"/>
                        <input className={stepThirteen.input_num} type="Number" placeholder="Price"/>
                    </div>
                </div>
            </div>
        </div>
            <div className={common.footer}>
                <CircularProgress value={7} max={14}/>
                <div className={common.arrowButtons}>
                    <button><img src={arrow_left} alt="Arrow-Circle-Left"/></button>
                    <button><img src={arrow_right} alt="Arrow-Circle-Right"/></button>
                </div>
            </div>

        </>
    );
};
export default StepElevenVariantNative;