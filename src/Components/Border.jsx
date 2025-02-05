function Border({ style = "solid", size = "1px", color = "black" }) {
  return (
    <div
      style={{
        border: `${style} ${size} ${color}`,
      }}
    ></div>
  );
}
export default Border;
