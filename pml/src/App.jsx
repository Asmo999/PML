import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SmartContract from "./pages/SmartContract";
import StepFirst from "./pages/Steps/StepFirst/StepFirst";
import StepTwo from "./pages/Steps/StepTwo/StepTwo";
import StepThree from "./pages/Steps/StepThree/StepThree";
import StepFour from "./pages/Steps/StepFour/StepFour";
import StepFive from "./pages/Steps/StepFive/StepFive";
import StepSixVariantYes from "./pages/Steps/StepSix/StepSixVariantYes";
import StepSixVariantNo from "./pages/Steps/StepSix/StepSixVariantNo";
import StepSevenVariantNo from "./pages/Steps/StepSeven/StepSevenVariantNo";
import StepSevenVariantYes from "./pages/Steps/StepSeven/StepSevenVariantYes";
import StepEightVariantNo from "./pages/Steps/StepEight/StepEightVariantNo";
import StepEightVariantYes from "./pages/Steps/StepEight/StepEightVariantYes";
import StepNineVariantNo from "./pages/Steps/StepNine/StepNineVariantNo";
import StepNineVariantYes from "./pages/Steps/StepNine/StepNineVariantYes";
import StepTenVariantCustom from "./pages/Steps/StepTen/StepTenVariantCustom";
import StepTenVariantNative from "./pages/Steps/StepTen/StepTenVariantNative";
import StepElevenVariantCustom from "./pages/Steps/StepEleven/StepElevenVariantCustom";
import StepElevenVariantNative from "./pages/Steps/StepEleven/StepElevenVariantNative";
import StepTwelveVarintCustom from "./pages/Steps/StepTwelve/StepTwelveVariantCustom";
import StepTwelveVaraintNative from "./pages/Steps/StepTwelve/StepTwelveVariantNative";
import StepThirteen from "./pages/Steps/StepThirteen/StepThirteen";
import StepFourteen from "./pages/Steps/StepFourteen/StepFourteen";
import { StepProvider } from "./StepContextProvider";

function App() {
  return (
    <StepProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SmartContract />} />
          <Route path="/step1" element={<StepFirst />} />
          <Route path="/step2" element={<StepTwo />} />
          <Route path="/step3" element={<StepThree />} />
          <Route path="/step4" element={<StepFour />} />
          <Route path="/step5" element={<StepFive />} />
          <Route path="/step6-yes" element={<StepSixVariantYes />} />
          <Route path="/step6-no" element={<StepSixVariantNo />} />
          <Route path="/step7-yes" element={<StepSevenVariantYes />} />
          <Route path="/step7-no" element={<StepSevenVariantNo />} />
          <Route path="/step8-yes" element={<StepEightVariantYes />} />
          <Route path="/step8-no" element={<StepEightVariantNo />} />
          <Route path="/step9-yes" element={<StepNineVariantYes />} />
          <Route path="/step9-no" element={<StepNineVariantNo />} />
          <Route path="/step10-custom" element={<StepTenVariantCustom />} />
          <Route path="/step10-native" element={<StepTenVariantNative />} />
          <Route path="/step11-custom" element={<StepElevenVariantCustom />} />
          <Route path="/step11-native" element={<StepElevenVariantNative />} />
          <Route path="/step12-custom" element={<StepTwelveVarintCustom />} />
          <Route path="/step12-native" element={<StepTwelveVaraintNative />} />
          <Route path="/step13" element={<StepThirteen />} />
          <Route path="/step14" element={<StepFourteen />} />
        </Routes>
      </Router>
    </StepProvider>
  );
}

export default App;
