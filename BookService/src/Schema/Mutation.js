import {Book,Author} from "../Models/index.js";
import {BookType,AuthorType} from "./Types/index.js";
import {GraphQLObjectType,GraphQLString,GraphQLInt,GraphQLID,GraphQLNonNull} from "graphql";


export default new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addAuthor:{
            type:AuthorType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull(GraphQLInt)},
            },
            resolve:(parent,args)=>{
                const author=new Author(args);
                //console.log(author);
                return author.save();
            },
        },
        addBook:{
            type:BookType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                genre:{type:new GraphQLNonNull(GraphQLString)},
                authorId:{type:GraphQLID},
            },
            resolve:(parent,args)=>{
                const book=new Book(args);
                return book.save();
            },
        },
    },
});
