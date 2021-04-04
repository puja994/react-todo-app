import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    isPending: false,
    status: "success",
    message: "messaged"
}

const taskSlice = createSlice({

    name: "task",
    initialState,
    reducers:{
        requestPending: state =>{
            state.isPending = true
        },
        addTaskSuccess: (state, action) =>{
            state.isPending = false;
            state.status = action.payload.status;
            state.message = action.payload.message;
        },
        requestFail: (state, {payload}) =>{
            state.isPending = false;
            state.state = "error";
            state.message = payload;
        },
    }

})

const {reducer, actions} = taskSlice;

export const  {requestPending, addTaskSuccess, requestFail} = actions;
export default reducer;