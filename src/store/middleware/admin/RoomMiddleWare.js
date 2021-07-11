import {put, select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {Room, Room_Delete} from '../../utils/Specify'
import {AdminRoomRegister, DeleteRoom as deleteRoom} from '../utils/ApiEndpoint/ClassroomEndPoint'
import {TableNextData, TableDataInit, RegisterBody, Delete} from './__MiddleWareGlobal'
import {
    AdminRoomBodyDataQuery,
    AdminRoomBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminRoomQuery";
import uuid from "short-uuid";
import {reInitState} from "../../action/__ActionGlobal/DialogAction";

export function * DeleteRoom(){
    const classState = yield select(Selector.DeleteRoomDialog)
    const params = new URLSearchParams();
    params.append('id', classState.id)
    yield Delete(params,deleteRoom,Room_Delete,RoomTableDataInit)
}

export function* RoomRegister() {
    const room = yield select(Selector.AdminRoomDialog)
    if(room.id === undefined)  room.id = yield uuid.generate()

    yield RegisterBody(room,AdminRoomRegister,Room, RoomTableDataInit)
    yield put(reInitState(Room))
}

export function* RoomTableDataNext(action) {
    const roomTable = yield select(Selector.AdminRoom)
    yield TableNextData(action, roomTable, AdminRoomBodyDataQuery(roomTable.search,roomTable.page),AdminRoomBodyDataSettingsQuery(),Room)
}

export function* RoomTableDataInit() {
    const roomTable = yield select(Selector.AdminRoom)
    yield TableDataInit(AdminRoomBodyDataQuery(roomTable.search,roomTable.page),AdminRoomBodyDataSettingsQuery(),Room)
}
