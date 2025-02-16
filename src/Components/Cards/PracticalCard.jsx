function PracticalCard({ data, handleEdit, handleDelete }) {
  return (
    <article className="card">
      <div id="heading">
        <span id="date-practical">{`${data.timeFrom} -> ${data.timeTo}`}</span>
        <h3 id="company">{data.company}</h3>
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
              handleDelete(data.id, "practical");
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <h4 id="title">{data.title}</h4>
      {data.desc && (
        <div>
          <h5>Extra info:</h5>
          <p id="desc-practical">{data.desc}</p>
        </div>
      )}
    </article>
  );
}
export default PracticalCard;
