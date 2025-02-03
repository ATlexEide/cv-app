import { useState } from "react";
import Input from "./Input";
import "../styles/DetailsForm.css";
function DetailsForm() {
  const [person, setPerson] = useState({
    firstName: "Navn",
    lastName: "Navnesen",
    email: "",
    phone: "",
  });
  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
    console.log(person);
  };
  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
    console.log(person);
  };
  const handleEmailChange = (e) => {
    setPerson({ ...person, email: e.target.value });
    console.log(person);
  };
  return (
    <form>
      <h1>{`${person.firstName} ${person.lastName}`}</h1>
      <Input
        label="First Name"
        name="first-name"
        value={person.firstName}
        callback={handleFirstNameChange}
      />
      <Input
        label="Last Name"
        name="last-name"
        value={person.lastName}
        callback={handleLastNameChange}
      />
      <Input
        label="Email"
        name="email"
        value={person.email}
        callback={handleEmailChange}
      />
    </form>
  );
}
export default DetailsForm;
