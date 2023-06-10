import { useContext, useEffect, useState } from 'react';
import { StepContext } from '../../../StepContext';
import steps from '../../StepsInfo';
import stepsVariantYes from '../../StepInfoVariantYes';
import stepsVariantNo from '../../StepInfoVariantNo';
import stepsVariantNative from '../../StepInfoVariantNative';
import stepsVariantCustom from '../../SmartContract';

export const useStepContext = () => {
  const { stepData, updateStepData } = useContext(StepContext);
  const [maxStep, setMaxStep] = useState(14);
  const initialSteps = JSON.parse(sessionStorage.getItem('allSteps')) || steps;
  const [baseSteps, setBaseSteps] = useState(initialSteps);
  const [variantStepsYesNo, setVariantStepsYesNo] = useState([]);
  const [variantStepsNative, setVariantStepsNative] = useState([]);
  const [currentStep, setCurrentStep] = useState(Number(sessionStorage.getItem('currentStep')) || 1);
  const [selectedOptions, setSelectedOptions] = useState(JSON.parse(sessionStorage.getItem('selectedOptions')) || {});

  useEffect(() => {
    sessionStorage.setItem('allSteps', JSON.stringify([...baseSteps, ...variantStepsYesNo, ...variantStepsNative]));
    console.log("effect 3")
  }, [baseSteps, variantStepsYesNo, variantStepsNative]);

  useEffect(() => {
    sessionStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    console.log("effect 4")
  }, [selectedOptions]);

  useEffect(() => {
    console.log("effect 1")
    const storedSelectedOptions = JSON.parse(sessionStorage.getItem('selectedOptions')) || {};
    if (storedSelectedOptions[5]) {
      const newVariantSteps = storedSelectedOptions[5] === "Yes" ? stepsVariantYes : stepsVariantNo;
      setVariantStepsYesNo(newVariantSteps);
      setMaxStep(storedSelectedOptions[5] === "Yes" ? 9 : 14);
    }
    if(storedSelectedOptions[9]) {
      const newVariantSteps = storedSelectedOptions[9] === "Native" ? stepsVariantNative : stepsVariantCustom;
      setVariantStepsNative(newVariantSteps);
      setMaxStep(storedSelectedOptions[9] === "Native" ? 12 : 14);
    }
    setSelectedOptions(storedSelectedOptions);
    setCurrentStep(Number(sessionStorage.getItem('currentStep')) || 1);
  }, []);

  const handleOptionChange = (stepId, option) => {
    setSelectedOptions(prevState => ({ ...prevState, [stepId]: option }));
    updateStepData({ [`step${stepId}Data`]: option });

    if (stepId === 5) {
      const newVariantSteps = option === 'Yes' ? stepsVariantYes : stepsVariantNo;
      setMaxStep(option === 'Yes' ? 9 : 14);
      setVariantStepsYesNo(newVariantSteps);
      Object.keys(selectedOptions).forEach((key) => {
        if (parseInt(key) > 5) {
          console.log("j",selectedOptions[key])
          delete selectedOptions[key];
        }
      });
    }
    if (stepId === 9) {
      console.log("container",baseSteps)
      const newVariantSteps = option === 'Native' ? stepsVariantNative : stepsVariantCustom;
      setMaxStep(option === 'Native' ? 12 : 14);
      setVariantStepsNative(newVariantSteps);
    }
  };

  const buttonHandle = (direction) => {
    if (direction === "next" && currentStep < baseSteps.length + variantStepsYesNo.length + variantStepsNative.length) {
      setCurrentStep(currentStep + 1);
      sessionStorage.setItem('currentStep', currentStep + 1);
    } else if (direction === "prev" && currentStep > 1) {
      setCurrentStep(currentStep - 1);
      sessionStorage.setItem('currentStep', currentStep - 1);
    }
  };

  return {maxStep, allSteps: [...baseSteps, ...variantStepsYesNo, ...variantStepsNative], currentStep, selectedOptions, handleOptionChange, buttonHandle};
};
