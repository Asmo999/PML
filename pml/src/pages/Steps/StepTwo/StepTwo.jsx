import React from "react";
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
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <p>ravici aba :d</p>
        </div>
        <div>
          <div>
            <h3>Step 2</h3>
            <h1>Choose smart contract standart</h1>
            <div>
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
          <img src="" alt="Money-B" />
        </div>
        <div>
          <CircularProgress value={2} max={14} />
          <div>
            <button>Arrow-Circle-Left</button>
            <button onClick={buttonHandle}>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
