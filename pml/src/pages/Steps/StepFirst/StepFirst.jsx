import React, { useState, useContext,useEffect } from "react";
import { StepContext } from "../../../StepContext";
import Step from "../../../components/StepGenerator/StepGen";
import steps from "../../StepsInfo";
import StepContainer from "../../../components/StepContainer/StepContainer";
import ProgressBar from "../../../components/RadialProgressBar/ProgressBar";
import StepButton from "../../../components/StepButton/StepButton";
const StepFirst = () => {
  const { stepData, updateStepData } = useContext(StepContext);
  const [selectedOptions, setSelectedOptions] = useState(
    JSON.parse(sessionStorage.getItem('selectedOptions')) || {}
  );

  const [currentStep, setCurrentStep] = useState(
    parseInt(sessionStorage.getItem('currentStep')) || 1
  );

  useEffect(() => {
    sessionStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  useEffect(() => {
    sessionStorage.setItem('currentStep', currentStep);
  }, [currentStep]);
  
  const handleOptionChange = (stepId, option) => {
    setSelectedOptions(prevState => ({ ...prevState, [stepId]: option }));
    updateStepData({ [`step${stepId}Data`]: option });
  };

  const buttonHandle = (direction) => {
    if (direction === "next" && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
    else if (direction === "prev" && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <>
      <StepContainer
        steps={steps}
        currentStep={currentStep}
        selectedOptions={selectedOptions}
        handleOptionChange={handleOptionChange}
      />
      <ProgressBar value={currentStep} max={14} />
      <StepButton direction="prev" handleClick={buttonHandle} />
      <StepButton direction="next" handleClick={buttonHandle} />
    </>
  );
};

export default StepFirst;
