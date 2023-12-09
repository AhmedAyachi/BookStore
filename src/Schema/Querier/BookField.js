import {GraphQLID} from "graphql";
import {BookType} from "../Types/index.js";
import * as data from "../../Data/index.js";


export default {
    name:"book",
    type:BookType,
    args:{
        id:{type:GraphQLID},
    },
    resolve:(parent,args)=>{
        const {id}=args;
        return data.books.find(book=>book.id===id);
    },
};
