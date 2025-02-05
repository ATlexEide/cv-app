import "./styles/App.css";
import { useState } from "react";
import DetailsForm from "./Components/DetailsForm";
import EducationalExpForm from "./Components/EcucationalExpForm";
import PracticalExpForm from "./Components/PracticalExpForm";
import PreviewFile from "./Components/PreviewFile";
function App() {
  const [person, setPerson] = useState({
    firstName: "Navn",
    lastName: "Navnesen",
    email: "mail@mail.no",
    phone: "12345678",
  });
  const handleDetailChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
    console.log(person);
  };
  return (
    <>
      <section id="inputs">
        <DetailsForm person={person} callback={handleDetailChange} />
        <EducationalExpForm />
        <PracticalExpForm />
      </section>
      <section id="preview">
        <PreviewFile person={person} />
      </section>
    </>
  );
}

export default App;
