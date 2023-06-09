import React from "react";
import Money from "../../../images/money.png";
import Left from "../../../images/Left.png";
import Right from "../../../images/right.png";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../../StepContext";
import Container from '../Step.module.css';
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
      <div>
        <div className={Container.closebtn}>
          <button>X</button>
        </div>
          <div className={Container.txt}>
            <h3>Step 2</h3>
            <h1>Choose smart contract <br></br> standart</h1>
            <div className={Container.inp}>
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
          <img className={Container.money} src={Money} alt="Money-B" />
        </div>
        <div className={Container.progress}>
          <CircularProgress value={2} max={14} />
          <div className={Container.arrow}>
          <img className={Container.right} src={Right} alt=""/>

            <img className={Container.left} src={Left} alt=""/>
            <button></button>
            <button onClick={buttonHandle}></button>
          </div>
        </div>
    </>
  );
};

export default StepTwo;
