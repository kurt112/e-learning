import {put} from "redux-saga/effects";
import * as tableActions from "../../action/__ActionGlobal/AdminAction";
import {baseUrl} from "../axios";
import * as actions from "../../action/__ActionGlobal/AdminDialogAction";
import {graphQLRequest} from '../utils/HttpRequest'
export function* UploadFile(data, URL, to) {

    try {
      const response =  yield baseUrl({
            method: 'post',
            url: URL,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data
        })
        yield  put(tableActions.addItemTable(response.data.item, to))
        yield  put(actions.registerDialogSuccess(to))
    } catch (error) {
        console.log(error)
        yield put(actions.registerDialogFail(error, to))
    }
}

export function* Register(params, URL, to) {
    try {

        const response = yield baseUrl.post(URL, params)
        yield  put(tableActions.addItemTable(response.data.item, to))
        yield  put(actions.registerDialogSuccess(to))
    } catch (error) {

        yield put(actions.registerDialogFail(error, to))
    }
}

export function* RegisterBody(state, URL, to) {

    try {
        const response = yield baseUrl.post(URL, state)
        yield  put(tableActions.addItemTable(response.data.item, to))
        yield  put(actions.registerDialogSuccess(to))
    } catch (error) {
        yield put(actions.registerDialogFail(error, to))
    }
}


export function* TableNextData(action,state,bodyDataQuery, bodySettingsQuery,to) {

    try {
        if (action.page > state.highPage) {
            const bodyDataResponse = yield graphQLRequest(bodyDataQuery(state.search, action.page))
            const bodyDataSettingsResponse= yield graphQLRequest(bodySettingsQuery())

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
        console.log(bodyDataResponse)
        const bodySettingsResponse = yield graphQLRequest(bodySettingsQuery)

        const object = bodyDataResponse.data.data
        const key = Object.keys(object)
        console.log("the settings")
        console.log(bodySettingsResponse)
        yield put(tableActions.SettingInitDataTable(bodySettingsResponse.data.data,to))
        yield put(tableActions.SuccessDataTable(object[key], true, to))
    } catch (error) {
        console.log(error)
        yield put(tableActions.FailDataTable(error, to))
    }
}

