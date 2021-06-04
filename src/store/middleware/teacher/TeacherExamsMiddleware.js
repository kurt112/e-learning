import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {TableDataInit, TableNextData} from "../admin/__MiddleWareGlobal";
import {
    getTeacherExams,
    TeacherExamsBodyDataSettingsQuery
} from "../utils/GraphQlQuery/TeacherQuery/TeacherExamsQuery";
import {
    Teacher_Exams, Teacher_Exams_Create, Teacher_Exams_Delete
} from "../../utils/Specify";

import {
    TeacherExamCreate,
    TeacherExamDelete
} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {baseUrl} from "../axios";
import * as dialogAction from "../../action/__ActionGlobal/AdminDialogAction";
import {adjectives, animals, colors, uniqueNamesGenerator} from "unique-names-generator";

export function* TeacherExamsTableNext(action) {
    const classState = yield select(Selector.TeacherExams)
    const user = yield  select(Selector.CurrentUser)
    yield TableNextData(action, classState, getTeacherExams(classState.search, user.user.email, classState.page), TeacherExamsBodyDataSettingsQuery(), Teacher_Exams)
}

export function* TeacherExamsTableDataInit() {

    const classState = yield select(Selector.TeacherExams)
    const user = yield  select(Selector.CurrentUser)
    yield TableDataInit(getTeacherExams(classState.search, user.user.email, classState.page), TeacherExamsBodyDataSettingsQuery(), Teacher_Exams)
}

export function* TeacherExamsDelete() {
    const classState = yield select(Selector.TeacherExamsDeleteDialog)
    const currentUser = yield select(Selector.CurrentUser)
    const email = currentUser.user.email
    const params = new URLSearchParams();

    params.append('code', classState.id)
    params.append('email', email)
    try {
        yield baseUrl.delete(TeacherExamDelete, {params})
        yield TeacherExamsTableDataInit()
        yield put(dialogAction.registerDialogSuccess(Teacher_Exams_Delete))
    } catch (error) {
        yield put(dialogAction.registerDialogFail(error, Teacher_Exams_Delete))
    }
}

export function* TeacherExamsCreate() {
    const classState = yield select(Selector.TeacherExamsCreateDialog)

    const code = yield uniqueNamesGenerator({
            dictionaries: [adjectives, colors, animals],
            separator: '-',
            length: 3,
            style: 'lowerCase'
        }
    );

    const data = {
        code,
        ...classState
    }

    try {
        yield baseUrl.post(TeacherExamCreate, data)
        yield put(dialogAction.registerDialogSuccess(Teacher_Exams_Create))
        yield TeacherExamsTableDataInit()
    } catch (error) {
        console.log(error)
    }
}