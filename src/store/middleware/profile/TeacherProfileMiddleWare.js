/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {getTeacher} from '../utils/GraphQlQuery/ProfileQuery/TeacherProfile'
import {profileData} from "./profileData";
import {put} from "redux-saga/effects";
import * as profileAction from '../../action/__ActionGlobal/ProfileAction'
import {Teacher} from "../../utils/Specify";
export  function * teacherData(action) {
    const body = yield getTeacher(action.data)
    try {
        const response = yield profileData(body)
        yield put(profileAction.successData(response.data.data.getTeacherByUserEmail, Teacher))
    }catch (error){
        console.log(error)
    }

}