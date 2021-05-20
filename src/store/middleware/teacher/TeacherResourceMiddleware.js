import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {TeacherResourceUpload as destination, TeacherResourceDelete as deleteResource} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {uniqueNamesGenerator, adjectives, colors, animals} from 'unique-names-generator'
import {baseUrl} from "../axios"
import {success_DeleteDialog, success_UploadDialog} from '../../action/teacher/TeacherResource/TeacherResource'

import * as dialogAction from '../../action/__ActionGlobal/AdminDialogAction'
import {Teacher_Resource_Delete, Teacher_Resource_Upload} from "../../utils/Specify";

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

        yield put(success_UploadDialog(response.data.item))
        yield put(dialogAction.registerDialogSuccess(Teacher_Resource_Upload))

    }

}

export function *TeacherResourceDelete(){

    const teacherResource = yield select(Selector.TeacherResourceDeleteDialog)
    const params = new URLSearchParams();
    params.append('code', teacherResource.id)
    try {
        const response =  yield baseUrl.delete(deleteResource, {params})
        yield put(success_DeleteDialog(response.data.item))
        yield put(dialogAction.registerDialogSuccess(Teacher_Resource_Delete))
    }catch (error) {
        yield put(dialogAction.registerDialogFail(error,Teacher_Resource_Delete))
        // console.log(error)
    }

}
