import express from "express"

const app=express()

app.use(cors({
    origin:[
        "*"
    ]
}));

export default app;