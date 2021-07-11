/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {AdminInsertSubject as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../../__StateGlobal/AdminTableState";
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {Subject, Subject_Delete} from "../../../utils/Specify";
import {updateObject} from "../../../utils/UpdateObject";

const newState = new state()

const transforms = (items) => items.map((item) =>
    insert(item.subjectCode, item.subjectName, item.subjectMajor, item.status, item.subjectCode))

const currentState = {
    ...newState.init_state,
    deleteDialog: false
}

const reducer = (state = currentState, action) =>{
    switch(action.type){
        // for table state
        case actions.ADMIN_TABLE_SETTINGS_INIT(Subject): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Subject): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Subject): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Subject): return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Subject): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Subject): return newState.searchChange(state,action)

        // for opening and closing dialog
        case actions.DIALOG_OPEN(Subject): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Subject): return newState.closeDialog(state)
        case actions.DIALOG_OPEN(Subject_Delete): return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(Subject_Delete): return updateObject(state, {deleteDialog: false})
        default: return state;
    }
}

export default reducer
