import {getRoomShiftClass} from '../utils/GraphQlQuery/ProfileQuery/RoomShiftClassProfile'
import {profileData} from "./profileData";
import {put} from "redux-saga/effects";
import * as profileAction from '../../action/__ActionGlobal/ProfileAction'
import {RoomShiftClass} from "../../utils/Specify";
export  function * roomShiftClass(action) {

    const body = yield getRoomShiftClass(action.data)

    try {
        const response = yield profileData(body)

        yield put(profileAction.successData(response.data.data, RoomShiftClass))
    }catch (error){
    }

}