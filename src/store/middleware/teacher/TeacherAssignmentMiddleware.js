import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {TableDataInit, TableNextData} from "../admin/__MiddleWareGlobal";
import {
    getTeacherAssignments,
    TeacherAssignmentBodyDataSettingsQuery
} from "../utils/GraphQlQuery/TeacherQuery/TeacherAssignmentQuery";
import {Teacher_Assignment} from "../../utils/Specify";

// export function* RoomClassTableDataNext(action) {
//     const classState = yield select(Selector.AdminClass)
//     yield TableNextData(action, classState, AdminRoomClassBodyDataQuery, AdminRoomClassBodyDataSettingsQuery,Teacher_Assignment)
// }

export function* TeacherAssignmentTableDataInit() {

    const classState = yield select(Selector.TeacherAssignment)
    const user = yield  select(Selector.CurrentUser)
    yield TableDataInit(getTeacherAssignments(classState.search,user.user.email,classState.page),TeacherAssignmentBodyDataSettingsQuery(),Teacher_Assignment)
}