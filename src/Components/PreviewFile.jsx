import "../styles/PreviewFile.css";
import EducationCard from "./Cards/EducationCard";
import PracticalCard from "./Cards/PracticalCard";
import Border from "./Border";
import { useState } from "react";
import EditDialog from "./EditDialog";
function PreviewFile({
  practical,
  setPractical,
  education,
  setEducation,
  person,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

  const handleEditCard = (card) => {
    setCurrentCard(card);
    setIsOpen(true);
  };
  // TODO: Clean this shit
  const handleDeleteEducation = (cardId) => {
    setEducation(education.filter((card) => card.id !== cardId));
  };
  const handleDeletePractical = (cardId) => {
    setPractical(practical.filter((card) => card.id !== cardId));
  };
  // TODO END
  return (
    <>
      <article id="file">
        <h2>{`${person.firstName} ${person.lastName}`}</h2>
        <section id="contact-info">
          <span id="email">{`Email: ${person.email}`}</span>
          <span id="phonenumber">{`Tlf: ${person.phone}`}</span>
        </section>
        <Border />
        <section id="education">
          <h2 className="sectionTitle">Education</h2>
          {education.map((school, index) => {
            return (
              <EducationCard
                key={index}
                data={school}
                handleEdit={handleEditCard}
                handleDelete={handleDeleteEducation}
              />
            );
          })}
        </section>
        <Border />
        <section id="practical">
          <h2 className="sectionTitle">Practical</h2>
          {practical.map((company, index) => {
            console.log(company);
            return (
              <PracticalCard
                key={index}
                data={company}
                handleEdit={handleEditCard}
                handleDelete={handleDeletePractical}
              />
            );
          })}
          <Border />
        </section>
      </article>
      <EditDialog
        card={currentCard}
        dialogIsOpen={isOpen}
        education={education}
        setEducation={setEducation}
        practical={practical}
        setPractical={setPractical}
        setDialogIsOpen={setIsOpen}
      />
    </>
  );
}
export default PreviewFile;
