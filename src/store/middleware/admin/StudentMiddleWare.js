/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Student, Student_Delete} from '../../utils/Specify'
import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {AdminStudentRegister, DeleteStudent as deleteStudent} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {TableNextData, TableDataInit, Register, Delete} from './__MiddleWareGlobal'
import {AdminStudentBodyDataSettingsQuery,AdminStudentBodyDataQuery} from "../utils/GraphQlQuery/AdminQuery/AdminStudentQuery";
import {checkStringEmpty} from "../../../components/ui/utils/validation";
import {SET_ERROR_EMPTY_ID} from "../../action/__ActionGlobal/ValidationAction";

export function * DeleteStudent(){
    const student = yield select(Selector.DeleteStudentDialog)
    const params = new URLSearchParams();

    if(checkStringEmpty(student.id)) {
        yield put(SET_ERROR_EMPTY_ID(Student_Delete))
        return
    }

    params.append('id',student.id)

    yield Delete(params,deleteStudent,Student_Delete,StudentTableDataInit)
}

export function* StudentRegister() {
    const student = yield select(Selector.AdminStudentDialog)
    const params = new URLSearchParams();

    if(checkStringEmpty(student.id)) {
        yield put(SET_ERROR_EMPTY_ID(Student))
        return
    }

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

