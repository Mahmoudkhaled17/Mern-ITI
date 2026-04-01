import "./app.css"
import Table_1 from"./component/Table.jsx"
import {Add} from"./component/Add_form_s.jsx"
import {list_emp} from"./utilits/Data"
import { useState } from "react"
function App() {
const [employee,setemp]=useState(list_emp)

 

  return (<>
<Table_1 emp={employee}/>
<Add set={setemp}/>
</>
  )
}

export default App
