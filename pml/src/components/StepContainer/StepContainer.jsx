// StepContainer.js
import React from 'react';
import Step from '../StepGenerator/StepGen';

const StepContainer = ({ steps, currentStep, selectedOptions, handleOptionChange }) => (
  <div>
    {steps
      .filter(step => step.id === currentStep)
      .map(step => (
        <Step
          key={step.id}
          stepId={step.id}
          title={step.title}
          options={step.options}
          selectedOption={selectedOptions[step.id]}
          handleOptionChange={handleOptionChange}
          photoPosition={step.photoPosition}
          inputType = {step.inputType}
          inputPlaceholder = {step.inputPlaceholder}
          imageSrc={step.imageSrc}
        />
    ))}
  </div>
);

export default StepContainer;
