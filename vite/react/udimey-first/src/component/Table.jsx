import {list_emp} from"../utilits/Data"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { red } from "@mui/material/colors";




export default function Table_1({emp}){
    return(
          
            <TableContainer component={Paper} sx={{backgroundColor:"gray",width:"70%",margin:"auto"}} >
    <Table >
      <TableHead sx={{backgroundColor:"red"}}>
        <TableRow>
        <TableCell>name</TableCell>
        <TableCell>salary</TableCell>
        <TableCell>company</TableCell>
        <TableCell>postion</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {emp.map((emp,z)=>{
          return(
          <>
          <TableRow key={z}>
            {emp.map((ele,i)=>
              <TableCell key={i}>{ele}</TableCell>
            )}
          </TableRow>
          
          </>)
      })}
      </TableBody>
    </Table>
    </TableContainer>
  
    )
}