import "./styles/App.css";
import { useState } from "react";
import DetailsForm from "./Components/Forms/DetailsForm";
import ExperienceForm from "./Components/Forms/ExperienceForm";
import PreviewFile from "./Components/PreviewFile";
import EditDialog from "./Components/EditDialog";
function App() {
  // TODO: Remove testdata when done
  const testData = [
    {
      id: crypto.randomUUID(),
      school: "Holen",
      degree: "Comp Science",
      timeFrom: "2001-01-01",
      timeTo: "2002-02-02",
      desc: "asdaqdasdasd",
    },
    {
      id: crypto.randomUUID(),
      school: "Damsgård",
      degree: "Science Science",
      timeFrom: "2001-01-01",
      timeTo: "2002-02-02",
      desc: "asdaqdasdasd",
    },
    {
      id: crypto.randomUUID(),
      school: "UwU School",
      degree: "Furry Science",
      timeFrom: "2001-01-01",
      timeTo: "2002-02-02",
      desc: "asdaqdasdasd",
    },
  ];
  const testData2 = [
    {
      id: crypto.randomUUID(),
      company: "Some workplace",
      title: "Comp Science",
      timeFrom: "2001-01-01",
      timeTo: "2002-02-02",
      desc: "asdaqdasdasd",
    },
    {
      id: crypto.randomUUID(),
      company: "Some other workplace",
      title: "Science Science",
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
  const [practical, setPractical] = useState(testData2);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

  const handleDetailChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
    console.log(person);
  };

  const addExperience = (exp, type) => {
    if (type === "education") setEducation([...education, exp]);
    if (type === "practical") setPractical([...practical, exp]);
  };
  return (
    <>
      <section id="inputs">
        {!isEditing && (
          <>
            <DetailsForm person={person} callback={handleDetailChange} />

            <hr id="creature" />

            <ExperienceForm
              data={education}
              title="EDUCATION"
              setEducation={setEducation}
              addExperience={addExperience}
            />
            <hr />
            <ExperienceForm
              data={practical}
              title="PRACTICAL EXPERIENCE"
              setPractical={setPractical}
              addExperience={addExperience}
            />
          </>
        )}
        {isEditing && (
          <EditDialog
            card={currentCard}
            education={education}
            setEducation={setEducation}
            practical={practical}
            setPractical={setPractical}
            setCurrentCard={setCurrentCard}
            setIsEditing={setIsEditing}
          />
        )}
      </section>
      <section id="preview">
        <PreviewFile
          practical={practical}
          setPractical={setPractical}
          education={education}
          setEducation={setEducation}
          person={person}
          setIsEditing={setIsEditing}
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
        />
      </section>
    </>
  );
}

export default App;
