import "../../styles/EducationInput.css";
import Input from "./Input";
function EducationInput({ schoolInfo, setSchoolInfo }) {
  return (
    <section id="educationalExperience">
      <div>
        {/* TODO: REFACTOR INPUTS TO USE INPUT COMPONENT */}
        <Input
          label="School"
          name="school"
          onChange={(e) => {
            setSchoolInfo({ ...schoolInfo, school: e.target.value });
          }}
        />
      </div>
      <div>
        <Input
          label="Study"
          name="study"
          onChange={(e) => {
            setSchoolInfo({ ...schoolInfo, degree: e.target.value });
          }}
        />
      </div>
      <Input
        label="From"
        name="timeFrom"
        type="date"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, timeFrom: e.target.value });
        }}
      />
      <Input
        label="To"
        name="timeTo"
        type="date"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, timeTo: e.target.value });
        }}
      />
      <Input
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
