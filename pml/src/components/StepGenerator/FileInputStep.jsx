import React, { useState, useEffect } from "react";
import FileInput from "./FileInputStep.css";
const FileInputStep = ({
  stepId,
  title,
  inputPlaceholder,
  inputPlaceholderNumber,
  inputCheck,
  handleOptionChange,
  selectedOption,
}) => {
  const [elements, setElements] = useState([`fileInput-${stepId}-0`]);

  useEffect(() => {
    const existingElements = Object.keys(selectedOption || {}).filter((key) =>
      key.includes(`name`)
    );
  });

  const onButtonClick = (id) => {
    document.getElementById(id).click();
  };

  const addElement = () => {
    const newId = `fileInput-${stepId}-${elements.length}`;
    setElements((prevElements) => [...prevElements, newId]);
  };

  const handleInputChange = (e, id, type) => {
    handleOptionChange(`${stepId}-${id}-${type}`, e.target.value);
  };

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleOptionChange(`${stepId}-${id}-file`, reader.result);
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
            const selectedOptions = JSON.parse(
              sessionStorage.getItem("selectedOptions")
            );
            const storedValue =
              selectedOptions[
                `${stepId - 1}-fileInput-${stepId - 1}-${index}-name`
              ];

            return (
              <div key={id}>
                {inputCheck === "Photo" && (
                  <>
                    <input
                      id={id}
                      type="file"
                      alt="Photo"
                      accept="image/jpeg, image/png, image/jpg"
                      style={{ display: "none" }}
                      onChange={(e) => handleFileChange(e, id)}
                    />
                    <button onClick={() => onButtonClick(id)}>Photo</button>
                  </>
                )}
                <input
                  type="text"
                  value={
                    inputCheck === "Photo"
                      ? selectedOption[
                          `${stepId}-fileInput-${stepId}-${index}-name`
                        ] || ""
                      : storedValue
                  }
                  onChange={(e) => handleInputChange(e, id, "name")}
                  readOnly={inputCheck !== "Photo"}
                />
                  {inputCheck === "Text" && (
                    <input
                    type="text"
                    placeholder={inputPlaceholder}
                    value={
                      selectedOption[
                        `${stepId}-fileInput-${stepId}-${index}-${inputPlaceholder}`
                      ] || ""
                    }
                    onChange={(e) => handleInputChange(e, id, `${inputPlaceholder}`)}
                  />
                    )}
                
                <input
                  type="number"
                  placeholder={inputPlaceholderNumber}
                  value={
                    selectedOption[
                      `${stepId}-fileInput-${stepId}-${index}-${inputPlaceholderNumber}`
                    ] || ""
                  }
                  onChange={(e) => handleInputChange(e, id, `${inputPlaceholderNumber}`)}
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
