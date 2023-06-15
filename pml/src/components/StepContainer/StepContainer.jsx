// StepContainer.js
import React from "react";
import Step from "../StepGenerator/StepGen";
import ConfirmationStep from "../StepGenerator/ConfirmationStep";
import FileInputStep from "../StepGenerator/FileInputStep";
import TokenConfirmStep from "../StepGenerator/TokenConfirm";
import TokenPriceAndType from "../StepGenerator/TokenPrice";
import RadioInputStep from "../StepGenerator/RadioInputStep";
const StepContainer = ({
  steps,
  currentStep,
  selectedOptions,
  handleOptionChange,
}) => {
  console.log("this ",steps)
  console.log("it came here")
  const currentStepData = steps.find((step) => step.id === currentStep);
  console.log("current",currentStepData.inputType)
  if (currentStepData.tokenConfirm === "token") {
    return (
      <TokenConfirmStep
        key={currentStep}
        stepId={currentStepData.id}
        title={currentStepData.title}
        handleOptionChange={handleOptionChange}
        imageSrc={currentStepData.imageSrc}
        
      />
    );
  }
  else if (currentStepData.inputType === "radio") {
    return (
      <RadioInputStep
        key={currentStep}
        stepId={currentStepData.id}
        title={currentStepData.title}
        handleConfirm={handleOptionChange}
        imageSrc={currentStepData.imageSrc}
        options={currentStepData.options}
        handleOptionChange={handleOptionChange}
      />
    );
  }
  else if (steps.length === currentStep) {
    return (
      <ConfirmationStep
        key={currentStep}
        stepId={currentStepData.id}
        title={currentStepData.title}
        handleConfirm={handleOptionChange}
        imageSrc={currentStepData.imageSrc}
      />
    );
  } 
  else if (steps[currentStep - 1].inputType === "file") {
    return (
      <FileInputStep
        key={currentStep}
        stepId={currentStepData.id}
        title={currentStepData.title}
        options={currentStepData.options}
        selectedOption={selectedOptions}
        handleOptionChange={handleOptionChange}
        inputPlaceholder={currentStepData.inputPlaceholder}
        inputPlaceholderNumber={currentStepData.inputPlaceholderNumber}
        inputCheck={currentStepData.inputCheck}
      />
    );
  }
  else if (steps[currentStep - 1].inputType === "tokenPTV") {
    return (
      <TokenPriceAndType
        stepId={currentStepData.id}
        title={currentStepData.title}
        selectedOption={selectedOptions}
        inputPlaceholderNumber={currentStepData.inputPlaceholderNumber}
        handleOptionChange={handleOptionChange}
        TypeCheck={currentStepData.typeCheck}
      />
    );
  }
   else {  
    return (
      <Step
        key={currentStep}
        stepId={currentStepData.id}
        title={currentStepData.title}
        options={currentStepData.options}
        selectedOption={selectedOptions[currentStep]}
        handleOptionChange={handleOptionChange}
        inputType={currentStepData.inputType}
        photoPosition={currentStepData.photoPosition}
        imageSrc={currentStepData.imageSrc}
        inputPlaceholder={currentStepData.inputPlaceholder}
      />
    );
  }
};

export default StepContainer;
