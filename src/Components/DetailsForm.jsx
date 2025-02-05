import Input from "./Input";
import "../styles/DetailsForm.css";
function DetailsForm({ person, callback }) {
  return (
    <form>
      <Input
        label="First Name"
        name="firstName"
        value={person.firstName}
        callback={callback}
      />
      <Input
        label="Last Name"
        name="lastName"
        value={person.lastName}
        callback={callback}
      />
      <Input
        label="Email"
        name="email"
        value={person.email}
        callback={callback}
      />
      <Input
        label="Phone"
        name="phone"
        value={person.phone}
        callback={callback}
      />
    </form>
  );
}
export default DetailsForm;
