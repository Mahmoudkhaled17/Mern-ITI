import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ButtonsFun from './App.tsx'
import Greeting from './Greeting.jsx';
import Test from './Test.jsx';
import {Newbutton} from './Button.jsx';
import {ListFun} from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Greeting />
    <Test />
    <ButtonsFun />
    <Newbutton />
    <h1>mafdsf</h1>
    <h2>mafdsf</h2>
    <ListFun />
  </StrictMode>,
);


