import {GraphQLID} from "graphql";
import {BookType} from "../Types/index.js";
import {Book} from "../../Models/index.js";



export default {
    name:"book",
    type:BookType,
    args:{
        id:{type:GraphQLID},
    },
    resolve:(parent,args)=>Book.findOne({id:args.id}),
};
