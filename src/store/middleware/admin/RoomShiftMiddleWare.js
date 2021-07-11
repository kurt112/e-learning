/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {Delete, Register, TableDataInit, TableNextData} from "./__MiddleWareGlobal";
import {AdminRoomShiftRegister, DeleteRoomShift as deleteRoomShift} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {    RoomShift, RoomShift_Delete} from "../../utils/Specify";
import {
    AdminRoomShiftBodyDataQuery,
    AdminRoomShiftBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminRoomShiftQuery";
import uuid from "short-uuid";

export function * DeleteRoomShift(){
    const classState = yield select(Selector.DeleteRoomShiftDialog)
    const params = new URLSearchParams();
    params.append('id', classState.id)

    yield Delete(params,deleteRoomShift,RoomShift_Delete,RoomShiftTableDataInit)
}

export function* RoomShiftRegister() {

    const roomShift = yield select(Selector.AdminRoomShiftDialog)
    const params = new URLSearchParams();
    params.append('id',yield uuid.generate())
    params.append('room-id', roomShift.room)
    params.append('room-shiftID',roomShift.roomShift)
    params.append('shiftID-grade',roomShift.grade)
    params.append('shiftID-section',roomShift.section)
    params.append('shiftID-timeStart',roomShift.timeStart)
    params.append('shiftID-timeEnd',roomShift.timeEnd)
    params.append('teacher-id', roomShift.teacherID)
    yield Register(params, AdminRoomShiftRegister, RoomShift,RoomShiftTableDataInit)
}


export function* RoomShiftTableDataNext(action) {
    const roomShift = yield select(Selector.AdminRoomShift)
    yield TableNextData(action, roomShift, AdminRoomShiftBodyDataQuery(roomShift.search,roomShift.page),AdminRoomShiftBodyDataSettingsQuery(),RoomShift)
}

export function* RoomShiftTableDataInit() {
    const roomShift = yield select(Selector.AdminRoomShift)
    yield TableDataInit(AdminRoomShiftBodyDataQuery(roomShift.search,roomShift.page),AdminRoomShiftBodyDataSettingsQuery(), RoomShift)
}
