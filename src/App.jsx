import "./styles/App.css";
import { educationData, practicalData } from "./testData";
import { useState } from "react";
import DetailsForm from "./Components/Forms/DetailsForm";
import ExperienceForm from "./Components/Forms/ExperienceForm";
import PreviewFile from "./Components/PreviewFile";
import EditDialog from "./Components/EditDialog";

function App() {
  const [person, setPerson] = useState({
    firstname: "Navn",
    lastname: "Navnesen",
    email: "mail@mail.no",
    phone: "12345678",
  });

  const [education, setEducation] = useState(educationData);
  const [practical, setPractical] = useState(practicalData);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

  const addExperience = (exp, type) => {
    if (type === "education") setEducation([...education, exp]);
    if (type === "practical") setPractical([...practical, exp]);
  };

  return (
    <>
      <section id="inputs">
        {!isEditing && (
          <>
            <DetailsForm person={person} setPerson={setPerson} />

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
