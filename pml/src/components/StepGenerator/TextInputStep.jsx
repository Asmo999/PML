import React from "react";

const TextInputStep = ({ stepId, title, handleOptionChange, imageSrc, inputPlaceholder }) => {
  const handleInputChange = (event) => {
    handleOptionChange(stepId, event.target.value);
  };

  return (
    <div>
      <div>
        <button>X</button>
      </div>
      <div>
        <h1>Step {stepId}</h1>
        <h3>{title}</h3>
        <div>
          <input type="text" onChange={handleInputChange} placeholder={inputPlaceholder} />
        </div>
        <img src={imageSrc} alt={`Step ${stepId}`} />
      </div>
    </div>
  )
};

export default TextInputStep;
