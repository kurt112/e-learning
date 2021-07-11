/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {getRoom} from '../utils/GraphQlQuery/ProfileQuery/RoomProfile'
import {profileData} from "./profileData";
import {put} from "redux-saga/effects";
import * as profileAction from '../../action/__ActionGlobal/ProfileAction'
import {Room} from "../../utils/Specify";
export  function * roomData(action) {

    const body = yield getRoom(action.data)

    try {
        const response = yield profileData(body)

        yield put(profileAction.successData(response.data.data, Room))
    }catch (error){
    }

}