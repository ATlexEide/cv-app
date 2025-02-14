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
    <section>
      <h2>Practical experience</h2>
      <PracticalInput
        practicalInfo={practicalInfo}
        setPracticalInfo={setPracticalInfo}
      />
      <button
        onClick={() => {
          console.log("practicalInfo", practicalInfo);
          addExperience(practicalInfo, "practical");
          setPracticalInfo({ ...practicalInfo, id: practicalInfo.id + 1 });
        }}
      >
        Add experience
      </button>
    </section>
  );
}
export default PracticalExpForm;
