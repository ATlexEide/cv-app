import "../styles/PreviewFile.css";
import EducationCard from "./EducationCard";
import PracticalCard from "./PracticalCard";
import Border from "./Border";
function PreviewFile({ person }) {
  const info = [
    {
      school: "Holen",
      degree: "Comp Science",
      timeFrom: "01/01/01",
      timeTo: "02/02/02",
      desc: "asdaqdasdasd",
    },
    {
      school: "Damsgård",
      degree: "Science",
      timeFrom: "01/01/01",
      timeTo: "02/02/02",
      desc: "asdaqdasdasd",
    },
  ];
  const handleEditCard = () => {
    console.log("click");
  };
  return (
    <article id="file">
      <h2>{`${person.firstName} ${person.lastName}`}</h2>
      <section id="contact-info">
        <span id="email">{`Email: ${person.email}`}</span>
        <span id="phonenumber">{`Tlf: ${person.phone}`}</span>
      </section>
      <Border />
      <section id="education">
        <h2 className="sectionTitle">Education</h2>
        {info.map((school, index) => {
          // console.log(school);
          return (
            <EducationCard
              key={index}
              data={school}
              handleClick={handleEditCard}
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
  );
}
export default PreviewFile;
