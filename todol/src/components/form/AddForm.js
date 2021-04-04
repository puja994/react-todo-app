import React, {useState} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'


const initialFormData = {
    title: "test",
    hr: 10,

};

export const AddForm = ({handleOnAddTask}) => {

const [ task, setTask] = useState(initialFormData);


const handleOnChange = e =>{
  const {name, value} = e.target;
  setTask({
    ...task,
     [name]: value
  })
}

const handleOnSubmit = e => {
  e.preventDefault();
  handleOnAddTask(task);
}



    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
  <Row>
    <Col>
      <Form.Control
       placeholder="Task name" 
      onChange= {handleOnChange}
      name="title"
      value={task.title} />
    </Col>
    <Col>
      <Form.Control  
      name="hr"
      type="number" 
      placeholder="number of hours" 
      value={task.hr}
      onChange={handleOnChange}
       />
    </Col>
    <Col>
    <Button  type="submit">Add task</Button>
    </Col>
  </Row>
</Form>
        </div>
    )
}
