import mongoose from "mongoose";


export default mongoose.model("books",new mongoose.Schema({
    name:String,
    genre:String,
    authorId:String,
}));
