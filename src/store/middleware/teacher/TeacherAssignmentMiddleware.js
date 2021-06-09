import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {TableDataInit, TableNextData} from "../admin/__MiddleWareGlobal";
import {
    getTeacherAssignments,
    TeacherAssignmentBodyDataSettingsQuery
} from "../utils/GraphQlQuery/TeacherQuery/TeacherAssignmentQuery";
import { Teacher_Assignment, Teacher_Assignment_Create, Teacher_Assignment_Delete} from "../../utils/Specify";

import {
    TeacherAssignmentDelete as deleteAssignment,
    TeacherAssignmentCreate as createAssignment
} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {baseUrl} from "../axios";
import {DialogSuccess} from "../../action/teacher/GlobalAction";
import * as dialogAction from "../../action/__ActionGlobal/DialogAction";
import {adjectives, animals, colors, uniqueNamesGenerator} from "unique-names-generator";

export function* TeacherAssignmentTableNext(action) {
    const classState = yield select(Selector.TeacherAssignment)
    const user = yield  select(Selector.CurrentUser)
    yield TableNextData(action, classState, getTeacherAssignments(classState.search, user.user.email, classState.page), TeacherAssignmentBodyDataSettingsQuery(), Teacher_Assignment)
}

export function* TeacherAssignmentTableDataInit() {

    const classState = yield select(Selector.TeacherAssignment)
    const user = yield  select(Selector.CurrentUser)
    yield TableDataInit(getTeacherAssignments(classState.search, user.user.email, classState.page), TeacherAssignmentBodyDataSettingsQuery(), Teacher_Assignment)
}

export function* TeacherAssignmentDelete() {
    const classState = yield select(Selector.TeacherAssignmentDeleteDialog)
    const currentUser = yield select(Selector.CurrentUser)
    const email = currentUser.user.email
    const params = new URLSearchParams();

    params.append('code', classState.id)
    params.append('email', email)
    try {
        const response = yield baseUrl.delete(deleteAssignment, {params})
        yield put(DialogSuccess(response.data.item, Teacher_Assignment_Delete))
        yield put(dialogAction.registerDialogSuccess(Teacher_Assignment_Delete))
    } catch (error) {
        yield put(dialogAction.registerDialogFail(error, Teacher_Assignment_Delete))
    }
}

export function* TeacherAssignmentCreate() {
    const classState = yield select(Selector.TeacherAssignmentCreateDialog)

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
        const classState = yield select(Selector.TeacherAssignment)
        const user = yield  select(Selector.CurrentUser)
        yield put(dialogAction.registerDialogSuccess(Teacher_Assignment_Create))
        yield TableDataInit(getTeacherAssignments(classState.search, user.user.email, classState.page), TeacherAssignmentBodyDataSettingsQuery(), Teacher_Assignment)
    } catch (error) {
        console.log(error)
    }
}