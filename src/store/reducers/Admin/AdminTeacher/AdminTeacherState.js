import * as actions from '../../../ActionType/__ActionTypeGlobal/AdminTableActionType'
import {AdminInsertTeacherTable as insert} from "../../../../components/ui/utils/tableColumn";
import {Teacher} from '../../../utils/Specify'
import state from '../../__StateGlobal/AdminTableState'

const newState = new state()

const transforms = (items) => items.map((item) => insert(item.user.firstName, item.user.lastName, item.user.email, item.user.birthdate, item.id))
const response = (item) => insert(item.user.firstName, item.user.lastName, item.user.email, item.user.birthdate, item.id)

const reducer = (state=newState.init_state, action)=>{
    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(Teacher): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Teacher): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Teacher): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Teacher): return newState.failData(state)

        case actions.ADMIN_TABLE_DIALOG_OPEN(Teacher): return newState.openDialog(state)
        case actions.ADMIN_TABLE_DIALOG_CLOSE(Teacher): return newState.closeDialog(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Teacher): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher): return newState.searchChange(state,action)
        case actions.ADMIN_DIALOG_TABLE_REGISTER(Teacher): return newState.AddTable(state, response(action.item))
        default: return state;
    }

}

export default reducer