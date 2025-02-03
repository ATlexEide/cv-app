import { useState } from "react";
function EducationalExpForm() {
  const testData = [
    {
      school: "arna",
      from: "some time",
      to: "some other time",
    },
    {
      school: "damsgård",
      from: "some time",
      to: "some other time",
    },
    {
      school: "holen",
      from: "some time",
      to: "some other time",
    },
  ];
  const [education, setEducation] = useState(testData);
  return (
    <>
      <h2>Edu</h2>
      <ul>
        {education.map((item, index) => (
          <li key={index}>{item.school}</li>
        ))}
      </ul>
    </>
  );
}
export default EducationalExpForm;
