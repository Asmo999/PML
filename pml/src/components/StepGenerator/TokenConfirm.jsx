import React, { useEffect, useState } from "react";

const TokenConfirmStep = ({ stepId, title, imageSrc,handleOptionChange }) => {
  const Image = <img src={imageSrc} alt={`Step ${stepId}`} />;
  const [buttonSave,setButtonSave] = useState()
  useEffect(() => {
    handleOptionChange(stepId,buttonSave)
  },[buttonSave])
  return (
    <div>
      <div>
        <button>X</button>
      </div>
      <div>
        <div>
          <h3>Step {stepId}</h3>
          <h1>{title}</h1>
          <button onClick={() => setButtonSave("Native")}>Native tokens</button>
          <button onClick={() => setButtonSave("Custom")}>Custom ERC20</button>
        </div>
        <div>
          {Image}
        </div>
      </div>
    </div>
  );
};

export default TokenConfirmStep;
  