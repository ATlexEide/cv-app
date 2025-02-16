import Input from "./Input";
function EducationInput({ schoolInfo, setSchoolInfo }) {
  return (
    <>
      <Input
        className="expInput"
        label="School"
        name="school"
        placeholder={true}
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, school: e.target.value });
        }}
      />
      <Input
        className="expInput"
        label="Study"
        name="study"
        placeholder={true}
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, degree: e.target.value });
        }}
      />
      <Input
        className="expInput"
        label="From"
        name="timeFrom"
        type="date"
        placeholder={true}
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, timeFrom: e.target.value });
        }}
      />
      <Input
        className="expInput"
        label="To"
        name="timeTo"
        type="date"
        placeholder={true}
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, timeTo: e.target.value });
        }}
      />
      <Input
        className="expInput"
        label="Desc"
        name="desc"
        type="textarea"
        placeholder={true}
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, desc: e.target.value });
        }}
      />
    </>
  );
}
export default EducationInput;
