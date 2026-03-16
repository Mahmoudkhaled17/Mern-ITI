import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './Button.jsx';
import {Buttonsprops} from './Button.jsx';


export default function ButtonsFun() {
  return (
    
    <div>
      <Button text="Click me !!" color="blue" ayhaga={()=>handleButtonClick("https://www.google.com")} ></Button>
      <Button color="green" text="Submit"></Button>
      <Button color="yellow" text="Cancel"></Button>
      <Button color="red" text="Delete"></Button>
      <Button color="purple" text="Save"></Button>
      <Button color="orange" text="Edit"></Button>
      <Buttonsprops text="Custom Button" color="cyan" bgcolor="lightgray" ></Buttonsprops>

      
    </div>
  );
}

const handleButtonClick = (url) => { 
window. location.href = url;};

function ListFunP(props){
  
  if(!props.animals){
       return <h1>loading...</h1>
      }
  if(props.animals.length===0){
    return <h1>no data</h1>
  }
  return(
    <div>
      
      {props.animals.map((animal,index)=>{
        return animal.startsWith("a")?  <li key={index}>{animal}</li>: null;
        })}
    </div>
  )};

function ListFun(){
  const animals=["cat","dog","rabbit"];
  return(
    <div>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
    <ul>
      {animals.map((animal,index)=><li key={index}>{animal}</li>)}
    </ul>

    <ul>
    <ListFunP animals={["adsasss","sdasad","safasf"]}></ListFunP>
    </ul>
    </div>



  );
}
export {ListFun};