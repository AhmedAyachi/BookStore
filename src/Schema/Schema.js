import {GraphQLSchema} from "graphql";
import Mutator from "./Mutator/Mutator.js";
import Querier from "./Querier/Querier.js";


export default new GraphQLSchema({
    query:Querier,
    mutation:Mutator,
});
