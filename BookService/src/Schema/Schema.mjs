import {GraphQLObjectType,GraphQLString,GraphQLSchema} from "graphql";
import {BookType} from "./BookEndpoint/index.mjs";
import books from "./Books.json";


export default new GraphQLSchema({
    query:new GraphQLObjectType({
        name:"root",
        fields:{
            book:{
                type:BookType,
                args:{
                    id:{type:GraphQLString},
                    resolve:(parent,args)=>{
                        const {id}=args;
                        return books.find(book=>book.id===id);
                    },
                },
            },
        },
    }),
});