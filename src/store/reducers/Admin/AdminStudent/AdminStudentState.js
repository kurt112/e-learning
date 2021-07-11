/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import  state from '../../__StateGlobal/AdminTableState'
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {Student, Student_Delete} from "../../../utils/Specify";
import {AdminInsertStudentTable as insert} from "../../../../components/ui/utils/tableColumn";
import {updateObject} from "../../../utils/UpdateObject";

const transforms = (items) => items.map((item) =>
    insert(item.student_id, item.user.firstName,item.user.lastName,item.user.email,item.user.birthdate,
        "to be insert", "to be insert", "to be insert"))

const newState = new state()

const currentState = {
    ...newState.init_state,
    deleteDialog: false
}


const reducer = (state = currentState, action)=>{

    switch(action.type){
        // for table state
        case actions.ADMIN_TABLE_SETTINGS_INIT(Student): return  newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Student): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Student): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Student): return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Student): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Student): return newState.searchChange(state,action)

        // For opening and closing dialog
        case actions.DIALOG_OPEN(Student_Delete): return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(Student_Delete): return updateObject(state, {deleteDialog: false})
        case actions.DIALOG_OPEN(Student): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Student): return newState.closeDialog(state)
        default: return state;
    }
}

export default reducer