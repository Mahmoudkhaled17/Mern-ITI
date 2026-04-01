import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {list_emp} from"../utilits/Data"

export function Add({set}) {
  const butt = {
    width: "20%",
    margin: "20px",
  };
let name="";
let age="";
let salary="";
let comp="";
let emp_s=[]
const handlename=(e)=>{
  name=e.target.value
    

  }
  const handleage=(e)=>{
    age=e.target.value
  
  }
  const handlesalary=(e)=>{
    salary=e.target.value
    
  }
  const handlecompany=(e)=>{
    comp=e.target.value
   
  }

  const handlesub=()=>{
    emp_s.push(name)
    emp_s.push(age)
    emp_s.push(salary)
     emp_s.push(comp)

    set((prev)=>[...prev,emp_s])
    
    console.log(emp_s)
    console.log(list_emp)
    emp_s=[]

  }

  return (
    <Paper sx={{ marginTop: "50px", display: "flex", flexDirection: "column" }}>
      <h1 style={{ color: "red", textAlign: "center" }}>
        Enter the new employee
      </h1>

      <TextField  onChange={handlename} id="outlined1" label="name" variant="outlined" sx={butt} />
      <TextField onChange={handleage} id="outlined2" label="salary" variant="outlined" sx={butt} />
      <TextField onChange={handlesalary} id="outlined3" label="age" variant="outlined" sx={butt} />
      <TextField onChange={handlecompany} id="outlined4" label="company" variant="outlined" sx={butt} />
      <Button onClick={handlesub} variant="contained" sx={{ width: "20%", margin: "auto" }}>
        {" "}
        submit
      </Button>
    </Paper>
  );
}
