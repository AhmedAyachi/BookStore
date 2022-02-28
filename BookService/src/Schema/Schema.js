import {GraphQLObjectType,GraphQLSchema,GraphQLID,GraphQLList} from "graphql";
import {BookType,AuthorType} from "./Types/index.js";
import {authors, books} from "./Data/index.js";


export default new GraphQLSchema({
    query:new GraphQLObjectType({
        name:"Root",
        fields:{
            book:{
                type:BookType,
                args:{
                    id:{type:GraphQLID},
                },
                resolve:(parent,args)=>books.find(book=>book.id===args.id),
            },
            author:{
                type:AuthorType,
                args:{
                    id:{type:GraphQLID},
                },
                resolve:(parent,args)=>authors.find(author=>author.id===args.id),
            },
            books:{
                type:new GraphQLList(BookType),
                resolve:()=>books,
            },
            authors:{
                type:new GraphQLList(AuthorType),
                resolve:()=>authors,
            },
        },
    }),
});