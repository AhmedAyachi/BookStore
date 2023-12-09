import {GraphQLList} from "graphql";
import {BookType} from "../Types/index.js";
import * as data from "../../Data/index.js";


export default {
    name:"books",
    type:new GraphQLList(BookType),
    resolve:()=>data.books,
}
