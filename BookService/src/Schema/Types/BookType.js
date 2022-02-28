import {GraphQLObjectType,GraphQLString,GraphQLID} from "graphql";
import AuthorType from "./AuthorType.js";
import {authors} from "../Data/index.js";


export default new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve:(book)=>authors.find(author=>author.id===book.authorId),
        },
    }),
});
