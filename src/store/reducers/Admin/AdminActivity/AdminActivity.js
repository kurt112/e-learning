
import {AdminInsertActivity as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../__StateGlobal/AdminTable";
import * as actions from "../../../ActionType/Admin/__ActionTypeGlobal/AdminTable";
import {Activity} from "../../../utils/Specify";
const newState = new state()

const transforms = (items) => items.map((item) =>
    insert(item.activity.activityTitle,item.classes.subject.subjectName,item.classes.roomShift.grade, item.classes.roomShift.section,item.activity.date_end,item.activity.id, item.activity.link)) //item.activity.status

const response = (item) => insert(item.activity.activityTitle,item.classes.subject.subjectName,item.classes.roomShift.grade, item.classes.roomShift.section,item.activity.date_end,item.activity.id, item.activity.link) //item.activity.status

const reducer = (state = newState.init_state, action) =>{
    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(Activity): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Activity): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Activity): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Activity): return newState.failData(state)
        case actions.ADMIN_TABLE_DIALOG_OPEN(Activity): return newState.openDialog(state)
        case actions.ADMIN_TABLE_DIALOG_CLOSE(Activity): return newState.closeDialog(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Activity): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Activity): return newState.searchChange(state,action)
        case actions.ADMIN_DIALOG_TABLE_REGISTER(Activity): return newState.AddTable(state, response(action.item))
        default: return state;
    }
}

export default reducer
