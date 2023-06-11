import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepSevenVariantYes = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <div>
            <h3>Step 7</h3>
            <h1>Are NFT-s 100% pre-minted?</h1>
            <div>
              <div>
                <input type="radio" name="Yes-Check-Radio" id="Yes-Check-Radio" />
                <label htmlFor="Yes-Check-Radio">Yes,push it on the market</label>
              </div>
              <div>
                <input type="radio" name="No-Check-Radio" id="No-Check-Radio" />
                <label htmlFor="No-Check-Radio">No,add custom features</label>
              </div>
            </div>
          </div>
          <img src="" alt="NFT-coin" />
        </div>
        <div>
          <CircularProgress value={7} max={14} />
          <div>
            <button>Arrow-Circle-Left</button>
            <button>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepSevenVariantYes;
