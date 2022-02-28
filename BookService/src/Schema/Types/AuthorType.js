import {GraphQLObjectType,GraphQLString,GraphQLID,GraphQLInt,GraphQLList} from "graphql";
import BookType from "./BookType.js";
import {books} from "../Data/index.js";


export default new GraphQLObjectType({
    name:"Author",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(BookType),
            resolve:(parent)=>books.filter(book=>book.authorId===parent.id),
        },
    }),
});
