import logo from './logo.svg';
import {useState, useEffect} from 'react'

import {Button, Container, Row, Col, Alert, Spinner} from 'react-bootstrap';
import {AddForm} from './components/form/AddForm'
import './App.css';
import { TaskList } from './components/taskList/TaskList';
import {NoToDoList} from './components/taskList/NoToDoList'
import{ createTask, getTaskLists } from './api/taskApi.js'






 
 
  const App = () =>{
    //create new state
    //[] TODOS
    //[] add form ui
    //[] add form data to state
    //[]render state data in list view
    //[] handle onmark as notodo and todo list
    //[] select items and delete
    //[] count total not to do hours
  
    const [taskLists, setTaskLists ] = useState([]);
    const [notToDoLists, setNotToDoLists] = useState([]);
    //const [totalHrs, setTotalHrs] = useState(0);
    const [itemToDelete, setItemToDelete] = useState([]);
    const [notToDoitemToDelete, setNotToDoItemToDelete] = useState([]);
    const [response, setResponse] = useState({
      status: "",
      message: ""
    })
    const [isPending, setIsPending] = useState(false)
   // useEffect(() => {
    
   // }, [itemToDelete])

   //calcykate tirtal hours

   const toDoTotalHrs = taskLists.reduce((subTtl, item)=>{
     return subTtl + item.hr
   },0)

   const notToDoTotalHrs = notToDoLists.reduce((subTtl, item)=>{
    return subTtl + item.hr
  },0)

  const totalHrs = toDoTotalHrs + notToDoTotalHrs

 const handleOnAddTask = async frmDt =>{

  if (totalHrs + +frmDt.hr > 168){
    return alert("you have exceeded total weekly hours")

  }

  setIsPending(true)
  const res = await createTask(frmDt)
  setResponse(res)
  setIsPending(false)

  if(res.status === 'success'){
    const fetchTasks = await getTaskLists()
    fetchTasks.length && setTaskLists(fetchTasks)
  }
  console.log(res);
  //const urlEndpoint = "http://localhost:5000/api/v1";
  
  
   //setTaskLists([...taskLists, frmDt]);
   //setTotalHrs(totalHrs + +frmDt.hr)
   
 }

 /*POST http://localhost:5000/api/v1
Content-Type: application/json

{
    "task": "learning to code",
    "hr": 15
}
*/
 
 const handleOnMarkAsNotToDo = index => {
   const item = taskLists[index];
   const newArg = taskLists.filter((item, i)=> i !==index);
   setTaskLists(newArg);

   setNotToDoLists([...notToDoLists, item]);
 }

 const markAsToDo = index =>{
   const item = notToDoLists[index];
   const newArg = notToDoLists.filter((item, i) => 
   i!==index);

   setNotToDoLists(newArg);
   setTaskLists([...taskLists, item]);
 }

 const handleOnTask = frmDt =>{
   setTaskLists([...taskLists, frmDt])
   }

   const handleOnChange = e =>{
     const {checked, value} = e.target;

     if(checked){
       return setItemToDelete([...itemToDelete, +value])
     }

     const newlist = taskLists.filter(item => item !== value)
     setItemToDelete(newlist)

     //console.log("change", checked, value);

   }

  const deleteFromTaskList = ()=>{
    const newArg = taskLists.filter((item, i) => !itemToDelete.includes(i))

       setTaskLists(newArg);
       setItemToDelete([]);

       //total hours from newArg

       const newHrTtl = newArg.reduce((subTtl, item)=>{
         return subTtl + item.hr;
       },0)
       //setTotalHrs(newHrTtl)
    
  }

  const deleteFromNotToDoTaskList = ()=>{
    const newArg = notToDoLists.filter((item, i) => !notToDoitemToDelete.includes(i))

       setNotToDoLists(newArg);
       setNotToDoItemToDelete([]);

       //total hours from newArg

       
    
  }
   //delete item when button is clicked

   const deleteItems = ()=>{
     if(
     window.confirm ("Are you sure you want to delete the selected items?"))
     {
      deleteFromTaskList()
      deleteFromNotToDoTaskList()
       
     }
   }


   const handleOnChangeNotToDo =e =>{
    const {checked, value} = e.target;

    if(checked){
      return setNotToDoItemToDelete([...notToDoitemToDelete, +value])
    }

    const newlist = notToDoLists.filter(item => item !== value)
    setNotToDoItemToDelete(newlist)

    //console.log("change", checked, value);

  }
  //delete item when button is clicked

 

 
  return (
    <div className="main">
    <Container  variant="danger">
  <Row>
  <Col>
    <div className="text-center mt-5">
      <h1>Not To Do List</h1>
    </div>
 </Col>
  </Row>
  <hr />

<div>
  {
    response.message && (
<Alert variant= {response.status==="success" ? "success" : "danger"}> {response.message}
  </Alert>
    )
  }
 
  {
   isPending && <Spinner variant="primary" animation="border" />
  }
</div>


<AddForm  handleOnAddTask ={handleOnAddTask}/>
<hr />

<Row>

  <Col>
  <TaskList 
  taskLists ={taskLists} 
  markAsNotdo={handleOnMarkAsNotToDo}
  handleOnChange={handleOnChange}
  itemToDelete={itemToDelete}
  //deleteItems={deleteItems}
  
  
  />
  </Col>

  <Col>
 < NoToDoList  
 notToDoLists={notToDoLists}  
  markAsToDo={markAsToDo}
 handleOnChangeNotToDo={handleOnChangeNotToDo}
 notToDoitemToDelete={notToDoitemToDelete}
 />
 </Col>
</Row>

<Row>
  <Col>
  <Alert variant="primary"> totalAllocatedHours = 
  {totalHrs}   / 168 </Alert>

  <hr></hr>

  </Col>
  
</Row>

<Row>
<Col><Button onClick={deleteItems} >Delete</Button></Col>
</Row>

</Container>

      
    </div>
  );
}

export default App;