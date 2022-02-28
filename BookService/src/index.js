import express from "express";
import {graphqlHTTP} from "express-graphql";
import Schema from "./Schema/Schema.js";


const app=express();
app.use("/graphql",graphqlHTTP({
    schema:Schema,
    graphiql:true,
}));
/* app.get("/",(request,result)=>{
    result.send("this is a server response message");
}); */
app.listen(4000,()=>{
    console.log("server is up");
});
