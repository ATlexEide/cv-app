import { useState } from "react";
import EducationInput from "../Inputs/EducationInput";

function EducationalExpForm({ education, addExperience }) {
  const [schoolInfo, setSchoolInfo] = useState({
    id: education.length,
    school: "",
    degree: "",
    timeFrom: "",
    timeTo: "",
    desc: "",
  });

  return (
    <>
      <h2>Education</h2>
      <EducationInput schoolInfo={schoolInfo} setSchoolInfo={setSchoolInfo} />
      <button
        onClick={() => {
          addExperience(schoolInfo);
          setSchoolInfo({ ...schoolInfo, id: schoolInfo.id + 1 });
        }}
      >
        Add education
      </button>
    </>
  );
}
export default EducationalExpForm;
