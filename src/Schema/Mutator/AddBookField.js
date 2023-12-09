import {GraphQLString,GraphQLID,GraphQLNonNull} from "graphql";
import {BookType} from "../Types/index.js";
import {Book,Author} from "../../Models/index.js";
import {capitalize} from "../../Resources/index.js";


export default {
    name:"addBook",
    type:BookType,
    args:{
        name:{
            type:new GraphQLNonNull(GraphQLString),
            resolve:async (value)=>{
                value=value.trim();
                if(value){
                    const name=capitalize(value.toLowerCase());
                    const exists=Boolean(await Book.findOne({name}));
                    if(exists) throw new Error("book already exists");
                    else return name;
                }
                else throw new Error("invalid name");
            },
        },
        genre:{
            type:new GraphQLNonNull(GraphQLString),
            resolve:(value)=>{
                value=value.trim();
                if(value) return value.toLowerCase();
                else throw new Error("invalid genre");
            },
        },
        authorId:{
            type:GraphQLID,
            resolve:async (value)=>{
                const exists=Boolean(await Author.findOne({id:value}));
                if(exists) return value;
                else throw new Error("no author with such id");
            },
        },
    },
    resolve:async (parent,args)=>{
        args.id=(await Book.count())+1;
        const book=new Book(args);
        return book.save();
    },
}
