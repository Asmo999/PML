import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepTenVariantNative = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <div>
            <h3>Step 10</h3>
            <h1>Transaction royalty</h1>
            <div>
              <img src="" alt="NFT-coin" />
              <div>
                <input
                  type="radio"
                  name="No-Royalty-Check-Radio"
                  id="No-Royalty-Check-Radio"
                />
                <label htmlFor="No-Royalty-Check-Radio">
                  Without royalty
                </label>
              </div>
              <div>
                <input type="radio" name="No-Check-Radio" id="No-Check-Radio" />
                <label htmlFor="No-Check-Radio">Royalty enabled</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CircularProgress value={10} max={14} />
          <div>
            <button>Arrow-Circle-Left</button>
            <button>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTenVariantNative;
