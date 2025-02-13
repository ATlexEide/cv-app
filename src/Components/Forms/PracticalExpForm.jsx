import PracticalInput from "../Inputs/PracticalInput";

function PracticalExpForm({ addCard }) {
  return (
    <>
      <h2>Add practical experience</h2>
      <PracticalInput />
      <button onClick={addCard}>Add experience</button>
    </>
  );
}
export default PracticalExpForm;
