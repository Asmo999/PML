import React, { useState } from "react";

const ConfirmationStep = ({ stepId, title, handleConfirm, imageSrc }) => {
  const Image = <img src={imageSrc} alt={`Step ${stepId}`} />;
  const [buttonSave,setButtonSave] = useState()
  return (
    <div>
      <div>
        <button>X</button>
      </div>
      <div>
        <div>
          <h3>Step {stepId}</h3>
          <h1>{title}</h1>
          <button onClick={() => handleConfirm(stepId)}>Confirm</button>
        </div>
        <div>
          {Image}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
  