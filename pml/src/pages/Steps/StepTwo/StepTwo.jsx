import React from "react";
import Leftarrow from "../../../images/Leftarrow.png";
import Rightarrow from "../../../images/rightarrow.png";
import Moneyicon from "../../../images/money.png";
import StepTwoCss from "./StepTwo.module.css";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../../StepContext";
const StepTwo = () => {
  const navigate = useNavigate()
  const { stepData, updateStepData } = useContext(StepContext);
  const [coin , setCoin] = useState(null)

  const buttonHandle = () => {
    updateStepData({ step1Data: coin});
    navigate("/step3")
  }

  const stepDataUpdate = (event) =>   {
    setCoin(event.target.value)
  }
  return (
    <>
      <div className={StepTwoCss.cnt}>
        <div className={StepTwoCss.closebtn}>
          <button>X</button>
        </div>
        <div>
          <div className={StepTwoCss.flx}>
          <div className={StepTwoCss.txt}>
            <h3>Step 2</h3>
            <h1>Choose smart contract <br></br> standart</h1>
            <div className={StepTwoCss.radioinp}>
              <div>
                <input type="radio" name="ERC-721-radio" id="ERC-721-radio" checked={coin === "ERC721"} onChange={stepDataUpdate} value="ERC721"/>
                <label htmlFor="ERC-721-radio">ERC 721</label>
              </div>
              <div>
                <input type="radio" name="ERC-1155-radio" id="ERC-1155-radio" checked={coin === "ERC1155"} onChange={stepDataUpdate} value="ERC1155"/>
                <label htmlFor="ERC-721-radio">ERC 1155</label>
              </div>
            </div>
          </div>
          <img className={StepTwoCss.moneyimg} src={Moneyicon} alt="Money-B" />
          </div>
        </div>
        <div className={StepTwoCss.progres}>
          <CircularProgress value={2} max={14} />
          <div className={StepTwoCss.movebtn}>

            <button><img src={Leftarrow} alt="" /></button>
            <button onClick={buttonHandle}><img src={Rightarrow} alt="" /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
