import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {TableDataInit, TableNextData} from "../admin/__MiddleWareGlobal";
import {
    Teacher_Quiz, Teacher_Quiz_Create, Teacher_Quiz_Delete
} from "../../utils/Specify";

import {
    TeacherAssignmentDelete as deleteAssignment,
    TeacherAssignmentCreate as createAssignment
} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {baseUrl} from "../axios";
import {DialogSuccess} from "../../action/teacher/GlobalAction";
import * as dialogAction from "../../action/__ActionGlobal/AdminDialogAction";
import {adjectives, animals, colors, uniqueNamesGenerator} from "unique-names-generator";
import {getTeacherQuiz,TeacherQuizBodyDataSettingsQuery} from "../utils/GraphQlQuery/TeacherQuery/TeacherQuizQuery";

export function* TeacherQuizzesTableNext(action) {
    const classState = yield select(Selector.TeacherExams)
    const user = yield  select(Selector.CurrentUser)
    yield TableNextData(action, classState, getTeacherQuiz(classState.search, user.user.email, classState.page), TeacherQuizBodyDataSettingsQuery(), Teacher_Quiz)
}

export function* TeacherQuizzesTableDataInit() {

    const classState = yield select(Selector.TeacherExams)
    const user = yield  select(Selector.CurrentUser)
    yield TableDataInit(getTeacherQuiz(classState.search, user.user.email, classState.page), TeacherQuizBodyDataSettingsQuery(), Teacher_Quiz)
}

export function* TeacherQuizzesDelete() {
    const classState = yield select(Selector.TeacherExamsDeleteDialog)
    const currentUser = yield select(Selector.CurrentUser)
    const email = currentUser.user.email
    const params = new URLSearchParams();

    params.append('code', classState.id)
    params.append('email', email)
    try {
        const response = yield baseUrl.delete(deleteAssignment, {params})
        yield put(DialogSuccess(response.data.item, Teacher_Quiz_Delete))
        yield put(dialogAction.registerDialogSuccess(Teacher_Quiz_Delete))
    } catch (error) {
        yield put(dialogAction.registerDialogFail(error, Teacher_Quiz_Delete))
    }
}

export function* TeacherQuizzesCreate() {
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
        yield baseUrl.post(createAssignment, data)
        const classState = yield select(Selector.TeacherExams)
        const user = yield  select(Selector.CurrentUser)
        yield put(dialogAction.registerDialogSuccess(Teacher_Quiz_Create))
        yield TableDataInit(getTeacherQuiz(classState.search, user.user.email, classState.page), TeacherQuizBodyDataSettingsQuery(), Teacher_Quiz)
    } catch (error) {
        console.log(error)
    }
}