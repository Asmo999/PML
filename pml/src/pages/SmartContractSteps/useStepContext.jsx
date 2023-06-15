import { useContext, useEffect, useState } from 'react';
import { StepContext } from '../../StepContext';
import steps from '../StepsInfo';
import stepsVariantYes from '../StepInfoVariantYes';
import stepsVariantNo from '../StepInfoVariantNo';
import stepsVariantNative from '../StepInfoVariantNative';
import stepsVariantCustom from '../stepsInfoVariantCustom';

export const useStepContext = () => {
  const { stepData, updateStepData } = useContext(StepContext);
  const [maxStep, setMaxStep] = useState(14);

  const initialSteps = JSON.parse(sessionStorage.getItem('allSteps')) || steps;
  const initialSelectedOptions = JSON.parse(sessionStorage.getItem('selectedOptions')) || {};
  const initialCurrentStep = Number(sessionStorage.getItem('currentStep')) || 1;
  
  const [allSteps, setAllSteps] = useState(initialSteps);
  const [currentStep, setCurrentStep] = useState(initialCurrentStep);
  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);
  useEffect(() => {
    const baseSteps = steps;
    let variantStepsYesNo = [];
    let variantStepsNative = [];

    if (selectedOptions[5]) {
      variantStepsYesNo = selectedOptions[5] === "Yes" ? stepsVariantYes : stepsVariantNo;
      setMaxStep(selectedOptions[5] === "Yes" ? 9 : 14);
    }
    if(selectedOptions[9]) {
      variantStepsNative = selectedOptions[9] === "Native" ? stepsVariantNative : stepsVariantCustom;
      setMaxStep(selectedOptions[9] === "Native" ? 13 : 14);
    }
    setAllSteps([...baseSteps, ...variantStepsYesNo, ...variantStepsNative]);
  }, [selectedOptions]);

  useEffect(() => {
    sessionStorage.setItem('allSteps', JSON.stringify(allSteps));
  }, [allSteps]);
  

  useEffect(() => {
    sessionStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  const handleOptionChange = (stepId, option) => {
    setSelectedOptions(prevState => ({ ...prevState, [stepId]: option }));
    let newSelectedOptions = { ...selectedOptions, [stepId]: option };
    updateStepData({ [`step${stepId}Data`]: option });

    if (stepId === 5 || stepId === 9) {
      Object.keys(newSelectedOptions).forEach((key) => {
        if (parseInt(key) > stepId) {
          newSelectedOptions[key] = "";
        }
      });
      setSelectedOptions(newSelectedOptions);
      const newSteps = allSteps.filter(step => step.id <= stepId);
      setAllSteps(newSteps);
      if (initialSteps.length === newSteps.length) {
        sessionStorage.setItem('allSteps', JSON.stringify(newSteps));
      }
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
