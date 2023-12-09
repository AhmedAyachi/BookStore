import {GraphQLObject} from "qlboost";
import BookField from "./BookField.js";
import AuthorField from "./AuthorField.js";
import BooksField from "./BooksField.js";
import AuthorsField from "./AuthorsField.js";


export default GraphQLObject({
    name:"Querier",
    fields:[
        BookField,
        AuthorField,
        BooksField,
        AuthorsField,
    ],
});
