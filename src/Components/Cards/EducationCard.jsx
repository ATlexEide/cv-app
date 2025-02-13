import "../../styles/PreviewFile.css";
function EducationCard({ data, handleEdit, handleDelete }) {
  return (
    <article>
      <div id="heading">
        <span id="date">{`${data.timeFrom} -> ${data.timeTo}`}</span>
        <h3 id="school">{data.school}</h3>
      </div>
      <h4 id="degree">{data.degree}</h4>
      {data.desc && (
        <div>
          <h5>Extra info:</h5>
          <p id="desc">{data.desc}</p>
        </div>
      )}
      <button
        onClick={() => {
          handleEdit(data);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          handleDelete(data.id);
        }}
      >
        Remove
      </button>
    </article>
  );
}
export default EducationCard;
