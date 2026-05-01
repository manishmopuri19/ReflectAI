import mongoose from "mongoose";

const studySpaceSchema=new mongoose.Schema(
    {
        topic_name:{
            type:String,
            required:true
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        members:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }]
    },
    {
        timestamps:true
    }
);