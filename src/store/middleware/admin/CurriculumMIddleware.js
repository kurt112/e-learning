/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {Delete, RegisterBody, TableDataInit, TableNextData} from "./__MiddleWareGlobal";
import {CreateCurriculum, DeleteCurriculum as deleteCurriculum} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {
    Curriculum,
    Curriculum_Create,
    Curriculum_Delete, Room
} from "../../utils/Specify";
import {
    AdminCurriculumBodyDataQuery,
    AdminCurriculumBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminCurriculum";
import uuid from "short-uuid";
import {reInitState} from "../../action/__ActionGlobal/DialogAction";
export function* CurriculumRegister() {
    const data = yield select(Selector.AdminCreateCurriculum)
    if(data.code === undefined) data.code = yield uuid.generate()
    yield RegisterBody(data, CreateCurriculum, Curriculum_Create,CurriculumTableDataInit)
    yield put(reInitState(Curriculum_Create))

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