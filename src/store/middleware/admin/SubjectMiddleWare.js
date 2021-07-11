/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {Delete, RegisterBody, TableDataInit, TableNextData} from "./__MiddleWareGlobal"
import {AdminSubjectRegister, DeleteSubject as deleteSubject} from "../utils/ApiEndpoint/ClassroomEndPoint"
import {Subject, Subject_Delete} from "../../utils/Specify"
import {
    AdminSubjectBodyDataQuery,
    AdminSubjectBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminSubjectQuery"

export function* DeleteSubject() {
    const classState = yield select(Selector.DeleteSubjectDialog)
    const params = new URLSearchParams();
    params.append('id', classState.id)

    yield Delete(params,deleteSubject,Subject_Delete,SubjectTableDataInit)
}

export function* RegisterSubject() {
    const subjectState =  yield select(Selector.AdminSubjectDialog)
    yield RegisterBody(subjectState, AdminSubjectRegister,Subject,SubjectTableDataInit)
}

export function* SubjectTableDataNext(action) {
    const subjectState = yield  select(Selector.AdminSubject)
    yield TableNextData(action, subjectState, AdminSubjectBodyDataQuery(subjectState.search,subjectState.page),AdminSubjectBodyDataSettingsQuery(),Subject)

}

export function* SubjectTableDataInit() {
    const subjectState =  yield select(Selector.AdminSubject)
    yield TableDataInit(AdminSubjectBodyDataQuery(subjectState.search,subjectState.page),AdminSubjectBodyDataSettingsQuery(),Subject)

}






