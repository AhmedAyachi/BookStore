import {GraphQLID} from "graphql";
import {AuthorType} from "../Types/index.js";
import * as data from "../../Data/index.js";


export default {
    name:"author",
    type:AuthorType,
    args:{
        id:{type:GraphQLID},
    },
    resolve:(parent,args)=>{
        const {id}=args;
        return data.authors.find(author=>author.id===id);
    },
}
