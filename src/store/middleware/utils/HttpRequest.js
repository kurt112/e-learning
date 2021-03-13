import {baseUrl, graphQl} from "../axios";

export  function* graphQLRequest(body) {

    return yield graphQl.post("",body)
}

export const graphQlRequestAsync = async (body) =>{
    return await graphQl.post("",body)
}

export const PostData = async (url,param) => {

    return await baseUrl.post(url, param)
}