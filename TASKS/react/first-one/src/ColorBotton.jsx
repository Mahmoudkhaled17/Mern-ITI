import { useState } from "react";
const colors = ["pink", "green", "blue", "yellow", "purple"];
export default function ColorP() {

  const [backgroundColor, setBackgroundColor] = useState(colors[0]);


  const onButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div
      style={{
        backgroundColor,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "200px",
        height: "200px",
      }}
    >
      {colors.map((color) => (
        <button key={color} onClick={() => onButtonClick(color)}>
         
          {backgroundColor === color ? "Selected" : color}
        </button>
      ))}
    </div>
  );
}