//StepFirst.js
import React from "react";
import { useStepContext } from './useStepContext';
import StepContainer from "../../components/StepContainer/StepContainer";
import ProgressBar from "../../components/RadialProgressBar/ProgressBar";
import StepButton from "../../components/StepButton/StepButton";

const StepFirst = () => {
  const {maxStep, allSteps, currentStep, selectedOptions, handleOptionChange, buttonHandle} = useStepContext();
  console.log("cr",currentStep)
  return (
    <>
      <StepContainer
        steps={allSteps}
        currentStep={currentStep}
        selectedOptions={selectedOptions}
        handleOptionChange={handleOptionChange}
      />
      <ProgressBar value={currentStep} max={maxStep} />
      <StepButton direction="prev" handleClick={buttonHandle} />
      <StepButton direction="next" handleClick={buttonHandle} />
    </>
  );
};

export default StepFirst;
