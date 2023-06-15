import React, { useEffect, useState } from "react";

const RadioInputStep = ({ stepId, title, options, handleOptionChange, imageSrc }) => {
  const [selectedOption, setSelectedOption] = useState(localStorage.getItem(stepId) || "");

  useEffect(() => {
    localStorage.setItem(stepId, selectedOption);
  }, [selectedOption, stepId]);

  const handleRadioChange = (option) => {
    handleOptionChange(stepId, option);
    setSelectedOption(option);
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
          {options.map((option, index) => (
            <div key={index}>
              <input 
                type="radio" 
                id={`option-${index}`} 
                name="option" 
                value={option} 
                checked={selectedOption === option} 
                onChange={() => handleRadioChange(option)} 
              />
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
