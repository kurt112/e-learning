import {takeLeading} from "redux-saga/effects";
import * as profile from "../../ActionType/__ActionTypeGlobal/ProfileActionType";
import {Room, RoomShift, RoomShiftClass, Student, Teacher} from "../../utils/Specify";
import {studentData} from "./StudentProfileMiddleWare";
import {teacherData} from "./TeacherProfileMiddleWare";
import {roomData} from "./RoomProfileMiddleWare";
import {roomShift} from "./RoomShiftProfileMiddleWare";
import {roomShiftClass} from "./RoomShiftClassProfileMiddleWare";

export function * watchStudentGetProfile(){
    yield takeLeading(profile.INIT_DATA(Student),studentData)
}

export function * watchTeacherGetProfile() {
    yield takeLeading(profile.INIT_DATA(Teacher), teacherData)
}

export function * watchRoomGetProfile() {
    yield takeLeading(profile.INIT_DATA(Room), roomData)
}

export function * watchRoomShiftGetProfile(){
    yield takeLeading(profile.INIT_DATA(RoomShift), roomShift)
}

export function * watchRoomShiftClassGetProfile() {
    yield takeLeading(profile.INIT_DATA(RoomShiftClass), roomShiftClass)
}