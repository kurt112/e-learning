import {select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {Room} from '../../utils/Specify'
import {AdminRoomRegister} from '../utils/ApiEndpoint/ClassroomEndPoint'
import {TableNextData, TableDataInit, RegisterBody} from './__MiddleWareGlobal'
import {
    AdminRoomBodyDataQuery,
    AdminRoomBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminRoomQuery";

export function* RoomRegister() {
    const room = yield select(Selector.AdminRoomDialog)
    yield RegisterBody(room,AdminRoomRegister,Room)
}

export function* RoomTableDataNext(action) {
    const roomTable = yield select(Selector.AdminRoom)
    yield TableNextData(action, roomTable, AdminRoomBodyDataQuery(roomTable.search,roomTable.page),AdminRoomBodyDataSettingsQuery(),Room)
}

export function* RoomTableDataInit() {
    const roomTable = yield select(Selector.AdminRoom)
    yield TableDataInit(AdminRoomBodyDataQuery(roomTable.search,roomTable.page),AdminRoomBodyDataSettingsQuery(),Room)
}
