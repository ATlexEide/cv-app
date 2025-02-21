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
    case "file":
      type = "file";
      break;

    default:
      type = "text";
      break;
  }

  if (type === "textarea")
    return (
      <div className="input">
        <label htmlFor={name}>{label}: </label>
        <textarea
          className={className}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder ? label : ""}
        />
      </div>
    );
  if (type === "file")
    return (
      <div className="input">
        <label htmlFor={name}>{label}: </label>
        <input
          className={className}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          accept="image/png, image/gif, image/jpeg"
          placeholder={placeholder ? placeholder : ""}
        />
      </div>
    );
  return (
    <div className="input">
      <label htmlFor={name}>{label}: </label>
      <input
        className={className}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
}

export default Input;
