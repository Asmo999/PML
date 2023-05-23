// StepContainer.js
import React from "react";
import Step from "../StepGenerator/StepGen";
import ConfirmationStep from "../StepGenerator/ConfirmationStep";
import FileInputStep from "../StepGenerator/FileInputStep";

const StepContainer = ({
  steps,
  currentStep,
  selectedOptions,
  handleOptionChange,
}) => {
  
  const currentStepData = steps.find((step) => step.id === currentStep);
  console.log(steps[currentStep - 1].inputType === "file")
  console.log("these is",selectedOptions[6])
  if (currentStepData.id === 9) {
    return (
      <ConfirmationStep
        key={currentStep}
        stepId={currentStepData.id}
        title={currentStepData.title}
        handleConfirm={handleOptionChange}
        imageSrc={currentStepData.imageSrc}
        inputPlaceholderNumber= ""
      />
    );
  } else if (steps[currentStep - 1].inputType === "file") {
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
      />
    );
  } else {
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
