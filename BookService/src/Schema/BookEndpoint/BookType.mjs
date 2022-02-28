import {GraphQLObjectType,GraphQLString} from "graphql";


export default new GraphQLObjectType({
    name:"book",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
    }),
});
