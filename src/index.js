import express from "express";
import {graphqlHTTP} from "express-graphql";
import Schema from "./Schema/Schema.js";
import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/BookStore");
mongoose.connection.once("open",()=>{
    mongoose.connection.collection("authors");
    mongoose.connection.collection("books");
    console.log("connected to database");
    const app=express();
    app.use("/graphiql",graphqlHTTP({
        schema:Schema,
        graphiql:true, 
    }));
    app.get("/",(request,response)=>{
        response.header("Content-Type","text/html").send(`
            <h1>BookStore</h1>
            <a href="/graphiql">Use Graphiql</a>
        `);
    });
    app.listen(4000,()=>{
        console.log("listening on port 4000");
    });
});
