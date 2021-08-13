/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/

import {profileData} from "./profileData";
import {put} from "redux-saga/effects";
import * as profileAction from "../../action/__ActionGlobal/ProfileAction";
import {Subject, Teacher} from "../../utils/Specify";
import {getSubject} from "../utils/GraphQlQuery/ProfileQuery/SubjectProfile";



export  function * subjectData(action) {
    const body = yield getSubject(action.data)
    try {
        const response = yield profileData(body)
        yield put(profileAction.successData(response.data.data.getSubject, Subject))
    }catch (error){
        console.log(error)
    }

}