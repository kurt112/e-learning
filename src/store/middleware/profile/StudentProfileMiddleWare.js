import {getStudent} from '../utils/GraphQlQuery/ProfileQuery/StudentProfile'
import {profileData} from "./profileData";
import {put} from "redux-saga/effects";
import * as profileAction from '../../action/__ActionGlobal/ProfileAction'
import {Student} from "../../utils/Specify";
export  function * studentData(action) {

    const body = yield getStudent(action.data)

    try {
        const response = yield profileData(body)

        yield put(profileAction.successData(response.data.data, Student))
    }catch (error){
    }

}