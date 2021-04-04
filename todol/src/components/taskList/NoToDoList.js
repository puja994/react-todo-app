import React from 'react'
import {Card, Button, Table, InputGroup,Alert } from 'react-bootstrap'

export const NoToDoList = ({notToDoLists, markAsToDo, handleOnChangeNotToDo,notToDoitemToDelete}) => {

  
    const totalSavedTime = notToDoLists.reduce((subTtl, item)=>{
      return subTtl + item.hr;
    }, 0)
  

   
    return (
        <>
        <h2>Not to do list</h2>
        <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr >
      
      <th>task</th>
      <th>Hours</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
    notToDoLists.map((row,i)=>

    <tr key={i}>
      <td><input type="checkbox" defaultValue={row._id} onChange={handleOnChangeNotToDo}
      checked={notToDoitemToDelete.includes(row._id)}
      
      />{""}
      <label>{row?.title}</label>
      </td>
      
    <td>
{row?.title}

    </td>
    <td>{row?.hr}</td>
    <td>
      <Button onClick={() => markAsToDo(row._id)}> Mark AS Not to do</Button>
    </td>

    
  </tr>
      )}  
  </tbody>
</Table>
<Alert variant="success">total time save is {totalSavedTime} </Alert>
        </div>
        </>
    )
}
