import "../styles/PreviewFile.css";
import EducationCard from "./Cards/EducationCard";
import PracticalCard from "./Cards/PracticalCard";
import Border from "./Border";
import { useState } from "react";
import EditDialog from "./EditDialog";
function PreviewFile({ education, setEducation, person }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState({});

  const handleEditCard = (card) => {
    setCurrentCard(card);
    setIsOpen(true);
  };
  const handleDeleteCard = (cardId) => {
    setEducation(education.filter((card) => card.id !== cardId));
  };
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
                handleDelete={handleDeleteCard}
              />
            );
          })}
        </section>
        <Border />
        <section id="practical">
          <h2 className="sectionTitle">Practical</h2>
          <PracticalCard />
          <Border />
        </section>
      </article>
      <EditDialog
        card={currentCard}
        dialogIsOpen={isOpen}
        data={education}
        setData={setEducation}
        setDialogIsOpen={setIsOpen}
      />
    </>
  );
}
export default PreviewFile;
