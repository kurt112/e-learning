/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {Delete, Register, TableDataInit, TableNextData} from "./__MiddleWareGlobal";
import {AdminRoomClassRegister, DeleteRoomClass as deleteRoomClass} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {RoomShiftClass, RoomShiftClass_Delete} from "../../utils/Specify";
import {
    AdminRoomClassBodyDataQuery,
    AdminRoomClassBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminRoomShiftClassQuery";
import uuid from 'short-uuid'
export function* RoomClassRegister() {
    const roomClass = yield select(Selector.AdminRoomClassDialog)
    const params = new URLSearchParams();
    params.append('id',yield uuid.generate())
    params.append('roomShift-id', roomClass.shiftID)
    params.append('subject-id',roomClass.subjectID)
    params.append('time-start',roomClass.timeStart)
    params.append('time-end',roomClass.timeEnd)
    params.append('day',roomClass.day)
    params.append('teacher-id',roomClass.teacherID)
    yield Register(params, AdminRoomClassRegister, RoomShiftClass,RoomClassTableDataInit)
}

export function * DeleteRoomClass(){
    const classState = yield select(Selector.DeleteClassDialog)
    const params = new URLSearchParams();
    params.append('id', classState.id)
    yield Delete(params,deleteRoomClass,RoomShiftClass_Delete,RoomClassTableDataInit)
}


export function* RoomClassTableDataNext(action) {
    const classState = yield select(Selector.AdminClass)
    yield TableNextData(action, classState, AdminRoomClassBodyDataQuery(classState.search,classState.page),AdminRoomClassBodyDataSettingsQuery(),RoomShiftClass)
}

export function* RoomClassTableDataInit() {
    const classState = yield select(Selector.AdminClass)

    yield TableDataInit(AdminRoomClassBodyDataQuery(classState.search,classState.page),AdminRoomClassBodyDataSettingsQuery(),RoomShiftClass)
}