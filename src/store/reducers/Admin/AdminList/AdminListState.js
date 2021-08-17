import state from "../../__StateGlobal/AdminTableState";
import {convertDateTime} from "../../../../components/ui/utils/dateFormat/DateTimeFormatToDateWord";
import {AdminInsertTable as insert} from "../../../../components/ui/utils/tableColumn";
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {Admin, Admin_Create, Admin_Delete} from "../../../utils/Specify";
import {updateObject} from "../../../utils/UpdateObject";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 17/08/2021, Tuesday
 **/

const newState = new state()

const currentState = {
    ...newState.init_state,

    deleteDialog: false,
    createDialog: false
}

const transforms = (items) => items.map((item) => {
    const birthdate = item.birthdate === null ? 'No Info' : convertDateTime(item.birthdate)
    return insert(item.firstName, item.lastName, item.email, birthdate)
})

const reducer = (state = currentState, action) => {
    switch (action.type){
        // for table state
        case actions.ADMIN_TABLE_SETTINGS_INIT(Admin): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Admin): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Admin): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Admin): return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Admin): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Admin): return newState.searchChange(state,action)


        // For opening and closing dialog
        case actions.DIALOG_OPEN(Admin_Create): return updateObject(state, {createDialog: true})
        case actions.DIALOG_CLOSE(Admin_Create): return updateObject(state, {createDialog: false})
        case actions.DIALOG_OPEN(Admin_Delete): return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(Admin_Delete): return updateObject(state, {deleteDialog: false})
    }


    return state
}

export default reducer