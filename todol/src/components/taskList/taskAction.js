import {requestPending, addTaskSuccess, requestFail} from './taskSlice';
import {createTask, getTaskLists} from '../../api/taskApi.js'


const addTask = fromDt  => async dispatch =>{
    try{

        dispatch(requestPending());
        const result = await createTask(fromDt)
        dispatch(addTaskSuccess(result));
        result.status === "success" && getTaskLists();


    }catch(error){
        dispatch(requestFail(error.message));

    }
}