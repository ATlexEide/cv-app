import "../styles/PreviewFile.css";
import EducationCard from "./EducationCard";
import PracticalCard from "./PracticalCard";
import Border from "./Border";
function PreviewFile({ person }) {
  return (
    <article id="file">
      <h2>{`${person.firstName} ${person.lastName}`}</h2>
      <section id="contact-info">
        <span id="email">{`Email: ${person.email}`}</span>
        <span id="phonenumber">{`Tlf: ${person.phone}`}</span>
      </section>
      <Border />
      <section id="education">
        <h2>Education</h2>
        <Border />
        <EducationCard
          school="Holen"
          degree="Comp science"
          timeFrom="01/01/01"
          timeTo="02/02/02"
          desc="asdaqdasdasd"
        />
      </section>
      <section id="practical">
        <Border />
        <PracticalCard />
        <Border />
      </section>
    </article>
  );
}
export default PreviewFile;
