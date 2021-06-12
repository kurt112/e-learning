import {select} from "redux-saga/effects";
import * as Selector from "../selector";
import {Delete, RegisterBody, TableDataInit, TableNextData} from "./__MiddleWareGlobal";
import {CreateCurriculum, DeleteCurriculum as deleteCurriculum} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {
    Curriculum,
    Curriculum_Create,
    Curriculum_Delete
} from "../../utils/Specify";
import {
    AdminCurriculumBodyDataQuery,
    AdminCurriculumBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminCurriculum";
import uuid from "short-uuid";
export function* CurriculumRegister() {
    const data = yield select(Selector.AdminCreateCurriculum)
    data.code = yield uuid.generate()
    yield RegisterBody(data, CreateCurriculum, Curriculum_Create,CurriculumTableDataInit)
}

export function * DeleteCurriculum(){
    const classState = yield select(Selector.AdminDeleteCurriculum)
    const params = new URLSearchParams();
    params.append('id', classState.id)
    yield Delete(params,deleteCurriculum,Curriculum_Delete,CurriculumTableDataInit)
}


export function* CurriculumTableDataNext(action) {
    const classState = yield select(Selector.AdminCurriculum)
    yield TableNextData(action, classState, AdminCurriculumBodyDataQuery(classState.search,classState.page),AdminCurriculumBodyDataSettingsQuery(),Curriculum)
}

export function* CurriculumTableDataInit() {
    const classState = yield select(Selector.AdminCurriculum)

    yield TableDataInit(AdminCurriculumBodyDataQuery(classState.search,classState.page),AdminCurriculumBodyDataSettingsQuery(),Curriculum)
}