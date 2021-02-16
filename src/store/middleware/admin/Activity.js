import {select} from 'redux-saga/effects'
import * as Selector from '../selector'
import {AdminActivityUpload, AdminActivityList} from '../utils/ApiEndpoint/ClassroomEndPoint'
import {TableDataInit, TableNextData, UploadFile} from './__MiddleWareGlobal'
import {Activity, Room} from "../../utils/Specify";

export function* ActivityUpload() {

    const activity = yield select(Selector.AdminActivityDialog)

    let i =0;


    console.log(activity.file[i])
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
    const roomTable = yield select(Selector.AdminRoom)
    yield TableNextData(action,roomTable,AdminActivityList, Activity)
}

export function* ActivityDataInit() {
    alert("wew")
    const roomTable = yield select(Selector.AdminRoom)
    yield TableDataInit(roomTable, AdminActivityList, Room)
}

