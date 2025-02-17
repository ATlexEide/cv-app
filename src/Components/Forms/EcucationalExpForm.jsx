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
      <h2>EDUCATION</h2>
      <form>
        <EducationInput schoolInfo={schoolInfo} setSchoolInfo={setSchoolInfo} />
        <button
          type="button"
          onClick={() => {
            addExperience(schoolInfo, "education");
            setSchoolInfo({ ...schoolInfo, id: crypto.randomUUID() });
          }}
        >
          Add education
        </button>
      </form>
    </>
  );
}
export default EducationalExpForm;
