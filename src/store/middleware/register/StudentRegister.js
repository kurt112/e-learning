/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {select, put} from "redux-saga/effects";
import * as Selector from "../selector";
import {baseUrlNoAuth} from "../axios";
import {param} from "./Parameter";
import * as action from '../../action/login/LoginAction'
import {successRegister} from '../../action/__ActionGlobal/UserRegisterAction'
import {Student} from "../../utils/Specify";
import {validate} from "./registrationValidation";

export function* StudentRegisterData() {
    const state = yield select(Selector.StudentRegister)
    const {id} = yield select(Selector.Login)
    const error = yield validate(state, Student);

    //validation
    if(error) return;

    const params = yield param(state, id)
    try {
        yield baseUrlNoAuth.post('/student-fillUp', params)
        alert("Success Register")
        alert("Email Verification Sent")
        yield put(successRegister(Student))
        yield put(action.resetLoginPage())
    } catch (error) {
        yield put(action.failLogin(error))
    }
}