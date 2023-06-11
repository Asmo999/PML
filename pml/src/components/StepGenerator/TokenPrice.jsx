import React, { useState, useEffect } from "react";
import FileInput from "./FileInputStep.css";

const TokenPriceAndType = ({
  stepId,
  title,
  selectedOption,
  inputPlaceholderNumber,
  handleOptionChange,
  TypeCheck,
}) => {
  const [nameValues, setNameValues] = useState([]);

  useEffect(() => {
    const previousStepValues = selectedOption[6] || [];
    console.log("prev", previousStepValues);
    const names = previousStepValues.map((option) => option["name"]);
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
      <div className="scroll-container">
      {nameValues.map((name, index) => {
          const inputs = selectedOption[stepId] || [];
          const numberValue = inputs[index]
          ? inputs[index][inputPlaceholderNumber] || ""
          : "";
          const typeValue = inputs[index] ? inputs[index]["type"] || "" : "";
          return (
            <div key={index}>
            <input type="text" value={name} readOnly />

            {TypeCheck && <input type="text" placeholder="Type" value={typeValue} onChange={(e) =>
                handleInputChange(e, index, "type")
              }/>}
            <input
              type="number"
              value={numberValue}
              placeholder={inputPlaceholderNumber}
              onChange={(e) =>
                handleInputChange(e, index, `${inputPlaceholderNumber}`)
              }
            />
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default TokenPriceAndType;
