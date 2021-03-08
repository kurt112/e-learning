import axios from 'axios'
import {JavaEndpoint,GraphQlEndpoint} from "./utils/ApiEndpoint/ClassroomEndPoint";


export const graphQl = axios.create({
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    },
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

