import {GraphQLList} from "graphql";
import {BookType} from "../Types/index.js";
import {Book} from "../../Models/index.js";


export default {
    name:"books",
    type:new GraphQLList(BookType),
    resolve:()=>Book.find(),
}
