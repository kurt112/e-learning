/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {put} from "redux-saga/effects";
import * as tableActions from "../../action/__ActionGlobal/TableAction";
import {baseUrl} from "../axios";
import * as actions from "../../action/__ActionGlobal/DialogAction";
import {graphQLRequest} from '../utils/HttpRequest'
import * as dialogAction from "../../action/__ActionGlobal/DialogAction";

export function * Delete(params,URL,to, reload){
    try {
        yield baseUrl.delete(URL, {params})
        yield reload()
        yield put(dialogAction.registerDialogSuccess(to))
    } catch (error) {
        yield put(dialogAction.registerDialogFail(error, to))
    }
}

export function* Register(params, URL, to, reload) {
    try {

        yield baseUrl.post(URL, params)
        yield  put(actions.registerDialogSuccess(to))
        yield reload()
    } catch (error) {

        yield put(actions.registerDialogFail(error, to))
    }
}

export function* RegisterBody(state, URL, to, reload) {

    try {
        yield baseUrl.post(URL, state)
        yield reload()
        yield  put(actions.registerDialogSuccess(to))
    } catch (error) {
        yield put(actions.registerDialogFail(error, to))
    }
}


export function* TableNextData(action,state,bodyDataQuery, bodySettingsQuery,to) {

    try {
        if (action.page > state.highPage) {
            const bodyDataResponse = yield graphQLRequest(bodyDataQuery)
            const bodyDataSettingsResponse= yield graphQLRequest(bodySettingsQuery)

            const bodyObject = bodyDataResponse.data.data
            const bodyObjectKey = Object.keys(bodyObject)


            const bodyObjectSettings = bodyDataSettingsResponse.data.data
            const bodyObjectSettingsKey = Object.keys(bodyObjectSettings)
            const settings = bodyObjectSettings[bodyObjectSettingsKey]

            yield put(tableActions.DataNextPage(settings.currentPage, to))
            yield put(tableActions.SuccessDataTable(bodyObject[bodyObjectKey], false, to))
        }

    } catch (error) {
        yield put(tableActions.FailDataTable(error, to))
    }
}

export function* TableDataInit(bodyDataQuery, bodySettingsQuery,to, ) {
    try {
        const bodyDataResponse = yield graphQLRequest(bodyDataQuery)
        const bodySettingsResponse = yield graphQLRequest(bodySettingsQuery)
        const object = bodyDataResponse.data.data
        const key = Object.keys(object)
        yield put(tableActions.SettingInitDataTable(bodySettingsResponse.data.data,to))
        yield put(tableActions.SuccessDataTable(object[key], true, to))
    } catch (error) {
        yield put(tableActions.FailDataTable(error, to))
    }
}

