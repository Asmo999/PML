import React from "react";
import CircularProgress from "../../../components/RadialProgressBar/RadialProgressBar";
import { useRef } from "react";
const StepSixVariantNo = () => {
    const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };


  return (
    <div>
      <div>
        <button> X </button>
      </div>
      <div>
        <h1>Step 6</h1>
        <h3>NFT name and quantity</h3>
        <div>
          <div>
            <input ref={inputFile} type="file" alt="Photo" accept="image/jpeg, image/png, image/jpg" style={{display : "none"}} />
            <button onClick={onButtonClick}>Photo</button>
            <input type="text" placeholder="Name" />
            <input type="Number" placeholder="Quantity" />
          </div>
          <div>
            <input ref={inputFile} type="file" alt="Photo" accept="image/jpeg, image/png, image/jpg" style={{display : "none"}} />
            <button onClick={onButtonClick}>Photo</button>
            <input type="text" placeholder="Name" />
            <input type="Number" placeholder="Quantity" />
          </div>
          <div>
            <input ref={inputFile} type="file" alt="Photo" accept="image/jpeg, image/png, image/jpg" style={{display : "none"}} />
            <button onClick={onButtonClick}>Photo</button>
            <input type="text" placeholder="Name" />
            <input type="Number" placeholder="Quantity" />
          </div>
        </div>
        <button> + </button>
      </div>
      <div>
        <CircularProgress value={6} max={14} />
        <div>
          <button>Arrow-Circle-Left</button>
          <button>Arrow-Circle-Right</button>
        </div>
      </div>
    </div>
  );
};
export default StepSixVariantNo;
