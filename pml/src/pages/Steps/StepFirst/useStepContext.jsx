//useStepContext.js
import { useContext, useEffect, useState } from 'react';
import { StepContext } from '../../../StepContext';
import steps from '../../StepsInfo';
import stepsVariantYes from '../../StepInfoVariantYes';
import stepsVariantNo from '../../StepInfoVariantNo';

export const useStepContext = () => {
  const { stepData, updateStepData } = useContext(StepContext);
  const [maxStep, setMaxStep] = useState(14);
  const initialAllSteps = JSON.parse(sessionStorage.getItem('allSteps')) || steps;
  const [allSteps, setAllSteps] = useState(initialAllSteps);
  const [currentStep, setCurrentStep] = useState(Number(sessionStorage.getItem('currentStep')) || 1);
  const [selectedOptions, setSelectedOptions] = useState(JSON.parse(sessionStorage.getItem('selectedOptions')) || {});

  useEffect(() => {
    sessionStorage.setItem('allSteps', JSON.stringify(allSteps));
  }, [allSteps]);

  useEffect(() => {
    sessionStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  useEffect(() => {
    const storedSelectedOptions = JSON.parse(sessionStorage.getItem('selectedOptions')) || {};
    if (storedSelectedOptions[5]) {
      const variantSteps = storedSelectedOptions[5] === "Yes" ? stepsVariantYes : stepsVariantNo;
      setAllSteps([...steps, ...variantSteps]);
      setMaxStep(storedSelectedOptions[5] === "Yes" ? 9 : 14);
    }
    setSelectedOptions(storedSelectedOptions);
    setCurrentStep(Number(sessionStorage.getItem('currentStep')) || 1);
  }, []);

  const handleOptionChange = (stepId, option) => {
    setSelectedOptions(prevState => ({ ...prevState, [stepId]: option }));
    updateStepData({ [`step${stepId}Data`]: option });

    if (stepId === 5) {
      const variantSteps = option === 'Yes' ? stepsVariantYes : stepsVariantNo;
      setMaxStep(option === 'Yes' ? 9 : 14);
      setAllSteps([...steps, ...variantSteps]);
      sessionStorage.setItem('allSteps', JSON.stringify([...steps, ...variantSteps]));
    }
  };

  const buttonHandle = (direction) => {
    if (direction === "next" && currentStep < allSteps.length) {
      setCurrentStep(currentStep + 1);
      sessionStorage.setItem('currentStep', currentStep + 1);
    } else if (direction === "prev" && currentStep > 1) {
      setCurrentStep(currentStep - 1);
      sessionStorage.setItem('currentStep', currentStep - 1);
    }
  };

  return {maxStep, allSteps, currentStep, selectedOptions, handleOptionChange, buttonHandle};
};
