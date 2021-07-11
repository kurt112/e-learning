/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {getStudent} from '../utils/GraphQlQuery/ProfileQuery/StudentProfile'
import {profileData} from "./profileData";
import {put} from "redux-saga/effects";
import * as profileAction from '../../action/__ActionGlobal/ProfileAction'
import {Student} from "../../utils/Specify";
export  function * studentData(action) {

    const body = yield getStudent(action.data)

    try {
        const response = yield profileData(body)

        yield put(profileAction.successData(response.data.data.getStudentByUserEmail, Student))
    }catch (error){
    }

}