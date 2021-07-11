/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {put, select} from "redux-saga/effects"
import * as Selector from "../selector"
import {TableDataInit, TableNextData} from "../admin/__MiddleWareGlobal"
import {
    Teacher_Lecture,
    Teacher_Lecture_Create, Teacher_Lecture_Delete, Teacher_Resource_Delete
} from "../../utils/Specify"
import {
    getTeacherLectureByEmail,
    TeacherLectureBodyDataSettingsQuery
} from "../utils/GraphQlQuery/TeacherQuery/TeacherLectureQuery"
import {adjectives, animals, colors, uniqueNamesGenerator} from "unique-names-generator";
import {baseUrl} from "../axios";
import {
    TeacherLectureCreate as createLecture,
    TeacherLectureDelete,
} from "../utils/ApiEndpoint/ClassroomEndPoint";
import * as dialogAction from "../../action/__ActionGlobal/DialogAction";

export function* TeacherLectureDataNext(action) {
    const state = yield select(Selector.TeacherLecture)
    const user = yield  select(Selector.CurrentUser)
    yield TableNextData(action, state, getTeacherLectureByEmail(state.search, user.user.email, state.page), TeacherLectureBodyDataSettingsQuery(), Teacher_Lecture)
}

export function* TeacherLectureTableDataInit() {
    const state = yield select(Selector.TeacherLecture)
    const user = yield  select(Selector.CurrentUser)
    yield TableDataInit(getTeacherLectureByEmail(state.search, user.user.email, state.page), TeacherLectureBodyDataSettingsQuery(), Teacher_Lecture)
}

export function* DeleteLecture() {
    const deleteLecture = yield select(Selector.TeacherLectureDelete)
    const currentUser = yield select(Selector.CurrentUser)
    const email = currentUser.user.email

    const params = new URLSearchParams();
    params.append('code', deleteLecture.id)
    params.append('email', email)
    try {
        yield baseUrl.delete(TeacherLectureDelete, {params})
        yield TeacherLectureTableDataInit()
        yield put(dialogAction.registerDialogSuccess(Teacher_Lecture_Delete))
    } catch (error) {
        yield put(dialogAction.registerDialogFail(error, Teacher_Resource_Delete))
    }
}

export function* TeacherLectureCreate() {
    const classState = yield select(Selector.TeacherLectureCreate)
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
        yield baseUrl.post(createLecture, data)
        yield put(dialogAction.registerDialogSuccess(Teacher_Lecture_Create))
        yield TeacherLectureTableDataInit()
    } catch (error) {
        console.log(error)
    }
}