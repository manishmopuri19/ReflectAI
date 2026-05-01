import express from "express"
import app from "./app.js"
import "dotenv/config"

const Port=process.env.Port || 8000

const startServer=async ()=>{
    try{
        
        app.listen(prompt,()=>{
            console.log(`server started successfully ${Port}`)
        });
    }
    catch(error){
        console.error("server failed to start:",error.message);
    }
};

startServer();