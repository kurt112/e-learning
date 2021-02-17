import axios from 'axios'
import {JavaEndpoint,GraphQlEndpoint} from "./utils/ApiEndpoint/ClassroomEndPoint";

export const graphQl = axios.create({
    baseURL: GraphQlEndpoint
})

export const baseUrl = axios.create({
    baseURL:JavaEndpoint
})
