import React, { useState,useEffect } from "react";
import FileInput from "./FileInputStep.css"
const FileInputStep = ({ stepId, title, inputPlaceholder,inputPlaceholderNumber, handleOptionChange,selectedOption }) => {
  
  const [elements, setElements] = useState([`fileInput-${stepId}-0`]);
  console.log(selectedOption[`${stepId}-fileInput-${stepId}-${0}-name`])
  useEffect(() => {
    const existingElements = Object.keys(selectedOption || {}).filter(key => key.includes(`name`));
    console.log(existingElements[0])
  });
  const onButtonClick = (id) => {
    document.getElementById(id).click();
  };

  const addElement = () => {
    const newId = `fileInput-${stepId}-${elements.length}`;
    setElements(prevElements => [...prevElements, newId]);
  };

  const handleInputChange = (e, id, type) => {
    handleOptionChange(`${stepId}-${id}-${type}`, e.target.value);
  }

  return (
    <div>
      <div>
        <button>X</button>
      </div>
      <div>
        <h1>Step {stepId}</h1>
        <h3>{title}</h3>
        <div className="scroll-container">
          {elements.map((id,index) => (
            
            <div key={id}>
              <input id={id} type="file" alt="Photo" accept="image/jpeg, image/png, image/jpg" style={{display : "none"}} />
              <button onClick={() => onButtonClick(id)}>Photo</button>
              <input 
                type="text" 
                placeholder={inputPlaceholder}
                value={selectedOption[`${stepId}-fileInput-${stepId}-${index}-name`]}
                onChange={(e) => handleInputChange(e, id, 'name')} 
              />
              <input 
                type="number" 
                placeholder={inputPlaceholderNumber} 
                value={selectedOption[`${stepId}-fileInput-${stepId}-${index}-quantity`]}
                onChange={(e) => handleInputChange(e, id, 'quantity')} 
              />
            
            </div>
          ))}
        </div>
        <button onClick={addElement}> +</button>
      </div>
    </div>
  );
};

export default FileInputStep;
