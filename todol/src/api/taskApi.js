import axios from 'axios';
const rootUrl = "http://localhost:5000/api/v1"

export const createTask = frmData =>{
    return new Promise (async(resolve,reject)=>{
    try{
       // throw new Error("some testing error")
        const response= await axios.post(rootUrl, frmData)
        resolve(response.data)
    
      } catch(error){
        resolve({
            status: "error" ,
            message: error.message
        })

      }
    })
}

export const getTaskLists = () =>{
    return new Promise (async(resolve,reject)=>{
    try{
       // throw new Error("some testing error")
        const {data}= await axios. get(rootUrl)
        resolve(data.result)
    
      } catch(error){
        resolve(false)

      }
    })
}