function Card({
  workexp = false,
  skill = false,
  skillName,
  data,
  handleEdit,
  handleDelete,
}) {
  if (skill)
    return (
      <section className="skill info card">
        <h3>
          <i className={`fa-brands fa-${skillName.toLowerCase()}`}></i>
          {skillName}
        </h3>
      </section>
    );
  if (data) {
  }
  const type = data.school ? "education" : "practical";
  const place = data.school ? data.school : data.company;
  const designation = data.school ? data.degree : data.title;
  if (workexp)
    return (
      <section className="workexp card" id={data.id}>
        <h3>
          <span className="timespan">{`${data.from.replace(/-/g, "/")} - ${
            data.isCurrent ? "current" : data.to.replace(/-/g, "/")
          }`}</span>{" "}
          | {data.company}
        </h3>
        <h4>{data.title}</h4>
        {data.desc && <p>{data.desc}</p>}
        <CardButton
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          data={data}
          type={type}
        />
      </section>
    );

  return (
    <section className="school info card">
      <div className="year">
        {data.from.replace(/-/g, "/")} - {data.to.replace(/-/g, "/")}
      </div>
      <h3>{place}</h3>
      <h4>{designation}</h4>
      {data.desc && (
        <>
          <h5>Extra info:</h5>
          <p id="desc">{data.desc}</p>
        </>
      )}
      <CardButton
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        data={data}
        type={type}
      />
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

function CardButton(props) {
  return (
    <div className="cardbuttons">
      <button
        onClick={() => {
          props.handleEdit(props.data);
        }}
      >
        Edit
      </button>

      <button
        onClick={() => {
          props.handleDelete(props.data.id, props.type);
        }}
      >
        Remove
      </button>
    </div>
  );
}
