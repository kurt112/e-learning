import * as actions from '../../ActionType/Login/LoginActionType'
import {updateObject} from "../../utils/UpdateObject";

const initState = {
    username: '',
    password: '',
    message:'',
    loading: false,
}

const Login = (state, action) => {
    state = updateObject(state, {loading: true})

    return state
}

const successLogin = (state, action) => {
    state = updateObject(state, {message: action.data.message})
    state = updateObject(state, {loading: false})
    
    window.localStorage.setItem("token", action.data.token)

    return state
}

const failLogin = (state, action) => {
    state = updateObject(state, {loading: false})

    return updateObject(state, {message: action.message})
}

const reducer = (state= initState, action) =>{

    switch (action.type){
        case actions.Login:  return Login(state,action)
        case actions.CHANGE_EMAIL: return updateObject(state, {username:action.data})
        case actions.CHANGE_PASSWORD: return updateObject(state, {password: action.data})
        case actions.SuccessLogin: return successLogin(state, action)
        case actions.FailLogin: return failLogin(state, action)
        default: return state;
    }

}

export default reducer