import "../../styles/EducationInput.css";
function EducationInput({ schoolInfo, setSchoolInfo }) {
  return (
    <section id="educationalExperience">
      <div>
        {/* TODO: REFACTOR INPUTS TO USE INPUT COMPONENT */}
        <label htmlFor="school">School: </label>
        <input
          id="school"
          type="text"
          onChange={(e) => {
            setSchoolInfo({ ...schoolInfo, school: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="study">Title of study</label>
        <input
          id="study"
          type="text"
          onChange={(e) => {
            setSchoolInfo({ ...schoolInfo, degree: e.target.value });
          }}
        />
      </div>
      <label htmlFor="dateFrom">Study from</label>
      <input
        id="dateFrom"
        type="date"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, timeFrom: e.target.value });
        }}
      />
      <label htmlFor="dateTo">Study to</label>
      <input
        id="dateTo"
        type="date"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, timeTo: e.target.value });
        }}
      />
      <label htmlFor="desc">Desc</label>
      <input
        id="desc"
        type="textarea"
        onChange={(e) => {
          setSchoolInfo({ ...schoolInfo, desc: e.target.value });
        }}
      />
    </section>
  );
}
export default EducationInput;
