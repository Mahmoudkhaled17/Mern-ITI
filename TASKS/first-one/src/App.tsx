import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './Button.jsx';


export default function App() {
  return (
    
    <div>
      <Button text="Click me !!" color="blue" ayhaga={handleButtonClick} ></Button>
      <Button color="green" text="Submit"></Button>
      <Button color="yellow" text="Cancel"></Button>
      <Button color="red" text="Delete"></Button>
      <Button color="purple" text="Save"></Button>
      <Button color="orange" text="Edit"></Button>
    </div>
  );
}

const handleButtonClick = () => { 
window. location.href = "https://www.google.com"}


const colors = ["pink", "green", "blue", "yellow", "purple"]
export default function App() {

const [ backgroundColor,setBackgroundColor]= useState(colors[0])

const onButtonClick = (color) =>{

return (
<div style={}>
{colors.map((color) => (<button key={color} >
{color}

</button>))}

</div>

);

}