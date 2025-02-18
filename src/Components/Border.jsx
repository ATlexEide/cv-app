function Border({ style = "solid", size = "1px", color = "black" }) {
  return (
    <div
      style={{
        borderBottom: `${style} ${size} ${color}`,
      }}
    ></div>
  );
}

export default Border;
