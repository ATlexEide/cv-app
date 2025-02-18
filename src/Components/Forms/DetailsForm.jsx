import Input from "../Inputs/Input";
import "../../styles/Form.css";

function DetailsForm({ person, callback }) {
  return (
    <>
      <h2>PERSONAL INFO</h2>

      <form>
        <Input
          className="personalInput"
          label="First Name"
          name="firstName"
          value={person.firstName}
          placeholder={true}
          onChange={callback}
        />

        <Input
          className="personalInput"
          label="Last Name"
          name="lastName"
          value={person.lastName}
          placeholder={true}
          onChange={callback}
        />

        <Input
          className="personalInput"
          label="Email"
          name="email"
          value={person.email}
          placeholder={true}
          onChange={callback}
        />

        <Input
          className="personalInput"
          label="Phone"
          name="phone"
          value={person.phone}
          placeholder={true}
          onChange={callback}
        />
      </form>
    </>
  );
}

export default DetailsForm;
