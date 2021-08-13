/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 13/08/2021, Friday
 **/
import {getCurriculumProfile} from "../utils/GraphQlQuery/ProfileQuery/CurriculumProfile";
import {profileData} from "./profileData";
import {put} from "redux-saga/effects";
import {Curriculum} from "../../utils/Specify";
import * as profileAction from '../../action/__ActionGlobal/ProfileAction'
export  function * curriculumData(action) {
    const body = yield getCurriculumProfile(action.data)
    try {

        const response = yield profileData(body)
        console.log(response)
        yield put(profileAction.successData(response.data.data.getCurriculum, Curriculum))
    }catch (error){
        console.log(error)
    }

}