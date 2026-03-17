import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router'
import Profil from "./Profil.jsx" 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"Profil",
    element: <Profil />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <router.Provider router={router} />
  </StrictMode>,
)
