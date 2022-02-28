import {GraphQLObjectType,GraphQLSchema,GraphQLID,GraphQLList} from "graphql";
import {BookType,AuthorType} from "./Types/index.js";
import {authors,books} from "./Data/index.js";
import Mutation from "./Mutation.js";
import {Book,Author} from "../Models/index.js";


export default new GraphQLSchema({
    query:new GraphQLObjectType({
        name:"Root",
        fields:{
            book:{
                type:BookType,
                args:{
                    id:{type:GraphQLID},
                },
                resolve:(parent,args)=>Book.findById(args.id),
            },
            author:{
                type:AuthorType,
                args:{
                    id:{type:GraphQLID},
                },
                resolve:(parent,args)=>Author.findById(args.id),
            },
            books:{
                type:new GraphQLList(BookType),
                resolve:()=>Book.find(),
            },
            authors:{
                type:new GraphQLList(AuthorType),
                resolve:()=>Author.find(),
            },
        },
    }),
    mutation:Mutation,
});
