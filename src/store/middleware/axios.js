import axios from 'axios'
import {Endpoint,GraphQlEndpoint} from "./utils/ApiEndpoint/ClassroomEndPoint";

export const graphQl = axios.create({
    baseURL: GraphQlEndpoint
})

export const baseUrl = axios.create({
    baseURL:Endpoint
})
