import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
const StepFive = () => {
  return (
    <>
      <div>
        <div>
          <button>X</button>
        </div>
        <div>
          <div>
            <h3>Step 5</h3>
            <h1>Has your collection already been uploaded?</h1>
            <div>
              <div>
                <input type="radio" name="Yes-Check-Radio" id="Yes-Check-Radio" />
                <label htmlFor="Yes-Check-Radio">Yes</label>
              </div>
              <div>
                <input type="radio" name="No-Check-Radio" id="No-Check-Radio" />
                <label htmlFor="No-Check-Radio">No</label>
              </div>
            </div>
          </div>
          <img src="" alt="Man-Screen" />
        </div>
        <div>
          <CircularProgress value={5} max={14} />
          <div>
            <button>Arrow-Circle-Left</button>
            <button>Arrow-Circle-Right</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFive;
