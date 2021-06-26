import { select,put} from "redux-saga/effects";
import * as Selector from "../selector";
import { baseUrlNoAuth} from "../axios";
import {param} from "./Parameter";
import * as action from '../../action/login/LoginAction'
export function* TeacherRegisterData() {
    const teacher = yield select(Selector.TeacherRegister)
    const {id}   = yield select(Selector.Login)
    const params = yield param(teacher,id)

    try {

        yield baseUrlNoAuth.post('/teacher-fillUp', params)
        alert("Success Register")
        // const  data = response.data
        // yield put(action.successLogin(data))
        // yield put(currentUserAction.changeToken(data.token))
        // yield put(currentUserAction.changeUser(data.user))
        yield put(action.resetLoginPage())
    } catch (error) {
        console.log(error)
        // yield put(action.failLogin(error))
    }
}