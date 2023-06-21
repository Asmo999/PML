import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import button from "../../../images/xButton.svg";
import poster from "../../../images/stepTen2.svg"
import arrow_left from "../../../images/arrow-left-circle.svg";
import arrow_right from "../../../images/arrow-right-circle.svg";
import stepThirteen from "../StepThirteen/stepThirteen.module.css";
import common from "../../common.module.css"

const StepTenVariantCustom = () => {
    return (
        <>
            <div className={common.container}>
                <div className={common.closeContainer}>
                    <button className={common.button}><img src={button} alt="X"/></button>
                </div>
                <div className={common.content}>
                  <img src={poster} alt="computer-blockchain"/>
                    <div className={common.text}>
                        <div>
                            <h3>Step 10</h3>
                            <h1>Insert valid token address</h1>
                        </div>
                        <div className={common.input}>
                            <input  className={stepThirteen.input_text} type="text" placeholder="Token address"/>
                        </div>
                    </div>
                </div>
                <div className={common.footer}>
                    <CircularProgress value={10} max={14}/>
                    <div className={common.arrowButtons}>
                        <button><img src={arrow_left} alt="Arrow-Circle-Left"/></button>
                        <button><img src={arrow_right} alt="Arrow-Circle-Right"/></button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default StepTenVariantCustom;
