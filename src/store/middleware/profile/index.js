/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {takeLeading} from "redux-saga/effects";
import * as profile from "../../ActionType/__ActionTypeGlobal/ProfileActionType";
import {Curriculum, Room, RoomShift, RoomShiftClass, Student, Subject, Teacher} from "../../utils/Specify";
import {studentData} from "./StudentProfileMiddleWare";
import {teacherData} from "./TeacherProfileMiddleWare";
import {roomData} from "./RoomProfileMiddleWare";
import {roomShift} from "./RoomShiftProfileMiddleWare";
import {roomShiftClass} from "./RoomShiftClassProfileMiddleWare";
import {curriculumData} from './CurriculumProfileMiddleWare'
import {subjectData} from './SubjectProfileMiddleWare'
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

export function * watchSubjectGetProfile() {
    yield takeLeading(profile.INIT_DATA(Subject), subjectData)
}

export function * watchCurriculumGetProfile() {
    yield takeLeading(profile.INIT_DATA(Curriculum), curriculumData)
}