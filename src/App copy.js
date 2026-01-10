import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import K1Universal from "./pages/K1Universal";
import BmoreFoodies from "./pages/BmoreFoodies";
import ItsTechE from "./pages/ItsTechE";
import MakeupAndMimosas from "./pages/MakeupAndMimosas";
import TMEExperience from "./pages/TMEExperience";
import YouWannaKnowSomething from "./pages/YouWannaKnowSomething";
import BeyondTheSpine from "./pages/BeyondTheSpine";
import K1Cleaning from "./pages/K1Cleaning";
import BlackInBusiness from "./pages/BlackInBusiness";
import BusinessInBlack from "./pages/BusinessInBlack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/k1universal" element={<K1Universal />} />
        <Route path="/bmorefoodies" element={<BmoreFoodies />} />
        <Route path="/itsteche" element={<ItsTechE />} />
        <Route path="/makeupandmimosas" element={<MakeupAndMimosas />} />
        <Route path="/tmeexperience" element={<TMEExperience />} />
        <Route path="/youwannaknowsomething" element={<YouWannaKnowSomething />} />
        <Route path="/beyondthespine" element={<BeyondTheSpine />} />
        <Route path="/k1cleaning" element={<K1Cleaning />} />
        <Route path="/blackinbusiness" element={<BlackInBusiness />} />
        <Route path="/businessinblack" element={<BusinessInBlack />} />
      </Routes>
    </Router>
  );
}

export default App;
