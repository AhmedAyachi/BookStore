import {GraphQLDate} from "qlboost";
import {GraphQLString,GraphQLNonNull} from "graphql";
import {AuthorType} from "../Types/index.js";
import * as data from "../../Data/index.js";
import {capitalize} from "../../Resources/index.js";


export default {
    name:"addAuthor",
    type:AuthorType,
    args:[
        {
            name:"name",
            type:new GraphQLNonNull(GraphQLString),
            resolve:(value)=>{
                value=value.trim();
                if(value){
                    const name=capitalize(value.toLowerCase());
                    const exists=data.authors.some(author=>author.name===name);
                    if(exists) throw new Error("author already exists");
                    else return name;
                }
                else throw new Error("invalid name");
            },
        },
        GraphQLDate({
            name:"birthdate",
            required:true,
            format:"dmy",
            srcFormat:"dmy",
            seperator:"-",
            prettify:false,
        }),
    ],
    resolve:async (parent,args)=>{
        const {authors}=data;
        args.id=String(authors.length+1);
        args.books=[];
        authors.push(args);
        return args;
    },
}
