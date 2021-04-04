import TaskList from './TaskLists.schema.js';

export const insertTask = (newTask) => {
    return new Promise((resolve, reject) =>{

        try{
             TaskList(newTask)
            .save()
            .then((data) =>{
                resolve(data) 
            }
            )
            .catch((error)=>{
                reject (error)
            })
    
        } catch (error) {
            reject(error)
        }

    })
    
}

export const updateToDo = ({_id, todo}) =>{
    return new Promise((resolve, reject)=>{
        try{
             //update tasklist
             TaskList.findByIdAndUpdate({_id},
                {
                    $set: { todo:todo},
                },
                {
                    new:true
                })
                .then(data=> resolve(data))
                .catch(error=>reject(error))


            

        }catch(error){
            console.error(error)
            reject(error)
        }
    })
}

export const getTasks = () =>{
    return new Promise((resolve, reject)=>{
        try{
             
             TaskList.find()
                .then(data=> resolve(data))
                .catch(error=>reject(error))


            

        }catch(error){
            console.error(error)
            reject(error)
        }
    })
}

export const deleteTasks = (ids) =>{

    if(!ids.length) return false
    return new Promise((resolve, reject)=>{
        try{
             
             //TaskList.findByIdAndDelete(_id)
              TaskList.deleteMany({
                  _id:{
                      $in:ids,
                  },
              })
             .then(data=> resolve(data))
                .catch(error=>reject(error))
 

        }catch(error){
            console.error(error)
            reject(error)
        }
    })
}

