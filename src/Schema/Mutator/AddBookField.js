import {GraphQLString,GraphQLID,GraphQLNonNull} from "graphql";
import {BookType} from "../Types/index.js";
import * as data from "../../Data/index.js";
import {capitalize} from "../../Resources/index.js";


export default {
    name:"addBook",
    type:BookType,
    args:{
        name:{
            type:new GraphQLNonNull(GraphQLString),
            resolve:(value)=>{
                value=value.trim();
                if(value){
                    const name=capitalize(value.toLowerCase());
                    const exists=data.books.some(book=>book.name===name);
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
            resolve:(value)=>{
                const exists=data.authors.some(author=>author.id===value);
                if(exists) return value;
                else throw new Error("no author with such id");
            },
        },
    },
    resolve:(parent,args)=>{
        const {books}=data;
        args.id=String(books.length+1);
        books.push(args);
        return args;
    },
}
