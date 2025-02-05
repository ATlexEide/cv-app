function Input({ label, name, type = "text", value, callback }) {
  return (
    <div>
      <label htmlFor={name}>{label}: </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={callback}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={callback}
        />
      )}
    </div>
  );
}
export default Input;
