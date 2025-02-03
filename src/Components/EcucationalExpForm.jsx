import { useState } from "react";
import EducationInput from "./EducationInput";
function EducationalExpForm() {
  const testData = {
    arna: {
      from: "some time",
      to: "some other time",
      attendance: "probably alright",
    },
    holen: {
      from: "some time",
      to: "some other time",
      attendance: "probably alright",
    },
    damsgård: {
      from: "some time",
      to: "some other time",
      attendance: "probably alright",
    },
  };
  const [education, setEducation] = useState(testData);
  console.log(education);
  const handleDetailChange = (schoolInfo) => {
    setEducation({ ...education, [schoolInfo.schoolName]: schoolInfo });
    console.log(education);
  };
  return (
    <>
      <h2>Edu</h2>
      <EducationInput
        index={0}
        label="School"
        name="school"
        callback={handleDetailChange}
      />
    </>
  );
}
export default EducationalExpForm;
