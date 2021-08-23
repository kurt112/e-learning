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
    Curriculum_Delete
} from "../../utils/Specify";
import {
    AdminCurriculumBodyDataQuery,
    AdminCurriculumBodyDataSettingsQuery
} from "../utils/GraphQlQuery/AdminQuery/AdminCurriculum";
import uuid from "short-uuid";
import {reInitState} from "../../action/__ActionGlobal/DialogAction";
import {checkStringEmpty} from "../../../components/ui/utils/validation";
import {setErrorCurriculumNameEmpty, setErrorEmptyId} from "../../action/__ActionGlobal/ValidationAction";
export function* CurriculumRegister() {
    const data = yield select(Selector.AdminCreateCurriculum)

    if(checkStringEmpty(data.name))
        return yield put(setErrorCurriculumNameEmpty(Curriculum_Create))



    if(data.code === undefined || data.code === '') data.code = yield uuid.generate()
    yield RegisterBody(data, CreateCurriculum, Curriculum_Create,CurriculumTableDataInit)
    yield put(reInitState(Curriculum_Create))

}

export function * DeleteCurriculum(){
    const curriculum = yield select(Selector.AdminDeleteCurriculum)
    const params = new URLSearchParams();


    if(checkStringEmpty(curriculum.id)) return yield put(setErrorEmptyId(Curriculum_Delete))

    params.append('id', curriculum.id)
    yield Delete(params,deleteCurriculum,Curriculum_Delete,CurriculumTableDataInit)
}


export function* CurriculumTableDataNext(action) {
    const classState = yield select(Selector.AdminCurriculum)
    yield TableNextData(action, classState, AdminCurriculumBodyDataQuery(classState.search,classState.page,classState.status),AdminCurriculumBodyDataSettingsQuery(),Curriculum)
}

export function* CurriculumTableDataInit() {
    const classState = yield select(Selector.AdminCurriculum)
    yield TableDataInit(AdminCurriculumBodyDataQuery(classState.search,classState.page,classState.status),AdminCurriculumBodyDataSettingsQuery(),Curriculum)
}