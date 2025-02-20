import Input from "../Inputs/Input";
import "../../styles/Form.css";

function DetailsForm({ person, setPerson }) {
  const details = [
    "Firstname",
    "Lastname",
    "Email",
    "Phone",
    "Github",
    "LinkedIn",
  ];
  return (
    <>
      <h2>PERSONAL INFO</h2>

      <form>
        {details.map((input) => (
          <Input
            key={input}
            className="personalInput"
            label={input}
            type={input}
            name={input.toLowerCase()}
            value={person[input.toLowerCase()]}
            placeholder={true}
            onChange={(e) => {
              setPerson({ ...person, [input.toLowerCase()]: e.target.value });
            }}
          />
        ))}
      </form>
    </>
  );
}

export default DetailsForm;
