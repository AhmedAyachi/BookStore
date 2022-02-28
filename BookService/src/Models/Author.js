import mongoose from "mongoose";


export default mongoose.model("authors",new mongoose.Schema({
    name:String,
    age:Number,
}));
