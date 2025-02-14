import Input from "../Inputs/Input";
import "../../styles/DetailsForm.css";
function DetailsForm({ person, callback }) {
  return (
    <form>
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
