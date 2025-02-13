import "./styles/App.css";
import { useState } from "react";
import DetailsForm from "./Components/Forms/DetailsForm";
import EducationalExpForm from "./Components/Forms/EcucationalExpForm";
import PracticalExpForm from "./Components/Forms/PracticalExpForm";
import PreviewFile from "./Components/PreviewFile";
function App() {
  // TODO: Remove testdata when done
  const testData = [
    {
      id: 0,
      school: "Holen",
      degree: "Comp Science",
      timeFrom: "2001-01-01",
      timeTo: "2002-02-02",
      desc: "asdaqdasdasd",
    },
    {
      id: 1,
      school: "Damsgård",
      degree: "Science Science",
      timeFrom: "2001-01-01",
      timeTo: "2002-02-02",
      desc: "asdaqdasdasd",
    },
    {
      id: 2,
      school: "UwU School",
      degree: "Furry Science",
      timeFrom: "2001-01-01",
      timeTo: "2002-02-02",
      desc: "asdaqdasdasd",
    },
  ];
  // TODO END
  const [person, setPerson] = useState({
    firstName: "Navn",
    lastName: "Navnesen",
    email: "mail@mail.no",
    phone: "12345678",
  });
  const [education, setEducation] = useState(testData);
  const handleDetailChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
    console.log(person);
  };
  // TODO: Remove hardcoded value
  const addExperience = (edu) => {
    console.log(edu);
    setEducation([...education, edu]);
  };
  return (
    <>
      <section id="inputs">
        <DetailsForm person={person} callback={handleDetailChange} />
        <EducationalExpForm
          education={education}
          setEducation={setEducation}
          addExperience={addExperience}
        />
        <PracticalExpForm addExperience={addExperience} />
      </section>
      <section id="preview">
        <PreviewFile
          education={education}
          setEducation={setEducation}
          person={person}
        />
      </section>
    </>
  );
}

export default App;
