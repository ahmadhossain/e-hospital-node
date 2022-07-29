import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'


const app = express();
dotenv.config()

const users = [];

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post('/users',(req, res)=>{ 
    const user =  { name: req.body.name, password: req.body.password }
    users.push(user)
    res.status(201).send("Created")

})

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URL)
    .then(()=>app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
    .catch((err)=>console.log(err));


