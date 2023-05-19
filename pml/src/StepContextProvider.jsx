import React, { useState, useEffect } from 'react';
import { StepContext } from './StepContext';

export function StepProvider({ children }) {
    const [stepData, setStepData] = useState(
        JSON.parse(sessionStorage.getItem('stepData')) || {}
    );

    useEffect(() => {
        sessionStorage.setItem('stepData', JSON.stringify(stepData));
    }, [stepData]);

    const updateStepData = (newData) => {
        setStepData(prevData => ({
            ...prevData,
            ...newData
        }));
        console.log(stepData)
    }

    return (
        <StepContext.Provider value={{ stepData, updateStepData }}>
            {children}
        </StepContext.Provider>
    )
}