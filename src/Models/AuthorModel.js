import mongoose from "mongoose";


export default mongoose.model("authors",new mongoose.Schema({
    id:String,
    name:String,
    birthdate:String,
}));
