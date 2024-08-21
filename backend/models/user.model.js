import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required:true
    },
    email: {
        type : String,
        required:true,
        unique:true
    },
    phone : {
        type :String,
        required:true
   }, 
});

const user = mongoose.model('user',userSchema);