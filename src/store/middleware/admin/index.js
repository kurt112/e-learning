import {takeLeading} from "redux-saga/effects";
import * as adminDialog from "../../ActionType/__ActionTypeGlobal/DialogActionType";
import {
    Curriculum,
    Room, Room_Delete,
    RoomShift, RoomShift_Delete,
    RoomShiftClass, RoomShiftClass_Delete,
    Student,
    Student_Delete,
    Subject, Subject_Delete,
    Teacher,
    Teacher_Delete
} from "../../utils/Specify";
import {DeleteTeacher, TeacherRegister, TeacherTableDataInit, TeacherTableDataNext} from "./TeacherMiddleWare";
import * as adminTable from "../../ActionType/__ActionTypeGlobal/TableActionType";
import {DeleteStudent, StudentRegister, StudentTableDataInit, StudentTableDataNext} from "./StudentMiddleWare";
import {DeleteSubject, RegisterSubject, SubjectTableDataInit, SubjectTableDataNext} from "./SubjectMiddleWare";
import {DeleteRoom, RoomRegister, RoomTableDataInit, RoomTableDataNext} from "./RoomMiddleWare";
import {
    DeleteRoomShift,
    RoomShiftRegister,
    RoomShiftTableDataInit,
    RoomShiftTableDataNext
} from "./RoomShiftMiddleWare";
import {
    DeleteRoomClass,
    RoomClassRegister,
    RoomClassTableDataInit,
    RoomClassTableDataNext
} from "./RoomClassMiddleWare";
import {CurriculumTableDataInit, CurriculumTableDataNext} from "./CurriculumMIddleware";

/**
 *
 *
 *          This middleware is for admin teacherID area
 *
 *
 **/

export function * watchAdminTeacherDelete(){
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Delete), DeleteTeacher)
}

export function* watchAdminRegisterTeacher() {
    yield  takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher), TeacherRegister)
}

export function* watchAdminTeacherInitTableData() {
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Teacher), TeacherTableDataInit)
}


export function* watchTeacherTableNextData() {
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Teacher), TeacherTableDataNext)
}

export function* watchTeacherSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher), TeacherTableDataInit)
}

/**
 *
 *
 *          This middleware is for admin Student area
 *
 *
 **/

export function * watchDeleteStudent() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Student_Delete), DeleteStudent)
}

export function * watchStudentRegisterStudent() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Student),StudentRegister)
}

export function* watchStudentInitTableData() {
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Student), StudentTableDataInit)
}


export function* watchStudentTableNextData() {
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Student), StudentTableDataNext)
}

export function* watchStudentSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Student), StudentTableDataInit)
}


/**
 *
 *         This middleware is for admin subjectID area
 *
 */

export function* watchSubjectDelete(){
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Subject_Delete), DeleteSubject)
}

export function * watchAdminSubjectRegister() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Subject),RegisterSubject)
}

export function* watchAdminSubjectTableInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Subject), SubjectTableDataInit)
}

export function* watchAdminSubjectTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Subject), SubjectTableDataNext)
}

export function* watchAdminSubjectSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Subject), SubjectTableDataInit)
}

/**
 *
 *
 *          This middleware is for admin Room area
 *
 *
 **/

export function * watchAdminDeleteRoom(){
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Room_Delete), DeleteRoom)
}

export function* watchAdminRegisterRoom() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Room), RoomRegister)
}
export function* watchAdminRoomTableInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Room), RoomTableDataInit)
}

export function* watchAdminRoomTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Room), RoomTableDataNext)
}

export function* watchAdminRoomSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Room), RoomTableDataInit)
}

/**
 *
 *
 *          This middleware is for admin Room Shift
 *
 *
 **/

export function * watchDeleteRoomShift(){
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(RoomShift_Delete), DeleteRoomShift)
}

export function* watchAdminRegisterRoomShift() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(RoomShift), RoomShiftRegister)
}
export function* watchAdminRoomShiftTableInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(RoomShift), RoomShiftTableDataInit)
}

export function* watchAdminRoomShiftTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(RoomShift), RoomShiftTableDataNext)
}

export function* watchAdminRoomShiftSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(RoomShift), RoomShiftTableDataInit)
}

/**
 *
 *
 *          This middleware is for admin Room RoomShiftClass
 *
 *
 **/


export function * watchAdminDeleteRoomClass() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(RoomShiftClass_Delete), DeleteRoomClass)
}

export function* watchAdminRegisterRoomClass() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(RoomShiftClass), RoomClassRegister)
}


export function* watchAdminRoomClassTableInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(RoomShiftClass), RoomClassTableDataInit)
}

export function* watchAdminRoomClassTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(RoomShiftClass), RoomClassTableDataNext)
}

export function* watchAdminRoomClassSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(RoomShiftClass), RoomClassTableDataInit)
}

/**
 *
 *
 *          This middleware is for admin Curriculum
 *
 *
 **/

// export function * watchAdminCurriculumDelete(){
//     yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Delete), DeleteTeacher)
// }
//
// export function* watchAdminRegisterCurriculum() {
//     yield  takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher), TeacherRegister)
// }

export function* watchAdminCurriculumInitTableData() {
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Curriculum), CurriculumTableDataInit)
}


export function* watchCurriculumTableNextData() {
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Curriculum), CurriculumTableDataNext)
}

export function* watchCurriculumSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Curriculum), CurriculumTableDataNext)
}