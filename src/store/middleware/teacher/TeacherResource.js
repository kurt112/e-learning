import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {UploadFile} from "../admin/__MiddleWareGlobal";
import {TeacherResourceUpload as destination} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {Teacher_Resource} from "../../utils/Specify";
import {uniqueNamesGenerator, adjectives, colors, animals} from 'unique-names-generator';

export function* TeacherResourceUpload() {
    const teacherResource = yield select(Selector.TeacherResourceUploadDialog)
    const currentUser = yield select(Selector.CurrentUser)
    const email = currentUser.user.email
    console.log(teacherResource)

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
        yield UploadFile(data, destination, Teacher_Resource)
        i++;
    }
}
