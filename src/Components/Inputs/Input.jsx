function Input({ label, name, type, value, onChange, className, placeholder }) {
  switch (name.toLowerCase()) {
    case "to":
    case "from":
      type = "date";
      break;
    case "desc":
    case "bio":
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
          placeholder={placeholder ? placeholder : ""}
        />
      )}
    </div>
  );
}

export default Input;
