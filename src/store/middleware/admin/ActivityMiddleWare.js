import {select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {AdminActivityUpload} from '../utils/ApiEndpoint/ClassroomEndPoint'
import {TableDataInit, TableNextData, UploadFile} from './__MiddleWareGlobal'
import {Activity} from "../../utils/Specify";
import {
    AdminActivityBodyDataQuery,
    AdminActivityBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminActivityQuery";
export function* ActivityUpload() {

    const activity = yield select(Selector.AdminActivityDialog)

    let i =0;


    while (activity.file[i] !== undefined){
        const data = new FormData();
        data.append("activity-name", activity.activityName)
        data.append("shift-id",activity.roomShiftId)
        data.append("subject-code",activity.subjectID)
        data.append("activity-type", activity.activityType)
        data.append("deadline-date", activity.activityDeadlineDate)
        data.append("deadline-time",activity.activityDeadlineTime)
        data.append("activity-description",activity.activityDescription)
        data.append("file", activity.file[i])
        yield UploadFile(data,AdminActivityUpload, Activity)
        i++;

    }
}
export function* ActivityTableNext(action) {
    const activity = yield select(Selector.AdminActivity)
    yield TableNextData(action, activity, AdminActivityBodyDataQuery, AdminActivityBodyDataSettingsQuery,Activity)
}

export function* ActivityDataInit() {
    const activity = yield select(Selector.AdminActivity)
    yield TableDataInit(AdminActivityBodyDataQuery(activity.search,activity.page),AdminActivityBodyDataSettingsQuery(),Activity)
}

