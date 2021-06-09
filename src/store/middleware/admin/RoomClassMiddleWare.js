import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {Register, TableDataInit, TableNextData} from "./__MiddleWareGlobal";
import {AdminRoomClassRegister} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {RoomShiftClass} from "../../utils/Specify";
import {
    AdminRoomClassBodyDataQuery,
    AdminRoomClassBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminRoomShiftClassQuery";

export function* RoomClassRegister() {
    const roomClass = yield select(Selector.AdminRoomClassDialog)
    const params = new URLSearchParams();
    params.append('roomShift-id', roomClass.shiftID)
    params.append('subject-id',roomClass.subjectID)
    params.append('time-start',roomClass.timeStart)
    params.append('time-end',roomClass.timeEnd)
    params.append('day',roomClass.day)
    params.append('teacher-id',roomClass.teacherID)
    yield Register(params, AdminRoomClassRegister, RoomShiftClass,RoomClassTableDataInit)
}


export function* RoomClassTableDataNext(action) {
    const classState = yield select(Selector.AdminClass)
    yield TableNextData(action, classState, AdminRoomClassBodyDataQuery(classState.search,classState.page),AdminRoomClassBodyDataSettingsQuery(),RoomShiftClass)
}

export function* RoomClassTableDataInit() {
    const classState = yield select(Selector.AdminClass)

    yield TableDataInit(AdminRoomClassBodyDataQuery(classState.search,classState.page),AdminRoomClassBodyDataSettingsQuery(),RoomShiftClass)
}