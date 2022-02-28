import {GraphQLObjectType,GraphQLString,GraphQLID,GraphQLInt,GraphQLList} from "graphql";
import BookType from "./BookType.js";
//import {books} from "../Data/index.js";
import {Book,Author} from "../../Models/index.js";


export default new GraphQLObjectType({
    name:"Author",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(BookType),
            resolve:(author)=>{
                return Book.find({authorId:author.id});
            },
        },
    }),
});
