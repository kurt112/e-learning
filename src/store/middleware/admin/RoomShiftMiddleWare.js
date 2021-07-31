/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {Delete, Register, TableDataInit, TableNextData} from "./__MiddleWareGlobal";
import {AdminRoomShiftRegister, DeleteRoomShift as deleteRoomShift} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {RoomShift, RoomShift_Delete} from "../../utils/Specify";
import {
    AdminRoomShiftBodyDataQuery,
    AdminRoomShiftBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminRoomShiftQuery";
import uuid from "short-uuid";
import {checkStringEmpty} from "../../../components/ui/utils/validation";
import {
    setErrorEmptyId,
    setCurriculumEmptyError,
    setGradeEmptyError, setRoomEmptyError,
    setSectionEmptyError
} from "../../action/__ActionGlobal/ValidationAction";

export function* DeleteRoomShift() {
    const roomShift = yield select(Selector.DeleteRoomShiftDialog)

    if(checkStringEmpty(roomShift.id)) {
        yield put(setErrorEmptyId(RoomShift_Delete))
        return;
    }

    const params = new URLSearchParams();
    params.append('id', roomShift.id)

    yield Delete(params, deleteRoomShift, RoomShift_Delete, RoomShiftTableDataInit)
}

export function* RoomShiftRegister() {

    const roomShift = yield select(Selector.AdminRoomShiftDialog)
    const params = new URLSearchParams();
    const id = roomShift.id === undefined? uuid.generate(): roomShift.id
    let error = false
    roomShift.room = roomShift.room.roomName === undefined ? roomShift.room : roomShift.room.id
    roomShift.teacher = roomShift.teacher === null? null: roomShift.teacher.user === undefined? roomShift.teacher: roomShift.teacher.id
    roomShift.curriculum = roomShift.curriculum.name === undefined? roomShift.curriculum: roomShift.curriculum.code

    if(checkStringEmpty(roomShift.room)){
        error = true
        yield put(setRoomEmptyError(RoomShift))
    }

    if(checkStringEmpty(roomShift.curriculum)){
        error = true
        yield put(setCurriculumEmptyError(RoomShift))
    }

    if(checkStringEmpty(roomShift.grade)){
        error = true
        yield put(setGradeEmptyError(RoomShift))
    }

    if(checkStringEmpty(roomShift.section)){
        error = true
        yield put(setSectionEmptyError(RoomShift))
    }

    if(error === false){
        params.append('id',id)
        params.append('room-id', roomShift.room)
        params.append('room-shiftID',roomShift.roomShift)
        params.append('shiftID-grade',roomShift.grade)
        params.append('shiftID-section',roomShift.section)
        params.append('shiftID-timeStart',roomShift.timeStart)
        params.append('shiftID-timeEnd',roomShift.timeEnd)
        params.append('teacher-id', roomShift.teacher)
        params.append('curriculum-code', roomShift.curriculum)
        yield Register(params, AdminRoomShiftRegister, RoomShift,RoomShiftTableDataInit)

    }


}


export function* RoomShiftTableDataNext(action) {
    const roomShift = yield select(Selector.AdminRoomShift)
    yield TableNextData(action, roomShift, AdminRoomShiftBodyDataQuery(roomShift.search, roomShift.page), AdminRoomShiftBodyDataSettingsQuery(), RoomShift)
}

export function* RoomShiftTableDataInit() {
    const roomShift = yield select(Selector.AdminRoomShift)
    yield TableDataInit(AdminRoomShiftBodyDataQuery(roomShift.search, roomShift.page), AdminRoomShiftBodyDataSettingsQuery(), RoomShift)
}
