import {GraphQLObject,GraphQLDate} from "qlboost";
import {GraphQLString,GraphQLID,GraphQLList} from "graphql";
import BookType from "./BookType.js";
import * as data from "../../Data/index.js";


export default GraphQLObject({
    name:"Author",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        birthdate:GraphQLDate({
            key:"birthdate",
            format:"dmy",
            srcFormat:"dmy",
            seperator:"/",
            prettify:true,
        }),
        books:{
            type:new GraphQLList(BookType),
            resolve:(author)=>{
                const {id}=author;
                return data.books.filter(book=>book.authorId===id);
            },
        },
    }),
});
