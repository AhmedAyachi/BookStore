import {GraphQLObject} from "qlboost";
import {GraphQLString,GraphQLID} from "graphql";
import AuthorType from "./AuthorType.js";
import * as data from "../../Data/index.js";


export default GraphQLObject({
    name:"Book",
    fields:()=>[
        {name:"id",type:GraphQLID},
        {name:"name",type:GraphQLString},
        {name:"genre",type:GraphQLString},
        {
            name:"author",
            type:AuthorType,
            resolve:(book)=>{
                const {authorId}=book;
                return data.authors.find(author=>author.id===authorId);
            },
        },
    ],
});
