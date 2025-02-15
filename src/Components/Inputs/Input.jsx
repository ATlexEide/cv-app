function Input({ label, name, type = "text", value, onChange, className }) {
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
        />
      ) : (
        <input
          className={className}
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
