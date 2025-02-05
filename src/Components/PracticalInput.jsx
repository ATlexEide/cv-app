import Input from "./Input";

function PracticalInput() {
  return (
    <>
      <Input label="Company" name="company" />
      <Input label="Position" name="position" />
      <Input type="textarea" label="Description" name="description" />
    </>
  );
}
export default PracticalInput;
// (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
