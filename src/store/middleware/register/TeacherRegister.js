/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import { select,put} from "redux-saga/effects";
import * as Selector from "../selector";
import { baseUrlNoAuth} from "../axios";
import {param} from "./Parameter";
import * as action from '../../action/login/LoginAction'
import {validate} from "./registrationValidation";
import {Teacher} from "../../utils/Specify";
import {successRegister} from "../../action/__ActionGlobal/UserRegisterAction";
export function* TeacherRegisterData() {

    const teacher = yield select(Selector.TeacherRegister)
    const error = yield validate(teacher,Teacher)

    if(error) return;


    const params = yield param(teacher)

    try {
        yield baseUrlNoAuth.post('/teacher-fillUp', params)
        alert("Success Register")
        alert("Email Verification Sent")
        yield put(successRegister(Teacher))
        yield put(action.resetLoginPage())
    } catch (ignored) {
    }
}