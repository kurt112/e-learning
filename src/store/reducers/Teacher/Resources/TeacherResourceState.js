import {TeacherInsertResources as insert} from '../../../../components/ui/utils/tableColumn/TeacherTable'
import {updateObject} from "../../../utils/UpdateObject";
import {convertDateTime} from "../../../../components/ui/utils/dateFormat/DateTimeFormatToDateWord";
import * as dialogAction from '../../../ActionType/__ActionTypeGlobal/TableActionType'
import {
    Teacher_Resource,
    Teacher_Resource_Delete,
    Teacher_Resource_Upload
} from "../../../utils/Specify";
import state from "../../__StateGlobal/AdminTableState";
const newState = new state()

const initState = {
    ...newState.init_state,

    //  Dialog Resource
    uploadResourceDialog: false,
    deleteResourceDialog: false,
    updateResourceDialog: false
}


const transforms = (items) => items.map((item) =>
    insert(item.code, item.name, item.description, convertDateTime(item.createdAt), item.type, item.status))


const reducer = (state = initState, action) => {
    switch (action.type) {

        case dialogAction.ADMIN_TABLE_SETTINGS_INIT(Teacher_Resource): return newState.apiSettingsInit(state,action)
        case dialogAction.ADMIN_TABLE_INIT(Teacher_Resource): return newState.initData(state)
        case dialogAction.ADMIN_TABLE_SUCCESS(Teacher_Resource): return newState.successData(state, action,transforms)
        case dialogAction.ADMIN_TABLE_FAIL(Teacher_Resource): return newState.failData(state)
        case dialogAction.ADMIN_TABLE_NEXT_PAGE(Teacher_Resource): return newState.nextData(state,action)
        case dialogAction.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Resource): return newState.searchChange(state,action)

        // upload dialog actions
        case dialogAction.DIALOG_OPEN(Teacher_Resource_Upload):
            return updateObject(state, {uploadResourceDialog: true})
        case dialogAction.DIALOG_CLOSE(Teacher_Resource_Upload):
            return updateObject(state, {uploadResourceDialog: false})


        // for opening and closing of delete dialog
        case dialogAction.DIALOG_OPEN(Teacher_Resource_Delete):
            return updateObject(state, {deleteResourceDialog: true})
        case dialogAction.DIALOG_CLOSE(Teacher_Resource_Delete):
            return updateObject(state, {deleteResourceDialog: false})


        default:
            return state;
    }
}

export default reducer
