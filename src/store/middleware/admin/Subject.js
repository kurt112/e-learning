import {select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {RegisterBody, TableDataInit, TableNextData} from "./__MiddleWareGlobal";
import {AdminSubjectRegister} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {Subject} from "../../utils/Specify";
import {
    AdminSubjectBodyDataQuery,
    AdminSubjectBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminSubjectQuery";

export function* RegisterSubject() {
    const subjectState =  yield select(Selector.AdminSubjectDialog)
    yield RegisterBody(subjectState, AdminSubjectRegister,Subject  )
}

export function* SubjectTableDataNext(action) {
    const subjectState = yield  select(Selector.AdminSubject)
    yield TableNextData(action, subjectState, AdminSubjectBodyDataQuery, AdminSubjectBodyDataSettingsQuery,Subject)

}

export function* SubjectTableDataInit() {
    const subjectState =  yield select(Selector.AdminSubject)
    yield TableDataInit(AdminSubjectBodyDataQuery(subjectState.search,subjectState.page),AdminSubjectBodyDataSettingsQuery(),Subject)

}






