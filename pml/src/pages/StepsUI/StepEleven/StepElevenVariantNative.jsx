import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";;
const StepElevenVariantNative = () => {
  return (
    <div>
      <div>
        <button> X </button>
      </div>

      <div>
        <h1>Step 11</h1>
        <h3>Token Price</h3>
        <div>
          <div>
            <input type="text" placeholder="Info from NFT name page"/>
            <input type="Number" placeholder="Price" />
          </div>
          <div>
            <input type="text" placeholder="Info from NFT name page"/>
            <input type="Number" placeholder="Price" />
          </div>
          <div>
            <input type="text" placeholder="Info from NFT name page"/>
            <input type="Number" placeholder="Price" />
          </div>
        </div>
        <button> + </button>
      </div>
      <div>
        <CircularProgress value={7} max={14} />
        <div>
          <button>Arrow-Circle-Left</button>
          <button>Arrow-Circle-Right</button>
        </div>
      </div>
    </div>
  );
};
export default StepElevenVariantNative;
