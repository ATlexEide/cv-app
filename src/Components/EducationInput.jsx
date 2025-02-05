import { useState } from "react";
import "../styles/EducationInput.css";
function EducationInput({ label, name, callback }) {
  const [schoolInfo, setSchoolInfo] = useState({
    schoolName: "",
    to: "",
    from: "",
  });
  return (
    <section id="educationalExperience">
      <div>
        {/* TODO: REFACTOR INPUTS TO USE INPUT COMPONENT */}
        <label htmlFor={name}>{label}: </label>
        <input
          id={name}
          type="text"
          onChange={(e) => {
            setSchoolInfo({ ...schoolInfo, schoolName: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="study">Title of study</label>
        <input
          id="study"
          type="text"
          onChange={(e) => {
            setSchoolInfo({ ...schoolInfo, study: e.target.value });
          }}
        />
      </div>
      <label htmlFor="dateFrom">Study from</label>
      <input
        id="dateFrom"
        type="date"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, dateFrom: e.target.value });
        }}
      />
      <label htmlFor="dateTo">Study to</label>
      <input
        id="dateTo"
        type="date"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, dateTo: e.target.value });
        }}
      />
      <button
        onClick={() => {
          callback(schoolInfo);
        }}
      >
        Add
      </button>
    </section>
  );
}
export default EducationInput;
