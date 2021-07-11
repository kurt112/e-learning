/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {Teacher, Teacher_Delete} from '../../utils/Specify'
import {AdminTeacherRegister, DeleteTeacher as deleteTeacher} from '../utils/ApiEndpoint/ClassroomEndPoint'
import {TableNextData, TableDataInit, Register, Delete} from './__MiddleWareGlobal'
import {
    AdminTeacherBodyDataQuery,
    AdminTeacherBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminTeacherQuery";

export function * DeleteTeacher (){
    const classState = yield select(Selector.DeleteTeacherDialog)
    const params = new URLSearchParams();
    params.append('id', classState.id)

    yield Delete(params,deleteTeacher,Teacher_Delete,TeacherTableDataInit)
}

export function* TeacherRegister() {
    const teacher = yield select(Selector.AdminTeacherDialog)
    const params = new URLSearchParams();
    params.append('id', teacher.id)

    yield Register(params, AdminTeacherRegister, Teacher,TeacherTableDataInit)
}

export function* TeacherTableDataNext(action) {
    const teacherTable = yield select(Selector.AdminTeacher)
    yield TableNextData(action, teacherTable, AdminTeacherBodyDataQuery(teacherTable.search,teacherTable.page),AdminTeacherBodyDataSettingsQuery(),Teacher)
}

export function* TeacherTableDataInit() {
    const teacherTable = yield select(Selector.AdminTeacher)
    yield TableDataInit(AdminTeacherBodyDataQuery(teacherTable.search,teacherTable.page),AdminTeacherBodyDataSettingsQuery(),Teacher)
}


