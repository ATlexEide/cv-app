import { useEffect } from "react";
import Input from "./Input";

function EditDialog({ card, dialogIsOpen }) {
  useEffect(() => {
    if (dialogIsOpen)
      document.getElementById("editDialog").setAttribute("open", true);
    else document.getElementById("editDialog").removeAttribute("open");
  });
  return (
    <dialog id="editDialog">
      <Input
        label="School"
        name={card.school}
        value={card.school}
        type="text"
      />
      <Input
        label="Degree"
        name={card.degree}
        value={card.degree}
        type="text"
      />
      <Input
        label="Description"
        name={card.desc}
        value={card.desc}
        type="textarea"
      />
      <Input
        label="From"
        name={card.timeFrom}
        value={card.timeFrom}
        type="date"
      />
      <Input label="To" name={card.timeTo} value={card.timeTo} type="date" />
    </dialog>
  );
}
export default EditDialog;
