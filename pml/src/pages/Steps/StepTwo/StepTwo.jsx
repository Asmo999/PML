import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepTwo = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <div>
            <h3>Step 2</h3>
            <h1>Choose smart contract standart</h1>
            <div>
              <div>
                <input type="radio" name="ERC-721-radio" id="ERC-721-radio" />
                <label htmlFor="ERC-721-radio">ERC 721</label>
              </div>
              <div>
                <input type="radio" name="ERC-1155-radio" id="ERC-1155-radio" />
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
            <button>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
