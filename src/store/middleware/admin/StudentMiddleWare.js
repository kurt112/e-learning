import {Student} from '../../utils/Specify'
import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {AdminStudentRegister} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {TableNextData, TableDataInit, Register} from './__MiddleWareGlobal'
import {AdminStudentBodyDataSettingsQuery,AdminStudentBodyDataQuery} from "../utils/GraphQlQuery/AdminQuery/AdminStudentQuery";

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

