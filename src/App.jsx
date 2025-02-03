import "./styles/App.css";
import { useState } from "react";
import DetailsForm from "./Components/DetailsForm";
import EducationalExpForm from "./Components/EcucationalExpForm";
function App() {
  return (
    <>
      <DetailsForm />
      <EducationalExpForm />
    </>
  );
}

export default App;
