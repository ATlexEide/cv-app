function Input({ label, name, value, callback }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={callback}
      />
    </>
  );
}
export default Input;
