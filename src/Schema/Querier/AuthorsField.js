import {GraphQLList} from "graphql";
import {AuthorType} from "../Types/index.js";
import {Author} from "../../Models/index.js";


export default {
    name:"authors",
    type:new GraphQLList(AuthorType),
    resolve:()=>Author.find(),
}
