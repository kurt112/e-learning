import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {TableDataInit, TableNextData} from "../admin/__MiddleWareGlobal";
import {
    Teacher_Quiz, Teacher_Quiz_Create, Teacher_Quiz_Delete
} from "../../utils/Specify";

import {
    TeacherQuizDelete ,
    TeacherQuizCreate
} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {baseUrl} from "../axios";
import * as dialogAction from "../../action/__ActionGlobal/DialogAction";
import {adjectives, animals, colors, uniqueNamesGenerator} from "unique-names-generator";
import {getTeacherQuiz,TeacherQuizBodyDataSettingsQuery} from "../utils/GraphQlQuery/TeacherQuery/TeacherQuizQuery";

export function* TeacherQuizzesTableNext(action) {
    const classState = yield select(Selector.TeacherQuizzes)
    const user = yield  select(Selector.CurrentUser)
    yield TableNextData(action, classState, getTeacherQuiz(classState.search, user.user.email, classState.page), TeacherQuizBodyDataSettingsQuery(), Teacher_Quiz)
}

export function* TeacherQuizzesTableDataInit() {

    const classState = yield select(Selector.TeacherQuizzes)
    const user = yield  select(Selector.CurrentUser)
    yield TableDataInit(getTeacherQuiz(classState.search, user.user.email, classState.page), TeacherQuizBodyDataSettingsQuery(), Teacher_Quiz)
}

export function* TeacherQuizzesDelete() {
    const classState = yield select(Selector.TeacherQuizDeleteDialog)
    const currentUser = yield select(Selector.CurrentUser)
    const email = currentUser.user.email
    const params = new URLSearchParams();

    params.append('code', classState.id)
    params.append('email', email)
    try {
        yield baseUrl.delete(TeacherQuizDelete, {params})
        yield TeacherQuizzesTableDataInit()
        yield put(dialogAction.registerDialogSuccess(Teacher_Quiz_Delete))
    } catch (error) {
        yield put(dialogAction.registerDialogFail(error, Teacher_Quiz_Delete))
    }
}

export function* TeacherQuizzesCreate() {
    const classState = yield select(Selector.TeacherQuizCreateDialog)

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
        yield baseUrl.post(TeacherQuizCreate, data)
        yield TeacherQuizzesTableDataInit()
        yield put(dialogAction.registerDialogSuccess(Teacher_Quiz_Create))
    } catch (error) {
        console.log(error)
    }
}