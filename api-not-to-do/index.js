
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors'
app.use(cors())
import path from 'path'

//import bodyParser from 'body-parser';
const PORT = process.env.PORT || 5000;
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

const __dirname = path.resolve()


if(process.env.NODE_ENV !== 'production'){
   app.use(express.static(
       path.join(path.join(__dirname, "/todol/build"))))

       app.get('*', (req,res)=>{
           res.sendFile(path.join(__dirname, '/todol/build/index.html'))
       })

   

}else{
   app.get ('/', (req,res)=>{
       res.send('working')
   })
}


// app.use((error, req, res, next) =>{

//     res.send(error.message)
// })

app.listen(PORT, error=>{
    error && console.log(error)

    console.log(`server is running at http://localhost:${PORT}`)
});
