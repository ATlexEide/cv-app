function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  className,
  placeholder,
}) {
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
          placeholder={placeholder && label}
        />
      ) : (
        <input
          className={className}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder && value}
        />
      )}
    </div>
  );
}
export default Input;
