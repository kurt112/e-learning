import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {baseUrl} from "../axios";
import * as action from '../../action/login/LoginAction'
import * as currentUserAction from '../../action/CurrentUser/CurrentUserAction'

export function* Login() {
    const login = yield select(Selector.Login)
    console.log(login)
    try {

        const response = yield baseUrl.post('/login', login)
        const  data = response.data


        yield put(action.successLogin(data))

        yield put(currentUserAction.changeToken(data.token))
        yield put(currentUserAction.changeUser(data.user))
    } catch (error) {
        yield put(action.failLogin(error))
    }
}

export function* PreRegister() {
    const login = yield select(Selector.Login)

    const params = new URLSearchParams();
    params.append('id', login.id)
    try {
        const response = yield baseUrl.post('/pre-register',params )
        yield put(action.changeForm(response.data))
    }catch (error){

    }
}