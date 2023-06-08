import React from "react";

const RadioInputStep = ({ stepId, title, options, handleOptionChange, imageSrc }) => {

  return (
    <div>
      <div>
        <button>X</button>
      </div>
      <div>
        <h1>Step {stepId}</h1>
        <h3>{title}</h3>
        <div>
          {options.map((option, index) => (
            <div key={index}>
              <input type="radio" id={`option-${index}`} name="option" value={option} onChange={() => handleOptionChange(stepId, option)} />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <img src={imageSrc} alt={`Step ${stepId}`} />
      </div>
    </div>
  );
};

export default RadioInputStep;
