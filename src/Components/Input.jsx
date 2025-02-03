function Input({ label, name, value, callback }) {
  return (
    <div>
      <label htmlFor={name}>{label}: </label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={callback}
      />
    </div>
  );
}
export default Input;
