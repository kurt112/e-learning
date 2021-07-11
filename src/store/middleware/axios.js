/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import axios from 'axios'
import {JavaEndpoint,GraphQlEndpoint} from "./utils/ApiEndpoint/ClassroomEndPoint";


export const graphQl = axios.create({
    baseURL: GraphQlEndpoint
})

export const baseUrl = axios.create({
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    },
    baseURL:JavaEndpoint
})

export const baseUrlNoAuth = axios.create({

    baseURL:JavaEndpoint
})

