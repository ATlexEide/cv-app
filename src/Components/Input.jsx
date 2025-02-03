function Input({ label, name, callback }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" onChange={callback} />
    </>
  );
}
export default Input;
