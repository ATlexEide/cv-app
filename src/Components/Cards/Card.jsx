function Card({
  workexp = false,
  skill = false,
  skillName,
  language = false,
  languageName,
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
  if (language)
    return (
      <h3 className="info">
        <i
          className={`fa-brands fa-${
            languageName.toLowerCase() === "javascript"
              ? "js"
              : languageName.toLowerCase()
          }`}
        ></i>
        {languageName}
      </h3>
    );

  if (workexp)
    return (
      <section className="workexp card" id={data.id}>
        <h3>
          <span className="timespan">
            {data.from && data.from.replace(/-/g, "/")} - $
            {data.to && data.to.replace(/-/g, "/")}
          </span>{" "}
          | {data.company}
        </h3>
        <h4>{data.title}</h4>
        {data.desc && <p>{data.desc}</p>}
        <CardButton
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          data={data}
          type={"practical"}
        />
      </section>
    );

  return (
    <section className="school info card">
      <div className="year">
        {data.from && data.from.replace(/-/g, "/")} -{" "}
        {data.to && data.to.replace(/-/g, "/")}
      </div>
      <h3>{data.school}</h3>
      <h4>{data.study}</h4>
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
        type={"education"}
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

// FIXME: ERROR ON EDITING DATA WITH "current" key:value
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
