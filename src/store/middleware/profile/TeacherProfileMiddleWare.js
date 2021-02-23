import {getTeacher} from '../utils/GraphQlQuery/ProfileQuery/TeacherProfile'
import {profileData} from "./profileData";
import {put} from "redux-saga/effects";
import * as profileAction from '../../action/__ActionGlobal/ProfileAction'
import {Teacher} from "../../utils/Specify";
export  function * teacherData(action) {
    console.log(action)
    const body = yield getTeacher(action.data)

    try {
        const response = yield profileData(body)

        yield put(profileAction.successData(response.data.data, Teacher))
    }catch (error){
    }

}