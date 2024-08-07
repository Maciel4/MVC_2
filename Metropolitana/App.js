import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./Backend/controllers/user.controller.js";
dotenv.config();

mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("Funcionamiento correcto de la base de datos")
    })
    .catch((error)=>{
        console.log("Conexion fallida", error)
    })

const app=express();
app.use(cors())   
;

app.listen(4000, () =>{
    console.log('El servidor funciona de manera correcta')
})

test()