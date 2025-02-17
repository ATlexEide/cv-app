import { useEffect, useState } from "react";
import Input from "./Inputs/Input";
import "../styles/Form.css";
function EditDialog({
  card,
  dialogIsOpen,
  education,
  setEducation,
  practical,
  setPractical,
  setIsEditing,
}) {
  // TODO: ACCEPT IMMINENT MESS
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
    let data;
    card.school ? (data = education) : (data = practical);
    const newData = data.map((item) =>
      item.id === newCard.id ? newCard : item
    );
    if (card.school) {
      setEducation(newData);
    } else {
      setPractical(newData);
    }
    setIsEditing(false);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };
  return (
    <form id="editDialog">
      <h2>Edit entry</h2>
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
      <button className="applyBtn" onClick={handleUpdate}>
        Apply changes
      </button>
      <button className="cancelBtn" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
export default EditDialog;
