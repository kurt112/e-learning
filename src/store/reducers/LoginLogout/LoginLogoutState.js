/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from '../../ActionType/Login/LoginActionType'
import {updateObject} from "../../utils/UpdateObject";

const initState = {
    username: '',
    password: '',
    message: '',
    loading: false,
    dialog: false,
    error: false,
    form: '',
    id: ''
}

const Login = (state) => {
    state = updateObject(state, {loading: true})

    return state
}

const successLogin = (state, action) => {
    state = updateObject(state, {message: action.data.message})
    state = updateObject(state, {loading: false})
    state = updateObject( state, {error: false})
    window.localStorage.setItem("token", action.data.token)
    return state
}

const failLogin = (state) => {
    state = updateObject(state, {loading: false})
    state = updateObject( state, {error: true})
    return state
}

const registerClose = (state) => {
    state = updateObject(state, {dialog: false})

    return updateObject(state, {id: ''})
}

const logout = (state) => {

    return updateObject(state, {
        username: '',
        password: '',
        message: '',
        loading: false,
        dialog: false,
        form: '',
        id: ''
    })
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.LOGIN:
            return Login(state)
        case actions.CHANGE_EMAIL:
            return updateObject(state, {username: action.data})
        case actions.CHANGE_PASSWORD:
            return updateObject(state, {password: action.data})
        case actions.SUCCESS_LOGIN:
            return successLogin(state, action)
        case actions.FAIL_LOGIN:
            return failLogin(state)
        case actions.RESET_LOGIN_PAGE:
            return logout(state);

        // for Registration in LoginLogout
        case actions.REGISTER_OPEN:
            return updateObject(state, {dialog: true})
        case actions.REGISTER_CLOSE:
            return registerClose(state)
        case actions.CHANGE_ID:
            return updateObject(state, {id: action.data})
        case actions.CHANGE_FORM:
            return updateObject(state, {form: action.data})
        default:
            return state;
    }

}

export default reducer