import  state from '../../__StateGlobal/AdminTableState'
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {Student} from "../../../utils/Specify";
import {AdminInsertStudentTable as insert} from "../../../../components/ui/utils/tableColumn";

const transforms = (items) => items.map((item) =>
    insert(item.student_id, item.user.firstName,item.user.lastName,item.user.email,item.user.birthdate,"to be insert", "to be insert", "to be insert",item.student_id))

const newState = new state()

const reducer = (state = newState.init_state, action)=>{

    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(Student): return  newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Student): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Student): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Student): return newState.failData(state)
        case actions.DIALOG_OPEN(Student): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Student): return newState.closeDialog(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Student): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Student): return newState.searchChange(state,action)
        default: return state;
    }
}

export default reducer