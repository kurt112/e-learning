/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {baseUrl, graphQl} from "../axios";

export function* graphQLRequest(body) {
    return yield graphQl.post("", body, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    })
}

export const graphQlRequestAsync = async (body) => {
    alert("i am called")
    return await graphQl.post("", body, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    })
}

export const PostData = async (url, param) => {
    return await baseUrl.post(url, param, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    })
}