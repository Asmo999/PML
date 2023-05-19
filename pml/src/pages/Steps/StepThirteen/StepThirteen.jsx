import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";;
const StepThirteen = () => {
  return (
    <div>
      <div>
        <button> X </button>
      </div>

      <div>
        <h1>Step 13</h1>
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
        <CircularProgress value={13} max={14} />
        <div>
          <button>Arrow-Circle-Left</button>
          <button>Arrow-Circle-Right</button>
        </div>
      </div>
    </div>
  );
};
export default StepThirteen;
