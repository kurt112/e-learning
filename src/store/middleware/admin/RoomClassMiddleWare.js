/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {Delete, Register, TableDataInit, TableNextData} from "./__MiddleWareGlobal";
import {AdminRoomClassRegister, DeleteRoomClass as deleteRoomClass} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {RoomShiftClass, RoomShiftClass_Delete} from "../../utils/Specify";
import {
    AdminRoomClassBodyDataQuery,
    AdminRoomClassBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminRoomShiftClassQuery";
import uuid from 'short-uuid'
import {checkStringEmpty} from "../../../components/ui/utils/validation";
import {setErrorRoomShiftEmpty, setErrorSubjectEmpty} from "../../action/admin/RoomClass/RoomClassDialogAction";
import {reInitState, setErrorEmptyId} from "../../action/__ActionGlobal/DialogAction";
export function* RoomClassRegister() {

    const roomClass = yield select(Selector.AdminRoomClassDialog)
    const params = new URLSearchParams();

    const id = roomClass.id === undefined? yield uuid.generate(): roomClass.id

    roomClass.teacher = roomClass.teacher === null? null: roomClass.teacher.user === undefined? roomClass.teacher: roomClass.teacher.id
    roomClass.subject = roomClass.subject === null? null: roomClass.subject.subjectCode === undefined? roomClass.subject: roomClass.subject.id
    roomClass.shift =  roomClass.shift === null? null: roomClass.shift.grade === undefined? roomClass.shift: roomClass.shift.id

    let error = false

    if(checkStringEmpty(roomClass.shift)){
        error = true
        yield put(setErrorSubjectEmpty())
    }

    if(checkStringEmpty(roomClass.subject)){
        error = true
        yield put(setErrorRoomShiftEmpty())
    }

    if(error) return

    params.append('id',id)
    params.append('roomShift-id', roomClass.shift)
    params.append('subject-id',roomClass.subject)
    params.append('time-start',roomClass.timeStart)
    params.append('time-end',roomClass.timeEnd)
    params.append('day',roomClass.day)
    params.append('teacher-id',roomClass.teacher)
    yield Register(params, AdminRoomClassRegister, RoomShiftClass,RoomClassTableDataInit)
    yield put(reInitState(RoomShiftClass))
}

export function * DeleteRoomClass(){
    const roomClass = yield select(Selector.DeleteClassDialog)
    const params = new URLSearchParams();

    if(checkStringEmpty(roomClass.id)) {
        yield put(setErrorEmptyId(RoomShiftClass_Delete))
        return;
    }
    params.append('id', roomClass.id)
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