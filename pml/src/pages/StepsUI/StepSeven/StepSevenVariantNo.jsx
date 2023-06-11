import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepSevenVariantNo = () => {
  return (
    <div>
      <div>
        <button> X </button>
      </div>

      <div>
        <h1>Step 7</h1>
        <h3>Insert type and value</h3>
        <div>
          <div>
            <input type="text" placeholder="Name(from step6)"/>
            <input type="text" placeholder="Type" />
            <input type="Number" placeholder="Value" />
          </div>
          <div>
            <input type="text" placeholder="Name(from step6)"/>
            <input type="text" placeholder="Type" />
            <input type="Number" placeholder="Value" />
          </div>
          <div>
            <input type="text" placeholder="Name(from step6)"/>
            <input type="text" placeholder="Type" />
            <input type="Number" placeholder="Value" />
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
export default StepSevenVariantNo;
