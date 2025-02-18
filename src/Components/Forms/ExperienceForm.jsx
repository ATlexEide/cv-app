import { useState } from "react";
import Input from "../Inputs/Input";
import "../../styles/Form.css";

function ExperienceForm({ title, addExperience }) {
  const [experienceInfo, setExperienceInfo] = useState({});
  const type = title.toLowerCase().includes("education")
    ? "education"
    : "practical";

  const inputs = [
    type === "education" ? "School" : "Company",
    type === "education" ? "Study" : "Title",
    "From",
    "To",
    "Desc",
  ];

  return (
    <>
      <h2>{title}</h2>

      <form>
        {inputs.map((input) => (
          <Input
            key={input}
            className="expInput"
            label={input}
            type={input}
            name={input.toLowerCase()}
            placeholder={true}
            onChange={(e) => {
              setExperienceInfo({
                ...experienceInfo,
                timeFrom: e.target.value,
              });
            }}
          />
        ))}

        <button
          type="button"
          onClick={() => {
            addExperience(experienceInfo, type);
            setExperienceInfo({ ...experienceInfo, id: crypto.randomUUID() });
          }}
        >
          Add experience
        </button>
      </form>
    </>
  );
}

export default ExperienceForm;
