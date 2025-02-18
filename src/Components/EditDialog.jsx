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
    setFrom(card.from);
    setTo(card.to);
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
  const getValue = (id) => {
    switch (id) {
      case "school":
        return school;
      case "company":
        return company;
      case "degree":
        return degree;
      case "title":
        return title;
      case "desc":
        return desc;
      case "from":
        return from;
      case "to":
        return to;

      default:
        break;
    }
  };
  const updateInputValue = (input, value) => {
    console.log(input);
    console.log(value);
    switch (input.id) {
      case "school":
        setSchool(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "degree":
        setDegree(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "from":
        setFrom(value);
        break;
      case "to":
        setTo(value);
        break;
      case "desc":
        setDesc(value);
        break;

      default:
        break;
    }
    console.log(input);
  };

  return (
    <form id="editDialog">
      <h2>Edit entry</h2>

      {Object.entries(card).map(
        (input) =>
          input[0] !== "id" && (
            <Input
              key={input[0]}
              className="expInput"
              label={Array.from(input[0])
                .toSpliced(0, 1, input[0].at(0).toUpperCase())
                .join("")}
              type={input[0]}
              name={input[0].toLowerCase()}
              value={getValue(input[0])}
              onChange={(e) => {
                updateInputValue(e.target, e.target.value);
                setNewCard({ ...newCard, [e.target.id]: e.target.value });
              }}
            />
          )
      )}

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
