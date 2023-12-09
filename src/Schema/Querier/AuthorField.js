import {GraphQLID} from "graphql";
import {AuthorType} from "../Types/index.js";
import {Author} from "../../Models/index.js";


export default {
    name:"author",
    type:AuthorType,
    args:{
        id:{type:GraphQLID},
    },
    resolve:(parent,args)=>Author.findOne({id:args.id}),
}
