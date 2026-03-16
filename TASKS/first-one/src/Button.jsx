function Button({ text, color, ayhaga }) {
  return (
    <button style={{ backgroundColor: color }} onClick={ayhaga}>
      {text}
    </button>
  );
}

function Newbutton(){
  return(
    <>
    <button style={{width:"100px",height:"50px",backgroundColor:"lightblue ",display:"block",margin:"auto",marginTop:"10px" }}>mahmoud</button>
    <h1>new button</h1>
    </>)
}

export default Button;
export {Newbutton};


function Buttonsprops(props) {
  const style1 = {
  color:props.color,
  backgroundColor:props.bgcolor,
}
  return (
    <button style={style1}>{props.text}</button>
  );
}
export {Buttonsprops};