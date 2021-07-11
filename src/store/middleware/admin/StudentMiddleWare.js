/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Student, Student_Delete} from '../../utils/Specify'
import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {AdminStudentRegister, DeleteStudent as deleteStudent} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {TableNextData, TableDataInit, Register, Delete} from './__MiddleWareGlobal'
import {AdminStudentBodyDataSettingsQuery,AdminStudentBodyDataQuery} from "../utils/GraphQlQuery/AdminQuery/AdminStudentQuery";

export function * DeleteStudent(){
    const classState = yield select(Selector.DeleteStudentDialog)
    const params = new URLSearchParams();
    params.append('id', classState.id)

    yield Delete(params,deleteStudent,Student_Delete,StudentTableDataInit)
}

export function* StudentRegister() {
    const student = yield select(Selector.AdminStudentDialog)
    const params = new URLSearchParams();
    params.append('id', student.id)
    yield Register(params, AdminStudentRegister, Student, StudentTableDataInit)
}


export function* StudentTableDataNext(action) {
    const student = yield select(Selector.AdminStudent)
    yield TableNextData(action, student, AdminStudentBodyDataQuery(student.search,student.page),AdminStudentBodyDataSettingsQuery(), Student)

}

export function* StudentTableDataInit() {
    const student = yield select(Selector.AdminStudent)
    yield TableDataInit(AdminStudentBodyDataQuery(student.search,student.page),AdminStudentBodyDataSettingsQuery(),Student)
}

