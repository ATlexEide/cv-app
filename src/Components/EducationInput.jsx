import { useState } from "react";

function EducationInput({ label, name, callback }) {
  const [schoolInfo, setSchoolInfo] = useState({
    schoolName: "",
    to: "",
    from: "",
  });
  return (
    <>
      <label htmlFor={name}>{label}: </label>
      <input
        id={name}
        type="text"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, schoolName: e.target.value });
        }}
      />
      <button
        onClick={() => {
          callback(schoolInfo);
        }}
      >
        Add
      </button>
    </>
  );
}
export default EducationInput;
