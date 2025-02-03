import "./App.css";
import { useState } from "react";
import Input from "./Components/Input";
function App() {
  const [person, setPerson] = useState("");
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Input label="Test" name="test" callback={handleOnChange} />
    </>
  );
}

export default App;
