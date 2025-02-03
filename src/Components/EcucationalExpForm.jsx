import { useState } from "react";
import Input from "./Input";
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
  const handleDetailChange = (e) => {
    setEducation({ ...education, [e.index]: e.target.value });
    console.log(education);
  };
  return (
    <>
      <h2>Edu</h2>
      <Input label="School" name="school" callback={handleDetailChange} />
    </>
  );
}
export default EducationalExpForm;
