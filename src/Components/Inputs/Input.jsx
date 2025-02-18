function Input({ label, name, type, value, onChange, className, placeholder }) {
  console.log(type);
  switch (type) {
    case "To":
    case "From":
      type = "date";
      break;
    case "Desc":
      type = "textarea";
      break;

    default:
      type = "text";
      break;
  }

  return (
    <div className="input">
      <label htmlFor={name}>{label}: </label>
      {type === "textarea" ? (
        <textarea
          className={className}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder ? label : ""}
        />
      ) : (
        <input
          className={className}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder ? label : ""}
        />
      )}
    </div>
  );
}
export default Input;
