import { useEffect, useState } from "react";
import Input from "./Inputs/Input";

function EditDialog({ card, dialogIsOpen, setDialogIsOpen, data, setData }) {
  // TODO: FIX IMMINENT MESS
  const [school, setSchool] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [degree, setDegree] = useState("");
  const [desc, setDesc] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [newCard, setNewCard] = useState({});
  useEffect(() => {
    console.log(card);
    if (dialogIsOpen)
      document.getElementById("editDialog").setAttribute("open", true);
    else document.getElementById("editDialog").removeAttribute("open");
    if (card.school) {
      setSchool(card.school);
      setDegree(card.degree);
    }
    if (card.company) {
      setCompany(card.company);
      setTitle(card.title);
    }
    setDesc(card.desc);
    setFrom(card.timeFrom);
    setTo(card.timeTo);
    setNewCard(card);
  }, [
    card,
    card.company,
    card.title,
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
    // TODO: Make inputs not hard coded
    <dialog id="editDialog">
      <Input
        label={card.school ? "School" : "Company"}
        name={card.school ? school : company}
        type="text"
        value={card.school ? school : company}
        onChange={(e) => {
          {
            card.school && setSchool(e.target.value);
          }
          {
            card.company && setCompany(e.target.value);
          }
          {
            card.school && setNewCard({ ...newCard, school: e.target.value });
          }
          {
            card.company && setNewCard({ ...newCard, company: e.target.value });
          }
        }}
      />
      <Input
        label={card.school ? "Degree" : "Title"}
        name={card.school ? degree : title}
        value={card.school ? degree : title}
        type="text"
        onChange={(e) => {
          {
            card.school && setDegree(e.target.value);
          }
          {
            card.company && setTitle(e.target.value);
          }
          {
            card.school && setNewCard({ ...newCard, degree: e.target.value });
          }
          {
            card.company && setNewCard({ ...newCard, title: e.target.value });
          }
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
