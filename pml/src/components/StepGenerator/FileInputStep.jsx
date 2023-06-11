import React, { useState } from "react";
import FileInput from "./FileInputStep.css";

const FileInputStep = ({
  stepId,
  title,
  inputPlaceholderNumber,
  handleOptionChange,
  selectedOption,
}) => {
  const initialElements = JSON.parse(
    sessionStorage.getItem(`fileInput-${stepId}`)
  ) || [`fileInput-${stepId}-0`];
  const [elements, setElements] = useState(initialElements);
  const onButtonClick = (id) => {
    document.getElementById(id).click();
  };

  const addElement = () => {
    const newId = `fileInput-${stepId}-${elements.length}`;
    setElements((prevElements) => {
      const updatedElements = [...prevElements, newId];
      sessionStorage.setItem(
        `fileInput-${stepId}`,
        JSON.stringify(updatedElements)
      );
      return updatedElements;
    });
  };

  const handleInputChange = (e, id, type) => {
    let updatedOptions = { ...selectedOption };
    let idComponents = id.split("-");
    let stepId = idComponents[1];
    let index = idComponents[2];

    if (!updatedOptions[stepId]) updatedOptions[stepId] = [];

    if (!updatedOptions[stepId][index]) updatedOptions[stepId][index] = {};

    updatedOptions[stepId][index][type] = e.target.value;

    handleOptionChange(stepId, updatedOptions[stepId]);
  };

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        let updatedOptions = { ...selectedOption };
        let idComponents = id.split("-");
        let stepId = idComponents[1];
        let index = idComponents[2];

        if (!updatedOptions[stepId]) updatedOptions[stepId] = [];

        if (!updatedOptions[stepId][index]) updatedOptions[stepId][index] = {};

        updatedOptions[stepId][index]["file"] = reader.result;

        handleOptionChange(stepId, updatedOptions[stepId]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div>
        <button>X</button>
      </div>
      <div>
        <h1>Step {stepId}</h1>
        <h3>{title}</h3>
        <div className="scroll-container">
          {elements.map((id, index) => {
            const inputs = selectedOption[stepId] || [];
            const nameValue = inputs[index] ? inputs[index]["name"] || "" : "";
            const numberValue = inputs[index]
              ? inputs[index][inputPlaceholderNumber] || ""
              : "";

            return (
              <div key={id}>
                <input
                  id={id}
                  type="file"
                  alt="Photo"
                  accept="image/jpeg, image/png, image/jpg"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, id)}
                />
                <button onClick={() => onButtonClick(id)}>Photo</button>

                <input
                  type="text"
                  value={nameValue}
                  onChange={(e) => handleInputChange(e, id, "name")}
                />

                <input
                  type="number"
                  placeholder={inputPlaceholderNumber}
                  value={numberValue}
                  onChange={(e) =>
                    handleInputChange(e, id, `${inputPlaceholderNumber}`)
                  }
                />
              </div>
            );
          })}
        </div>
        <button onClick={addElement}> +</button>
      </div>
    </div>
  );
};

export default FileInputStep;
