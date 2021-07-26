/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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
import {reInitState,setErrorEmptyId} from "../../action/__ActionGlobal/DialogAction";
import {setErrorRoomNameEmpty} from '../../action/admin/Room/RoomDialogAction'
import {checkStringEmpty} from "../../../components/ui/utils/validation";
export function * DeleteRoom(){
    const room = yield select(Selector.DeleteRoomDialog)

    if(checkStringEmpty(room.id)) {
        yield put(setErrorEmptyId(Room_Delete))
        return;
    }

    const params = new URLSearchParams();
    params.append('id', room.id)
    yield Delete(params,deleteRoom,Room_Delete,RoomTableDataInit)
}

export function* RoomRegister() {
    const room = yield select(Selector.AdminRoomDialog)

    if(checkStringEmpty(room.roomName)) {
        yield put(setErrorRoomNameEmpty())
        return;
    }

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
