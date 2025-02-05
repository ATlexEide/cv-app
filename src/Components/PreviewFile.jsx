import "../styles/PreviewFile.css";
import EducationCard from "./EducationCard";
import PracticalCard from "./PracticalCard";
function PreviewFile({ person }) {
  return (
    <article id="file">
      <h2>{`${person.firstName} ${person.lastName}`}</h2>
      <section id="contact-info">
        <span id="email">{`Email: ${person.email}`}</span>
        <span id="phonenumber">{`Tlf: ${person.phone}`}</span>
      </section>
      <section id="education">
        <div className="border"></div>
        <EducationCard
          school="Holen"
          degree="Comp science"
          timeFrom="yes"
          timeTo="no"
        />
      </section>
      <section id="practical">
        <div className="border"></div>
        <PracticalCard />
        <div className="border"></div>
      </section>
    </article>
  );
}
export default PreviewFile;
