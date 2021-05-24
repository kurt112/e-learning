import {takeLeading} from "redux-saga/effects";
import * as adminTable from '../ActionType/__ActionTypeGlobal/TableActionType'
import * as adminDialog from '../ActionType/__ActionTypeGlobal/DialogActionType'
import * as userRegister from '../ActionType/__ActionTypeGlobal/UserRegisterActionType'
import * as loginAction from '../ActionType/Login/LoginActionType'
import {
    Teacher,
    Student,
    Room,
    Subject,
    RoomShift,
    RoomShiftClass,
    Activity,
    Teacher_Resource_Upload,
    Teacher_Resource_Delete,
    Teacher_Assignment,
    Teacher_Resource
} from '../utils/Specify'
import * as profile from '../ActionType/__ActionTypeGlobal/ProfileActionType'
import {
    Login,
    PreRegister,
    ReLogin
} from "./login/LoginMiddleware";

import {
    StudentRegisterData,
    TeacherRegisterData
}from './register'

import {
    studentData,
    teacherData,
    roomData,
    roomShift,
    roomShiftClass
} from './profile'

import {
    RegisterSubject,
    SubjectTableDataInit,
    SubjectTableDataNext

} from './admin/SubjectMiddleWare'

import {
    TeacherRegister,
    TeacherTableDataNext,
    TeacherTableDataInit
} from './admin/TeacherMiddleWare'

import {
    StudentRegister,
    StudentTableDataInit,
    StudentTableDataNext
} from "./admin/StudentMiddleWare";

import {
    ActivityDataInit,
    ActivityTableNext,
    ActivityUpload
} from './admin/ActivityMiddleWare'

import  {
    RoomRegister,
    RoomTableDataInit,
    RoomTableDataNext
} from "./admin/RoomMiddleWare"

import {RoomShiftRegister, RoomShiftTableDataInit, RoomShiftTableDataNext} from "./admin/RoomShiftMiddleWare";
import {RoomClassRegister, RoomClassTableDataInit, RoomClassTableDataNext} from "./admin/RoomClassMiddleWare";
import {
    TeacherResourceUpload,
    TeacherResourceDelete,
    TeacherResourceTableDataInit, TeacherResourceDataNext
} from "./teacher/TeacherResourceMiddleware";
import {TeacherAssignmentTableDataInit, TeacherAssignmentTableNext} from "./teacher/TeacherAssignmentMiddleware";

/**
 *
 *
 *          This middleware is for admin teacherID area
 *
 *
 **/


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
 *          This middleware is for admin activity
 *
*
*
**/

export function * watchAdminActivityUpload() {

    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Activity), ActivityUpload)
}

export function* watchAdminActivityTableInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Activity), ActivityDataInit)
}

export function* watchAdminActivitySearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Activity), ActivityDataInit)
}

export function* watchAdminActivityTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Activity), ActivityTableNext)
}

/**
 *
 *
 *          This middleware is for Getting Profile of entity
 *
 *
 *
 **/

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

/**
 *
 *
 *          This middleware is for LOGIN
 *
 *
 *
 **/
export function * watchLogin() {
    yield takeLeading(loginAction.LOGIN, Login)
}

export function * watchPreRegister(){
    yield takeLeading(loginAction.REGISTER_INIT, PreRegister)
}

export  function * watchReLogin () {
    yield takeLeading(loginAction.RE_LOGIN, ReLogin)
}

/**
 *
 *
 *          This middleware is for Student, Teacher Register
 *
 *
 *
 **/

export function * watchStudentRegister () {
    yield takeLeading(userRegister.INIT_REGISTER(Student), StudentRegisterData)
}

export function * watchTeacherRegister() {
    yield takeLeading(userRegister.INIT_REGISTER(Teacher), TeacherRegisterData)
}

/**
 *
 *
 *          This middleware is for Teacher
 *
 *
 *
 **/

export function * watchTeacherUploadResource() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Resource_Upload), TeacherResourceUpload)
}

export function * watchDeleteResource() {
    yield takeLeading(adminDialog.ADMIN_DIALOG_REGISTER(Teacher_Resource_Delete),TeacherResourceDelete)
}

// for teacher assignment
export function* watchTeacherAssignmentInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Teacher_Assignment), TeacherAssignmentTableDataInit)
}

export function* watchTeacherAssignmentSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Assignment), TeacherAssignmentTableDataInit)
}

export function* watchTeacherAssignmentTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Teacher_Assignment), TeacherAssignmentTableNext)
}


// for resource teacher
export function* watchTeacherResourcesInit(){
    yield takeLeading(adminTable.ADMIN_TABLE_INIT(Teacher_Resource), TeacherResourceTableDataInit)
}

export function* watchTeacherResourcesSearchChange() {
    yield takeLeading(adminTable.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Resource), TeacherResourceTableDataInit)
}

export function* watchTeacherResourcesTableNext(){
    yield takeLeading(adminTable.ADMIN_TABLE_NEXT_PAGE(Teacher_Resource), TeacherResourceDataNext)
}

