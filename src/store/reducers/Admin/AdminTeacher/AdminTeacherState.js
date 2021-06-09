import * as actions from '../../../ActionType/__ActionTypeGlobal/TableActionType'
import {AdminInsertTeacherTable as insert} from "../../../../components/ui/utils/tableColumn";
import {Teacher} from '../../../utils/Specify'
import state from '../../__StateGlobal/AdminTableState'

const newState = new state()

const transforms = (items) => items.map((item) => insert(item.user.firstName, item.user.lastName, item.user.email, item.user.birthdate))

const reducer = (state=newState.init_state, action)=>{
    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(Teacher): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Teacher): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Teacher): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Teacher): return newState.failData(state)

        case actions.DIALOG_OPEN(Teacher): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Teacher): return newState.closeDialog(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Teacher): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher): return newState.searchChange(state,action)
        default: return state;
    }

}

export default reducer