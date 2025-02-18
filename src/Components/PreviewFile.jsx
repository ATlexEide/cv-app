import "../styles/PreviewFile.css";
import Card from "./Cards/Card";
import Border from "./Border";

function PreviewFile({
  practical,
  setPractical,
  education,
  setEducation,
  person,
  setCurrentCard,
  setIsEditing,
}) {
  const handleEditCard = (card) => {
    setCurrentCard(card);
    setIsEditing(true);
  };
  const handleDelete = (cardId, type) => {
    type === "education"
      ? setEducation(education.filter((card) => card.id !== cardId))
      : setPractical(practical.filter((card) => card.id !== cardId));
  };

  return (
    <>
      <article id="file">
        <h2 id="title">
          {person.firstName ? person.firstName : "{ Firstname } "} &nbsp;
          {person.lastName ? person.lastName : "{ Lastname }"}
        </h2>
        <section id="contact-info">
          <span id="email">
            {person.email ? `Email: ${person.email}` : "Email: your@email.com"}
          </span>
          <span id="phonenumber">
            {person.phone ? `Phone: ${person.phone}` : "Phone: 123 45 678"}
          </span>
        </section>
        <Border />
        <section id="education">
          <h2 className="sectionTitle">Education</h2>
          {education.map((school, index) => {
            return (
              <Card
                key={index}
                data={school}
                handleEdit={handleEditCard}
                handleDelete={handleDelete}
              />
            );
          })}
        </section>
        <hr />
        <section id="practical">
          <h2 className="sectionTitle">Practical experience</h2>
          {practical.map((company, index) => {
            return (
              <Card
                key={index}
                data={company}
                handleEdit={handleEditCard}
                handleDelete={handleDelete}
              />
            );
          })}
        </section>
      </article>
    </>
  );
}
export default PreviewFile;
