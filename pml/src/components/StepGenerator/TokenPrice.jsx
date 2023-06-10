import React, { useState, useEffect } from "react";

const TokenPriceAndType = ({ stepId, title, selectedOption, inputPlaceholderNumber, handleOptionChange }) => {
  const [nameValues, setNameValues] = useState([]);

  useEffect(() => {
    const previousStepValues = selectedOption[6] || [];
    console.log("prev",previousStepValues)
    const names = previousStepValues.map(option => option['name']);
    setNameValues(names);
  }, [selectedOption, stepId]);

  const handleInputChange = (e, index, type) => {
    let updatedOptions = { ...selectedOption };

    if (!updatedOptions[stepId]) updatedOptions[stepId] = [];

    if (!updatedOptions[stepId][index]) updatedOptions[stepId][index] = {};

    updatedOptions[stepId][index][type] = e.target.value;

    handleOptionChange(stepId, updatedOptions[stepId]);
  };

  return (
    <div>
      <div>
        <button>X</button>
      </div>
      <div>
        <h1>Step {stepId}</h1>
        <h3>{title}</h3>
      </div>
      {nameValues.map((name, index) => (
        <div key={index}>
          <input type="text" value={name} readOnly />
          <input 
            type="number" 
            placeholder={inputPlaceholderNumber} 
            onChange={(e) => handleInputChange(e, index, `${inputPlaceholderNumber}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default TokenPriceAndType;
