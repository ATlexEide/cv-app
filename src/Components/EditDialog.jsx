import { useEffect, useState } from "react";
import Input from "./Input";

function EditDialog({ card, dialogIsOpen }) {
  console.log("card", card);
  useEffect(() => {
    if (dialogIsOpen)
      document.getElementById("editDialog").setAttribute("open", true);
    else document.getElementById("editDialog").removeAttribute("open");
    setSchool(card.school);
    setDegree(card.degree);
    setDesc(card.desc);
    setFrom(card.timeFrom);
    setTo(card.timeTo);
  }, [
    card.school,
    card.degree,
    card.desc,
    card.timeFrom,
    card.timeTo,
    dialogIsOpen,
  ]);
  const [school, setSchool] = useState(card.school);
  const [degree, setDegree] = useState(card.degree);
  const [desc, setDesc] = useState(card.desc);
  const [from, setFrom] = useState(card.timeFrom);
  const [to, setTo] = useState(card.timeTo);
  const handleChange = (e) => {
    alert("yipp");
    console.log(e);
  };
  // TODO: Fix inputs
  return (
    <dialog id="editDialog">
      <Input
        label="School"
        name={school}
        type="text"
        value=""
        onChange={(e) => alert(e)}
      />
      <Input
        label="Degree"
        name={degree}
        value={degree}
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <Input
        label="Desc"
        name={desc}
        value={desc}
        type="textarea"
        onChange={(e) => handleChange(e)}
      />
      <Input
        label="From"
        value={from}
        type="date"
        onChange={(e) => handleChange(e)}
      />
      <Input
        label="To"
        name={to}
        value={to}
        onChange={(e) => handleChange(e)}
        type="date"
      />
    </dialog>
  );
}
export default EditDialog;
