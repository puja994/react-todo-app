
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors'
app.use(cors())

//import bodyParser from 'body-parser';
const PORT = 5000;
import router from"./router.js";

//connecting to mongo database
import mongoClient from './config/db.js'
mongoClient();

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
 
// parse application/json
app.use(express.json());





app.use('/api/v1', router);

app.use('/', (req,res)=>{

    throw new Error("test error")
    res.send("working")
});

// app.use((error, req, res, next) =>{

//     res.send(error.message)
// })

app.listen(PORT, error=>{
    error && console.log(error)

    console.log(`server is running at http://localhost:${PORT}`)
});
