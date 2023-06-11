import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Steps from "./pages/SmartContractSteps/Steps";
import { StepProvider } from "./StepContextProvider";

function App() {
  return (
    <StepProvider>
      <Steps/>
    </StepProvider>
  );
}

export default App;
