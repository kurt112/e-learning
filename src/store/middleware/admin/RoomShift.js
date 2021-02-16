import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {Register, TableDataInit, TableNextData} from "./__MiddleWareGlobal";
import {AdminRoomShiftRegister} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {RoomShift} from "../../utils/Specify";
import {AdminRoomBodyDataSettingsQuery} from "../utils/GraphQlQuery/AdminQuery/AdminRoomQuery";
import {
    AdminRoomShiftBodyDataQuery,
    AdminRoomShiftBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminRoomShiftQuery";

export function* RoomShiftRegister() {

    const roomShift = yield select(Selector.AdminRoomShiftDialog)
    const params = new URLSearchParams();
    params.append('room-id', roomShift.room)
    params.append('room-shiftID',roomShift.roomShift)
    params.append('shiftID-grade',roomShift.grade)
    params.append('shiftID-section',roomShift.section)
    params.append('shiftID-timeStart',roomShift.timeStart)
    params.append('shiftID-timeEnd',roomShift.timeEnd)
    yield Register(params, AdminRoomShiftRegister, RoomShift)
}


export function* RoomShiftTableDataNext(action) {
    const roomShift = yield select(Selector.AdminRoomShift)
    yield TableNextData(action, roomShift, AdminRoomShiftBodyDataQuery, AdminRoomShiftBodyDataSettingsQuery,RoomShift)
}

export function* RoomShiftTableDataInit() {
    const roomShift = yield select(Selector.AdminRoomShift)
    yield TableDataInit(AdminRoomShiftBodyDataQuery(roomShift.search,roomShift.page),AdminRoomBodyDataSettingsQuery(), RoomShift)
}
