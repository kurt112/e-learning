/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {
    TeacherResourceUpload as destination,
    TeacherResourceDelete as deleteResource
} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {uniqueNamesGenerator, adjectives, colors, animals} from 'unique-names-generator'
import {baseUrl} from "../axios"

import * as dialogAction from '../../action/__ActionGlobal/DialogAction'
import {Teacher_Resource, Teacher_Resource_Delete, Teacher_Resource_Upload} from "../../utils/Specify";
import {TableDataInit, TableNextData} from "../admin/__MiddleWareGlobal";

import {AdminTeacherBodyDataSettingsQuery} from "../utils/GraphQlQuery/AdminQuery/AdminTeacherQuery";
import {getTeacherResource} from "../utils/GraphQlQuery/TeacherQuery/TeacherResourceQuery";
import {deleteToS3, uploadToS3} from "../utils/S3bukcet/s3";

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

        const path = yield uploadToS3(teacherResource.file[i])
        const params = new URLSearchParams();

        params.append("filePath", path)
        params.append("name", teacherResource.name)
        params.append("type", teacherResource.type)
        params.append("description", teacherResource.description)
        params.append("code", code)
        params.append("email", email)
        yield baseUrl({
            method: 'post',
            url: destination,
            params
        }).catch(e => {
            console.log(e)
            return "";
        })
        i++;

        yield TeacherResourceTableDataInit()
        yield put(dialogAction.registerDialogSuccess(Teacher_Resource_Upload))
    }

}

export function* TeacherResourceDelete() {

    const teacherResource = yield select(Selector.TeacherResourceDeleteDialog)
    const currentUser = yield select(Selector.CurrentUser)
    const email = currentUser.user.email
    const params = new URLSearchParams();
    params.append('code', teacherResource.id)
    params.append('email', email)
    try {
        const response = yield baseUrl.delete(deleteResource, {params})
        yield deleteToS3 (response.data.item)
        yield TeacherResourceTableDataInit()
        yield put(dialogAction.registerDialogSuccess(Teacher_Resource_Delete))
    } catch (error) {
        yield put(dialogAction.registerDialogFail(error, Teacher_Resource_Delete))
    }

}


export function* TeacherResourceDataNext(action) {
    const teacherResource = yield select(Selector.TeacherResource)
    const user = yield  select(Selector.CurrentUser)
    yield TableNextData(action, teacherResource, getTeacherResource(teacherResource.search, user.user.email, teacherResource.page), AdminTeacherBodyDataSettingsQuery(), Teacher_Resource)
}

export function* TeacherResourceTableDataInit() {

    const teacherResource = yield select(Selector.TeacherResource)
    const user = yield  select(Selector.CurrentUser)
    yield TableDataInit(getTeacherResource(teacherResource.search, user.user.email, teacherResource.page,teacherResource.status), AdminTeacherBodyDataSettingsQuery(), Teacher_Resource)
}
