import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {TableDataInit, TableNextData} from "./__MiddleWareGlobal";
// import {AdminRoomClassRegister, as deleteRoomClass} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {Curriculum} from "../../utils/Specify";
import {
    AdminCurriculumBodyDataQuery,
    AdminCurriculumBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminCurriculum";
export function* CurriculumRegister() {
    // const roomClass = yield select(Selector.AdminRoomClassDialog)
    // const params = new URLSearchParams();
    // params.append('id',yield uuid.generate())
    // params.append('roomShift-id', roomClass.shiftID)
    // params.append('subject-id',roomClass.subjectID)
    // params.append('time-start',roomClass.timeStart)
    // params.append('time-end',roomClass.timeEnd)
    // params.append('day',roomClass.day)
    // params.append('teacher-id',roomClass.teacherID)
    // yield Register(params, AdminRoomClassRegister, RoomShiftClass,RoomClassTableDataInit)
}

export function * DeleteCurriculum(){
    // const classState = yield select(Selector.DeleteClassDialog)
    // const params = new URLSearchParams();
    // params.append('id', classState.id)
    // yield Delete(params,deleteRoomClass,RoomShiftClass_Delete,CurriculumTableDataInit)
}


export function* CurriculumTableDataNext(action) {
    const classState = yield select(Selector.AdminCurriculum)
    yield TableNextData(action, classState, AdminCurriculumBodyDataQuery(classState.search,classState.page),AdminCurriculumBodyDataSettingsQuery(),Curriculum)
}

export function* CurriculumTableDataInit() {
    const classState = yield select(Selector.AdminCurriculum)

    yield TableDataInit(AdminCurriculumBodyDataQuery(classState.search,classState.page),AdminCurriculumBodyDataSettingsQuery(),Curriculum)
}