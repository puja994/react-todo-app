import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './components/taskList/taskSlice.js'


const store = configureStore({
    reducer: {
        //list all of our store reduces
        task: taskReducer,
    },
})
export default store;