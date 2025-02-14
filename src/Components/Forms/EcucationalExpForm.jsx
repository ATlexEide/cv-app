import { useState } from "react";
import EducationInput from "../Inputs/EducationInput";
import "../../styles/Form.css";

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
          addExperience(schoolInfo, "education");
          setSchoolInfo({ ...schoolInfo, id: schoolInfo.id + 1 });
        }}
      >
        Add education
      </button>
    </>
  );
}
export default EducationalExpForm;
