import {GraphQLDate} from "qlboost";
import {GraphQLString,GraphQLNonNull} from "graphql";
import {AuthorType} from "../Types/index.js";
import {Author} from "../../Models/index.js";
import {capitalize} from "../../Resources/index.js";


export default {
    name:"addAuthor",
    type:AuthorType,
    args:[
        {
            name:"name",
            type:new GraphQLNonNull(GraphQLString),
            resolve:async (value)=>{
                value=value.trim();
                if(value){
                    const name=capitalize(value.toLowerCase());
                    const exists=Boolean(await Author.findOne({name}));
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
        args.id=(await Author.count())+1;
        const author=new Author(args);
        return author.save();
    },
}
