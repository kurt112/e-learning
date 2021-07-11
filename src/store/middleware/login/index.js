/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {takeLeading} from "redux-saga/effects";
import * as loginAction from "../../ActionType/Login/LoginActionType";
import {Login, PreRegister, ReLogin} from "./LoginMiddleware";

export function * watchLogin() {
    yield takeLeading(loginAction.LOGIN, Login)
}

export function * watchPreRegister(){
    yield takeLeading(loginAction.REGISTER_INIT, PreRegister)
}

export  function * watchReLogin () {
    yield takeLeading(loginAction.RE_LOGIN, ReLogin)
}