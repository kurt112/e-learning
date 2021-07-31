/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {put, select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {Teacher, Teacher_Delete} from '../../utils/Specify'
import {AdminTeacherRegister, DeleteTeacher as deleteTeacher} from '../utils/ApiEndpoint/ClassroomEndPoint'
import {TableNextData, TableDataInit, Register, Delete} from './__MiddleWareGlobal'
import {
    AdminTeacherBodyDataQuery,
    AdminTeacherBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminTeacherQuery";
import {checkStringEmpty} from "../../../components/ui/utils/validation";
import {setErrorEmptyId} from "../../action/__ActionGlobal/ValidationAction";

export function * DeleteTeacher (){
    const teacher = yield select(Selector.DeleteTeacherDialog)
    const params = new URLSearchParams();

    if(checkStringEmpty(teacher.id)){
        yield put(setErrorEmptyId(Teacher_Delete))
        return
    }

    params.append('id', teacher.id)

    yield Delete(params,deleteTeacher,Teacher_Delete,TeacherTableDataInit)
}

export function* TeacherRegister() {
    const teacher = yield select(Selector.AdminTeacherDialog)
    const params = new URLSearchParams();

    if(checkStringEmpty(teacher.id)) {
        yield put(setErrorEmptyId(Teacher))
        return
    }

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


