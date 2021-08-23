/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 17/08/2021, Tuesday
 **/

import {put, select} from "redux-saga/effects";
import * as Selector from "../selector";
import {Admin, Admin_Create, Admin_Delete} from "../../utils/Specify";
import {Delete, Register, TableDataInit, TableNextData} from "./__MiddleWareGlobal";

import {AdminBodyDataSettingsQuery, AdminListBodyDataQuery} from "../utils/GraphQlQuery/AdminQuery/Admin";
import {baseUrlNoAuth} from "../axios";
import {admin} from "../utils/ApiEndpoint/ClassroomEndPoint";
import {checkStringEmail, checkStringEmpty} from "../../../components/ui/utils/validation";
import {
    setErrorAlreadyExistEmail,
    setErrorEmptyId,
    setErrorInvalidEmail
} from "../../action/__ActionGlobal/ValidationAction";



export function* AdminRegister() {
    const data = yield select(Selector.AdminCreate)


    if(checkStringEmpty(data.id)){
        yield put(setErrorEmptyId(Admin_Create))
        return
    }

    if(checkStringEmail(data.id) === false) {
        yield put(setErrorInvalidEmail(Admin_Create))
        return
    }

    let params = new URLSearchParams()
    params.append("email", data.id)

    try {
        yield baseUrlNoAuth.get('user', {params})
    }catch (ignored) {
        yield put(setErrorAlreadyExistEmail(Admin_Create))
        return
    }

    params = new URLSearchParams()
    params.append('email',data.id)

    yield Register(params, admin, Admin_Create, AdminTableDataInit)

}

export function * DeleteAdmin(){
    const data = yield select(Selector.AdminDelete)

    if(checkStringEmpty(data.id)){
        yield put(setErrorEmptyId(Admin_Delete))
        return
    }

    const params = new URLSearchParams()
    params.append('email', data.id)

    yield Delete(params,admin,Admin_Delete,AdminTableDataInit)
}


export function* AdminTableDataNext(action) {
    const classState = yield select(Selector.Admin)
    yield TableNextData(action, classState, AdminListBodyDataQuery(classState.search,classState.page,classState.status),AdminBodyDataSettingsQuery(),Admin)
}

export function* AdminTableDataInit() {
    const classState = yield select(Selector.Admin)
    yield TableDataInit(AdminListBodyDataQuery(classState.search,classState.page,classState.status),AdminBodyDataSettingsQuery(),Admin)
}