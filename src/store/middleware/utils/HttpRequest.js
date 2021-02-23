import {graphQl} from "../axios";

export  function* graphQLRequest(body) {

    return yield graphQl.post("",body)
}