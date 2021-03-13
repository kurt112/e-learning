import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {baseUrlNoAuth} from "../axios";
import * as action from '../../action/login/LoginAction'
import * as currentUserAction from '../../action/CurrentUser/CurrentUserAction'

export function* Login() {
    const login = yield select(Selector.Login)
    try {

        const response = yield baseUrlNoAuth.post('/login', login)
        const  data = response.data
        yield put(action.successLogin(data))
        yield put(currentUserAction.changeToken(data.token))
        yield put(currentUserAction.changeUser(data.user))
        yield put(action.resetLoginPage())
    } catch (error) {
        yield put(action.failLogin(error))
    }
}

export function *ReLogin (actions) {

    const params = new URLSearchParams();
    params.append('token', actions.data)
    try {
        const response = yield baseUrlNoAuth.post('/re-login',params )

        const  data = response.data


        yield put(action.successLogin(data))
        yield put(currentUserAction.changeToken(data.token))
        yield put(currentUserAction.changeUser(data.user))
        yield put(action.resetLoginPage())
    }catch (error){
        console.log(error)
    }
}

export function* PreRegister() {
    const login = yield select(Selector.Login)

    const params = new URLSearchParams();
    params.append('id', login.id)
    try {
        const response = yield baseUrlNoAuth.post('/pre-register',params )
        yield put(action.changeForm(response.data))
    }catch (error){

    }
}