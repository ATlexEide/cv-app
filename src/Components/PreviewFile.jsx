import "../styles/PreviewFile.css";
import EducationCard from "./EducationCard";
import PracticalCard from "./PracticalCard";
import Border from "./Border";
import { useState } from "react";
function PreviewFile({ person }) {
  let mockData = {
    id: 0,
    school: "Holen",
    degree: "Comp Science",
    timeFrom: "01/01/01",
    timeTo: "02/02/02",
    desc: "asdaqdasdasd",
  };
  let mockData2 = {
    id: 1,
    school: "Damsgård",
    degree: "UwU",
    timeFrom: "01/01/01",
    timeTo: "02/02/02",
    desc: "dadadad",
  };
  const [data, setData] = useState([mockData, mockData2]);
  const handleEditCard = (card) => {
    console.log(card);
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
        {data.map((school, index) => {
          return (
            <EducationCard
              key={index}
              data={school}
              handleEdit={handleEditCard}
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
