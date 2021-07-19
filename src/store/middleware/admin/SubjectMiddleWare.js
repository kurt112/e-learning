/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {put, select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {Delete, RegisterBody, TableDataInit, TableNextData} from "./__MiddleWareGlobal"
import {AdminSubjectRegister, DeleteSubject as deleteSubject} from "../utils/ApiEndpoint/ClassroomEndPoint"
import {Subject, Subject_Delete} from "../../utils/Specify"
import {
    AdminSubjectBodyDataQuery,
    AdminSubjectBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminSubjectQuery"
import {graphQlRequestAsync} from "../utils/HttpRequest";
import {getSubjectBasic} from "../utils/GraphQlQuery/ProfileQuery/SubjectProfile";
import * as actions from "../../action/__ActionGlobal/DialogAction";

export function* DeleteSubject() {
    const classState = yield select(Selector.DeleteSubjectDialog)
    const params = new URLSearchParams();
    params.append('id', classState.id)


    yield Delete(params, deleteSubject, Subject_Delete, SubjectTableDataInit)
}

export function* RegisterSubject() {
    const subjectState = yield select(Selector.AdminSubjectDialog)


    const exist = yield graphQlRequestAsync(getSubjectBasic(subjectState.subjectCode))
    const subject = exist.data.data.getSubject

    if (subject === null) {
        yield RegisterBody(subjectState, AdminSubjectRegister, Subject, SubjectTableDataInit)
    } else {
        if (subject.subjectCode === subjectState.subjectCode && subject.id === subjectState.id) {
            yield RegisterBody(subjectState, AdminSubjectRegister, Subject, SubjectTableDataInit)
        } else yield put(actions.registerDialogFail(subjectState, Subject, 'Subject Code Already Exist'))
    }
}

export function* SubjectTableDataNext(action) {
    const subjectState = yield  select(Selector.AdminSubject)
    yield TableNextData(action, subjectState, AdminSubjectBodyDataQuery(subjectState.search, subjectState.page), AdminSubjectBodyDataSettingsQuery(), Subject)

}

export function* SubjectTableDataInit() {
    const subjectState = yield select(Selector.AdminSubject)
    yield TableDataInit(AdminSubjectBodyDataQuery(subjectState.search, subjectState.page), AdminSubjectBodyDataSettingsQuery(), Subject)

}






