import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {baseUrl} from "../axios";
import * as action from '../../action/login/LoginAction'
export function * Login () {
    const login = yield select(Selector.Login)
    console.log(login)
    try{
       const response = yield baseUrl.post('/login',login)

       yield put(action.successLogin(response.data))

    }catch (error){
        yield put(action.failLogin(error))
    }
}