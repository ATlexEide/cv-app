import "../../styles/EducationInput.css";
import Input from "./Input";
function EducationInput({ schoolInfo, setSchoolInfo }) {
  return (
    <section id="educationalExperience">
      <Input
        className="expInput"
        label="School"
        name="school"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, school: e.target.value });
        }}
      />
      <Input
        className="expInput"
        label="Study"
        name="study"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, degree: e.target.value });
        }}
      />
      <Input
        className="expInput"
        label="From"
        name="timeFrom"
        type="date"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, timeFrom: e.target.value });
        }}
      />
      <Input
        className="expInput"
        label="To"
        name="timeTo"
        type="date"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, timeTo: e.target.value });
        }}
      />
      <Input
        className="expInput"
        label="Desc"
        name="desc"
        type="textarea"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, desc: e.target.value });
        }}
      />
    </section>
  );
}
export default EducationInput;
