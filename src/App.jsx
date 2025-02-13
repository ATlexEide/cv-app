import "./styles/App.css";
import { useState } from "react";
import DetailsForm from "./Components/Forms/DetailsForm";
import EducationalExpForm from "./Components/Forms/EcucationalExpForm";
import PracticalExpForm from "./Components/Forms/PracticalExpForm";
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
  const addCard = () => {
    alert("yipp");
  };
  return (
    <>
      <section id="inputs">
        <DetailsForm person={person} callback={handleDetailChange} />
        <EducationalExpForm addCard={addCard} />
        <PracticalExpForm />
      </section>
      <section id="preview">
        <PreviewFile person={person} />
      </section>
    </>
  );
}

export default App;
