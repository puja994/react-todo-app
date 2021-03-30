import React from 'react'
import {Card, Button, Table, FormControl, InputGroup } from 'react-bootstrap'
import "./taskList.css"




export const TaskList = ({handleOnTask, taskLists, markAsToDo, markAsNotdo, handleOnChange, itemToDelete}) => {
    return (
        <>
        <h2>Task List  {' '}
        <i className="fas fa-info-circle text-primary" data-toggle="tooltip" title="here is some information"></i>
        

         </h2>
       

       

<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th></th>
      <th>task</th>
      <th>Hours</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>


{
  taskLists.map((row, i)=>
    <tr key={ i}>
      <td><input type="checkbox" defaultValue={i} onChange={handleOnChange} checked={itemToDelete.includes(i)}
      
      />{""}
      <label>{row?.title}</label>
      </td>
      
    <td>
{row?.title}

    </td>
    <td>{row?.hr}</td>
    <td>
      <Button onClick={() => markAsNotdo(i)}> MarkAsNotToDo</Button>
      
    </td>

    
  </tr>
  
  )
}


   
     
  </tbody>
</Table>
        
        </>
    )
}
