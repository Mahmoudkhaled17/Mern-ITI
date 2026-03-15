function Button({ text, color, ayhaga }) {
  return (
    <button style={{ backgroundColor: color }} onClick={ayhaga}>
      {text}
    </button>
  );
}

export default Button;