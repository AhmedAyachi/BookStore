import {GraphQLObject} from "qlboost";
import {GraphQLString,GraphQLID} from "graphql";
import AuthorType from "./AuthorType.js";
//import {authors} from "../Data/index.js";
import {Author} from "../../Models/index.js";


export default GraphQLObject({
    name:"Book",
    fields:()=>[
        {name:"id",type:GraphQLID},
        {name:"name",type:GraphQLString},
        {name:"genre",type:GraphQLString},
        {
            name:"author",
            type:AuthorType,
            resolve:(book)=>Author.findOne({id:book.authorId}),
        },
    ],
});
