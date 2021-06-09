
import {AdminInsertSubject as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../../__StateGlobal/AdminTableState";
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {Subject} from "../../../utils/Specify";

const newState = new state()

const transforms = (items) => items.map((item) =>
    insert(item.subjectCode, item.subjectName, item.subjectMajor, item.status, item.subjectCode))

const reducer = (state = newState.init_state, action) =>{
    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(Subject): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Subject): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Subject): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Subject): return newState.failData(state)
        case actions.DIALOG_OPEN(Subject): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Subject): return newState.closeDialog(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Subject): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Subject): return newState.searchChange(state,action)
        default: return state;
    }
}

export default reducer
