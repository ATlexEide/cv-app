import "../../styles/PreviewFile.css";

function Card({ data, handleEdit, handleDelete }) {
  const type = data.school ? "education" : "practical";
  const place = data.school ? data.school : data.company;
  const designation = data.school ? data.degree : data.title;

  return (
    <article className="card">
      <div id="heading">
        <span id="date">{`${data.from} -> ${data.to}`}</span>
        <h3 id={type}>{place}</h3>
        <div className="cardbuttons">
          <button
            onClick={() => {
              handleEdit(data);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(data.id, type);
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <h4 id={designation}>{designation}</h4>
      {data.desc && (
        <>
          <h5>Extra info:</h5>
          <p id="desc">{data.desc}</p>
        </>
      )}
    </article>
  );
}
export default Card;
