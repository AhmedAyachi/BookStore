import mongoose from "mongoose";


export default mongoose.model("books",new mongoose.Schema({
    id:String,
    name:String,
    genre:String,
    authorId:String,
}));
