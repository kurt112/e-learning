import {select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {Teacher} from '../../utils/Specify'
import {AdminTeacherRegister} from '../utils/ApiEndpoint/ClassroomEndPoint'
import {TableNextData, TableDataInit, Register} from './__MiddleWareGlobal'
import {
    AdminTeacherBodyDataQuery,
    AdminTeacherBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminTeacherQuery";

export function* TeacherRegister() {
    const teacher = yield select(Selector.AdminTeacherDialog)
    const params = new URLSearchParams();
    params.append('id', teacher.id)

    yield Register(params, AdminTeacherRegister, Teacher)
}

export function* TeacherTableDataNext(action) {
    const teacherTable = yield select(Selector.AdminTeacher)
    yield TableNextData(action, teacherTable, AdminTeacherBodyDataQuery(teacherTable.search,teacherTable.page),AdminTeacherBodyDataSettingsQuery(),Teacher)
}

export function* TeacherTableDataInit() {
    const teacherTable = yield select(Selector.AdminTeacher)
    yield TableDataInit(AdminTeacherBodyDataQuery(teacherTable.search,teacherTable.page),AdminTeacherBodyDataSettingsQuery(),Teacher)
}


