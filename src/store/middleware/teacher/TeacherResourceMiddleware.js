import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {TeacherResourceUpload as destination, TeacherResourceDelete as deleteResource} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {uniqueNamesGenerator, adjectives, colors, animals} from 'unique-names-generator'
import {baseUrl} from "../axios"
import {DialogSuccess} from '../../action/teacher/GlobalAction'

import * as dialogAction from '../../action/__ActionGlobal/AdminDialogAction'
import {Teacher_Resource, Teacher_Resource_Delete, Teacher_Resource_Upload} from "../../utils/Specify";
import {TableDataInit, TableNextData} from "../admin/__MiddleWareGlobal";

import {AdminTeacherBodyDataSettingsQuery} from "../utils/GraphQlQuery/AdminQuery/AdminTeacherQuery";
import {getTeacherResource} from "../utils/GraphQlQuery/TeacherQuery/TeacherResourceQuery";

export function* TeacherResourceUpload() {
    const teacherResource = yield select(Selector.TeacherResourceUploadDialog)
    const currentUser = yield select(Selector.CurrentUser)
    const email = currentUser.user.email
    const code = uniqueNamesGenerator({
            dictionaries: [adjectives, colors, animals],
            separator: '-',
            length: 3,
            style: 'lowerCase'
        }
    );

    let i = 0;

    while (teacherResource.file[i] !== undefined) {
        const data = new FormData();
        data.append("file", teacherResource.file[i])
        data.append("name", teacherResource.name)
        data.append("type", teacherResource.type)
        data.append("description", teacherResource.description)
        data.append("code", code)
        data.append("email", email)
        const response =  yield baseUrl({
            method: 'post',
            url: destination,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data
        }).catch(e=> {
            console.log(e)
        })
        i++;

        yield put(DialogSuccess(response.data.item,Teacher_Resource_Upload))
        yield put(dialogAction.registerDialogSuccess(Teacher_Resource_Upload))

    }

}

export function *TeacherResourceDelete(){

    const teacherResource = yield select(Selector.TeacherResourceDeleteDialog)
    const currentUser = yield select(Selector.CurrentUser)
    const email = currentUser.user.email
    const params = new URLSearchParams();
    params.append('code', teacherResource.id)
    params.append('email', email)
    try {
        const response =  yield baseUrl.delete(deleteResource, {params})
        yield put(DialogSuccess(response.data.item, Teacher_Resource_Delete))
        yield put(dialogAction.registerDialogSuccess(Teacher_Resource_Delete))
    }catch (error) {
        yield put(dialogAction.registerDialogFail(error,Teacher_Resource_Delete))
        // console.log(error)
    }

}


export function* TeacherResourceDataNext(action) {
    const teacherResource = yield select(Selector.TeacherResource)
    const user = yield  select(Selector.CurrentUser)
    yield TableNextData(action, teacherResource, getTeacherResource(teacherResource.search,user.user.email,teacherResource.page), AdminTeacherBodyDataSettingsQuery(),Teacher_Resource)
}

export function* TeacherResourceTableDataInit() {

    const teacherResource = yield select(Selector.TeacherResource)
    const user = yield  select(Selector.CurrentUser)
    yield TableDataInit(getTeacherResource(teacherResource.search,user.user.email,teacherResource.page),AdminTeacherBodyDataSettingsQuery(),Teacher_Resource)
}
