import { useState } from "react";
import PracticalInput from "../Inputs/PracticalInput";
import "../../styles/Form.css";

function PracticalExpForm({ practical, addExperience }) {
  const [practicalInfo, setPracticalInfo] = useState({
    id: practical.length,
    company: "",
    title: "",
    timeFrom: "",
    timeTo: "",
    desc: "",
  });
  return (
    <>
      <h2>PRACTICAL EXPERIENCE</h2>
      <form>
        <PracticalInput
          practicalInfo={practicalInfo}
          setPracticalInfo={setPracticalInfo}
        />
        <button
          type="button"
          onClick={() => {
            console.log("practicalInfo", practicalInfo);
            addExperience(practicalInfo, "practical");
            setPracticalInfo({ ...practicalInfo, id: practicalInfo.id + 1 });
          }}
        >
          Add experience
        </button>
      </form>
    </>
  );
}
export default PracticalExpForm;
