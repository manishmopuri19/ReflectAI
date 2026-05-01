import mongoose from "mongoose";

const usersSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true
        },
        mobile:String,
        studySpaces:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"studySpace"
        }]

        
    },
    {timestamps:true}
);

export const user=mongoose.model("user",usersSchema);