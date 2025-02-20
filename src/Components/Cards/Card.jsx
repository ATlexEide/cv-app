function Card({ skill = false, skillName, data, handleEdit, handleDelete }) {
  if (skill)
    return (
      <section className="skill info">
        <h3>
          <i className={`fa-brands fa-${skillName.toLowerCase()}`}></i>
          {skillName}
        </h3>
      </section>
    );

  const type = data.school ? "education" : "practical";
  const place = data.school ? data.school : data.company;
  const designation = data.school ? data.degree : data.title;

  return (
    <section className={`${type}-info`}>
      <div className="year">
        {data.from} - {data.to}
      </div>
      <h3>{place}</h3>
      <h4>{designation}</h4>
      {data.desc && (
        <>
          <h5>Extra info:</h5>
          <p id="desc">{data.desc}</p>
        </>
      )}
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
    </section>
  );
}

export default Card;

// <article className="card">
//   <div id="heading">
//     <span id="date">{`${data.from} -> ${data.to}`}</span>
//     <h3 id={type}>{place}</h3>

//   </div>

// </article>
