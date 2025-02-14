function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div className="input">
      <label htmlFor={name}>{label}: </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
export default Input;
