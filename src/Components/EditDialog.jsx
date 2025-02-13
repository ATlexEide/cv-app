import { useEffect, useState } from "react";
import Input from "./Input";

function EditDialog({ card, dialogIsOpen, setDialogIsOpen, data, setData }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [desc, setDesc] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [newCard, setNewCard] = useState({});
  useEffect(() => {
    if (dialogIsOpen)
      document.getElementById("editDialog").setAttribute("open", true);
    else document.getElementById("editDialog").removeAttribute("open");
    setSchool(card.school);
    setDegree(card.degree);
    setDesc(card.desc);
    setFrom(card.timeFrom);
    setTo(card.timeTo);
    setNewCard(card);
  }, [
    card,
    card.school,
    card.degree,
    card.desc,
    card.timeFrom,
    card.timeTo,
    dialogIsOpen,
  ]);

  const handleUpdate = () => {
    console.log(data);
    const newData = data.map((item, index) =>
      index === newCard.id ? newCard : item
    );
    setData(newData);
    setDialogIsOpen(false);
  };
  const handleCancel = () => {
    setDialogIsOpen(false);
  };
  return (
    <dialog id="editDialog">
      <Input
        label="School"
        name={school}
        type="text"
        value={school}
        onChange={(e) => {
          setSchool(e.target.value);
          setNewCard({ ...newCard, school: e.target.value });
        }}
      />
      <Input
        label="Degree"
        name={degree}
        value={degree}
        type="text"
        onChange={(e) => {
          setDegree(e.target.value);
          setNewCard({ ...newCard, degree: e.target.value });
        }}
      />
      <Input
        label="Desc"
        name={desc}
        value={desc}
        type="textarea"
        onChange={(e) => {
          setDesc(e.target.value);
          setNewCard({ ...newCard, desc: e.target.value });
        }}
      />
      <Input
        label="From"
        value={from}
        type="date"
        onChange={(e) => {
          setFrom(e.target.value);
          setNewCard({ ...newCard, timeFrom: e.target.value });
        }}
      />
      <Input
        label="To"
        name={to}
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
          setNewCard({ ...newCard, timeTo: e.target.value });
        }}
        type="date"
      />
      <button onClick={handleUpdate}>Apply changes</button>
      <button onClick={handleCancel}>Cancel</button>
    </dialog>
  );
}
export default EditDialog;
