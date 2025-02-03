import "./App.css";
import { useState } from "react";
import Input from "./Components/Input";
function App() {
  const [person, setPerson] = useState({
    firstName: "Navn",
    lastName: "Navnesen",
  });
  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
    console.log(person);
  };
  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
    console.log(person);
  };
  return (
    <>
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
    </>
  );
}

export default App;
