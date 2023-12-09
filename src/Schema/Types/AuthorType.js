import {GraphQLObject,GraphQLDate} from "qlboost";
import {GraphQLString,GraphQLID,GraphQLList} from "graphql";
import BookType from "./BookType.js";
//import {books} from "../Data/index.js";
import {Book} from "../../Models/index.js";


export default GraphQLObject({
    name:"Author",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        birthdate:GraphQLDate({
            key:"birthdate",
            format:"dmy",
            srcFormat:"dmy",
            seperator:"/",
            prettify:true,
        }),
        books:{
            type:new GraphQLList(BookType),
            resolve:(author)=>{
                return Book.find({authorId:author.id});
            },
        },
    }),
});
