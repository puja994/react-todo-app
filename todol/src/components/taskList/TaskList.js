import React from 'react'
import {Card, Button, Table, FormControl, InputGroup } from 'react-bootstrap'
import "./taskList.css"




export const TaskList = ({handleOnTask, taskLists, markAsNotTodo, handleOnChange, itemToDelete}) => {
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
      <td><input type="checkbox" defaultValue={row._id} onChange={handleOnChange} checked={itemToDelete.includes(row._id)}
      
      />{""}
      <label>{row?.title}</label>
      </td>
      
    <td>
{row?.title}

    </td>
    <td>{row?.hr}</td>
    <td>
      <Button onClick={() => markAsNotTodo(row._id)}> MarkAsNotToDo</Button>
      
    </td>

    
  </tr>
  
  )
}   
  </tbody>
</Table>
        
        </>
    )
}
