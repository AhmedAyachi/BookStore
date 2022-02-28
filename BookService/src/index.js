import express from "express";
import {graphqlHTTP} from "express-graphql";
import Schema from "./Schema/Schema.js";
import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/BookStore");
mongoose.connection.once("open",async ()=>{
    const col=mongoose.connection.collection("authors");
    console.log(await col.countDocuments());
    console.log("connected to database");
});

const app=express();
app.use("/graphiql",graphqlHTTP({
    schema:Schema,
    graphiql:true, 
}));
app.listen(4000,async ()=>{
    console.log("listening on port 4000");
});

/* app.get("/",(request,result)=>{
    result.send("this is a server response message");
}); */
