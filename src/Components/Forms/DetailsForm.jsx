import Input from "../Inputs/Input";
import "../../styles/Form.css";

function DetailsForm({ person, setPerson }) {
  // Input fields to add
  // If needed, add custom placeholder text after comma
  // ex: "Some input,Some custom placeholder"
  const details = [
    "Firstname",
    "Lastname",
    "Email",
    "Phone",
    "Github",
    "LinkedIn",
    "Skills,Comma separated list",
    "Languages,Comma separated list",
  ];
  return (
    <>
      <h2>PERSONAL INFO</h2>

      <form>
        {details.map((input) => (
          <Input
            key={input}
            className="personalInput"
            label={input.includes(",") ? input.split(",")[0] : input}
            type={input}
            name={input.includes(",") ? input.split(",")[0] : input}
            value={person[input.toLowerCase()]}
            placeholder={input.includes(",") ? input.split(",")[1] : input}
            onChange={(e) => {
              const key = input.includes(",")
                ? input.split(",")[0].toLowerCase()
                : input.toLowerCase();
              setPerson({
                ...person,
                [key]: e.target.value,
              });
            }}
          />
        ))}
      </form>
    </>
  );
}

export default DetailsForm;
