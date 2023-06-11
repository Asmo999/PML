import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepEightVariantYes = () => {
  return (
    <div>
      <div>
        <button> X </button>
      </div>

      <div>
        <h1>Step 8</h1>
        <h3>Choose the market to push</h3>
        <div>
          <div>
            <input type="radio" name="Market-radio" id="Market-radio" />
            <label htmlFor="Market-radio">Market name</label>
          </div>
          <div>
            <input type="radio" name="Market-radio" id="Market-radio" />
            <label htmlFor="Market-radio">Market name</label>
          </div>
          <div>
            <input type="radio" name="Market-radio" id="Market-radio" />
            <label htmlFor="Market-radio">Market name</label>
          </div>
          <div>
            <input type="radio" name="Market-radio" id="Market-radio" />
            <label htmlFor="Market-radio">Market name</label>
          </div>
        </div>
      </div>
      <div>
        <CircularProgress value={8} max={14} />
        <img src="" alt="Crypto-coins" />
        <div>
          <button>Arrow-Circle-Left</button>
          <button>Arrow-Circle-Right</button>
        </div>
      </div>
    </div>
  );
};
export default StepEightVariantYes;
