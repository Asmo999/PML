import React from "react";

const Step = ({
  stepId,
  title,
  options,
  selectedOption,
  handleOptionChange,
  inputType,
  photoPosition,
  imageSrc,
  inputPlaceholder,
}) => {
    
  const Image = <img src={imageSrc} alt={`Step ${stepId}`} />;
  return (
    <div>
      <div>
        <button>X</button>
      </div>
      {photoPosition === "before" && Image}
      <h3>Step {stepId}</h3>
      <h1>{title}</h1>
      {inputType === "radio" &&
        options.map((option, index) => (
          <div key={`${title}-${index}`}>
            <input
              type="radio"
              id={`option-${stepId}-${index}`}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(stepId, option)}
            />
            <label htmlFor={`option-${stepId}-${index}`}>{option}</label>
          </div>
        ))}
      {(inputType === "text" || inputType === "Number") && (
  <div>
    <input
      type={inputType}
      id={`option-${stepId}`}
      value={selectedOption || ""}
      placeholder={inputPlaceholder}
      onChange={(e) => handleOptionChange(stepId, e.target.value)}
    />
  </div>
)}

      {photoPosition === "after" && Image}
    </div>
  );
};

export default Step;
