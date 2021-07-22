/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {baseUrlNoAuth} from "../axios";
import * as action from '../../action/login/LoginAction'
import * as currentUserAction from '../../action/CurrentUser/CurrentUserAction'
export function* Login() {
    const login = yield select(Selector.Login)
    const userData = yield {
        username: login.username,
        password: login.password //PasswordEncrypt(auth.password)
    }

    try {

        const response = yield baseUrlNoAuth.post('/login', userData)
        const  data = response.data
        yield put(action.successLogin(data))
        yield put(currentUserAction.changeToken(data.token))
        yield put(currentUserAction.changeUser(data.user))
        window.location.reload()
    } catch (error) {
        yield put(action.failLogin(error))
    }
}

export function *ReLogin (actions) {

    const params = new URLSearchParams();
    params.append('token', actions.data)
    try {
        const response = yield baseUrlNoAuth.post('/re-login',params )

        const  data = yield response.data
        yield put(action.successLogin(data))
        yield put(currentUserAction.changeToken(data.token))
        yield put(currentUserAction.changeUser(data.user))
        // window.location.reload()
    }catch (error){
        localStorage.clear()
        window.location.reload()
        yield put(action.failLogin(error))
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

export function* Logout() {
    const user = yield select(Selector.CurrentUser)
    const params = new URLSearchParams();
    params.append('token', user.token)
    yield baseUrlNoAuth.post('/logoutUser',params )
    localStorage.clear()
    window.location.reload()
}