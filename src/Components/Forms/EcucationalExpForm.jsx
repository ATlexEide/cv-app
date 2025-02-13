import { useState } from "react";
import EducationInput from "../Inputs/EducationInput";

function EducationalExpForm({ addCard }) {
  const testData = {
    arna: {
      schoolName: "arna",
      from: "some time",
      to: "some other time",
      attendance: "probably alright",
    },
    holen: {
      schoolName: "holen",
      from: "some time",
      to: "some other time",
      attendance: "probably alright",
    },
    damsgård: {
      schoolName: "damsgård",
      from: "some time",
      to: "some other time",
      attendance: "probably alright",
    },
  };
  const [education, setEducation] = useState(testData);
  const handleDetailChange = (schoolInfo) => {
    setEducation({ ...education, [schoolInfo.schoolName]: schoolInfo });
    console.log(education);
  };

  return (
    <>
      <h2>Education</h2>
      <EducationInput
        index={0}
        label="School"
        name="school"
        callback={handleDetailChange}
      />
      <button onClick={addCard}>Add education</button>
    </>
  );
}
export default EducationalExpForm;
