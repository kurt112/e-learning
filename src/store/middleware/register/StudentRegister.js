import { select} from "redux-saga/effects";
import * as Selector from "../selector";
import { baseUrlNoAuth} from "../axios";
import {param} from "./Parameter";

export function* StudentRegisterData() {
    const student = yield select(Selector.StudentRegister)
    const {id}   = yield select(Selector.Login)
    const params = yield param(student,id)

    try {

        const response = yield baseUrlNoAuth.post('/student-fillUp', params)


        // const  data = response.data
        // yield put(action.successLogin(data))
        // yield put(currentUserAction.changeToken(data.token))
        // yield put(currentUserAction.changeUser(data.user))
        // yield put(action.resetLoginPage())
    } catch (error) {
        console.log(error)
        // yield put(action.failLogin(error))
    }
}