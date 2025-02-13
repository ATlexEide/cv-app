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

  return (
    <dialog id="editDialog">
      <Input
        label="School"
        name={school}
        type="text"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <Input
        label="Degree"
        name={degree}
        value={degree}
        type="text"
        onChange={(e) => setDegree(e.target.value)}
      />
      <Input
        label="Desc"
        name={desc}
        value={desc}
        type="textarea"
        onChange={(e) => setDesc(e.target.value)}
      />
      <Input
        label="From"
        value={from}
        type="date"
        onChange={(e) => setFrom(e.target.value)}
      />
      <Input
        label="To"
        name={to}
        value={to}
        onChange={(e) => setTo(e.target.value)}
        type="date"
      />
    </dialog>
  );
}
export default EditDialog;
