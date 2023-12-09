import {GraphQLObject} from "qlboost";
import AddAuthorField from "./AddAuthorField.js";
import AddBookField from "./AddBookField.js";


export default GraphQLObject({
    name:"Mutator",
    fields:[
        AddAuthorField,
        AddBookField,
    ],
});
