import { useEffect } from "react";

function EditDialog({ card, dialogIsOpen }) {
  useEffect(() => {
    if (dialogIsOpen)
      document.getElementById("editDialog").setAttribute("open", true);
    else document.getElementById("editDialog").removeAttribute("open");
  });
  return (
    <dialog id="editDialog">
      <h1>{card.school}</h1>
    </dialog>
  );
}
export default EditDialog;
