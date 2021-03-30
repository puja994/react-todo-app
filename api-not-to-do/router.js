import express from 'express'
const router = express.Router()

import { insertTask, updateToDo, getTasks, deleteTasks } from './models/task_lists/TaskLists.model.js'

router.get("*", (req,res,next) =>{

    next()
})

router.get("/", async (req,res)=>{
    //call the function that get all the task list from database
    const result = await getTasks()
    
    res.json({
        status:'success',
        message: 'here are tasklist',
         result
    })
    
})

router.post("/", async (req,res)=>{
   
    console.log(req.body)

 const result = await insertTask(req.body)
 if (result._id){
     return res.json({
         status: 'success',
         message: 'your new task is added',
         result,
 })

 }
    res.json({
        status: 'error',
        message: 'unable to add your new task, please try again later',
    })
})

router.put("/", (req,res)=>{
    res.send("reached to put")
})


////update todolist
router.patch("/", async (req,res)=>{

    try{

        const result = await updateToDo(req.body)
        res.json(result)

    }catch(error){
        res.json({
            status: 'error',
            message: error.message
        })
    }
    
})

router.delete("/", async (req,res)=>{
    const {ids} = req.body
    const result =  await deleteTasks(ids)
    console.log(result)

    if ( result && result.deletedCount){
       return res.json({
            status: "success",
            message: "item deleted",
        })
    }

    res.json({
        status: "error",
        message: "nothing to delete",
    })

})



export default router