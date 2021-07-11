/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {getRoomShift} from '../utils/GraphQlQuery/ProfileQuery/RoomShiftProfile'
import {profileData} from "./profileData";
import {put} from "redux-saga/effects";
import * as profileAction from '../../action/__ActionGlobal/ProfileAction'
import {RoomShift} from "../../utils/Specify";
export  function * roomShift(action) {

    const body = yield getRoomShift(action.data)

    try {
        const response = yield profileData(body)

        yield put(profileAction.successData(response.data.data, RoomShift))
    }catch (error){
    }

}