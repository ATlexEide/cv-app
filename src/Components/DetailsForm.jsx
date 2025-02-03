import { useState } from "react";
import Input from "./Input";
import "../styles/DetailsForm.css";
function DetailsForm() {
  const [person, setPerson] = useState({
    firstName: "Navn",
    lastName: "Navnesen",
    email: "mail@mail.no",
    phone: "12345678",
  });
  const handleDetailChange = (e) => {
    console.log(e);
    setPerson({ ...person, [e.target.name]: e.target.value });
    console.log(person);
  };
  return (
    <form>
      <h1>{`${person.firstName} ${person.lastName}`}</h1>
      <Input
        label="First Name"
        name="firstName"
        value={person.firstName}
        callback={handleDetailChange}
      />
      <Input
        label="Last Name"
        name="lastName"
        value={person.lastName}
        callback={handleDetailChange}
      />
      <Input
        label="Email"
        name="email"
        value={person.email}
        callback={handleDetailChange}
      />
      <Input
        label="Phone"
        name="phone"
        value={person.phone}
        callback={handleDetailChange}
      />
    </form>
  );
}
export default DetailsForm;
