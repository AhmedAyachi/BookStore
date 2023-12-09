import {GraphQLList} from "graphql";
import {AuthorType} from "../Types/index.js";
import * as data from "../../Data/index.js";


export default {
    name:"authors",
    type:new GraphQLList(AuthorType),
    resolve:()=>data.authors,
}
