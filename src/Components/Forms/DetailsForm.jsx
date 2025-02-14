import Input from "../Inputs/Input";
import "../../styles/Form.css";
function DetailsForm({ person, callback }) {
  return (
    <form>
      <h2>Personal info</h2>
      <Input
        label="First Name"
        name="firstName"
        value={person.firstName}
        onChange={callback}
      />
      <Input
        label="Last Name"
        name="lastName"
        value={person.lastName}
        onChange={callback}
      />
      <Input
        label="Email"
        name="email"
        value={person.email}
        onChange={callback}
      />
      <Input
        label="Phone"
        name="phone"
        value={person.phone}
        onChange={callback}
      />
    </form>
  );
}
export default DetailsForm;
