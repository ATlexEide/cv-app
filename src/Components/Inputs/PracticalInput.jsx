import Input from "./Input";

function PracticalInput({ practicalInfo, setPracticalInfo }) {
  return (
    <section id="practicalExperience">
      <Input
        className="expInput"
        label="Company"
        name="company"
        onChange={(e) => {
          setPracticalInfo({ ...practicalInfo, company: e.target.value });
        }}
      />
      <Input
        className="expInput"
        label="Title"
        name="title"
        onChange={(e) => {
          setPracticalInfo({ ...practicalInfo, title: e.target.value });
        }}
      />
      <Input
        className="expInput"
        type="date"
        label="From"
        name="timeFrom"
        onChange={(e) => {
          setPracticalInfo({ ...practicalInfo, timeFrom: e.target.value });
        }}
      />
      <Input
        className="expInput"
        type="date"
        label="To"
        name="timeTo"
        onChange={(e) => {
          setPracticalInfo({ ...practicalInfo, timeTo: e.target.value });
        }}
      />
      <Input
        className="expInput"
        type="textarea"
        label="Desc"
        name="desc"
        onChange={(e) => {
          setPracticalInfo({ ...practicalInfo, desc: e.target.value });
        }}
      />
    </section>
  );
}
export default PracticalInput;
// (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
