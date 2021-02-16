
import {AdminInsertActivity as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../__StateGlobal/AdminTable";
import * as actions from "../../../ActionType/Admin/__ActionTypeGlobal/AdminTable";
import {Activity} from "../../../utils/Specify";
const newState = new state()

const transforms = (items) => items.map((item) =>
    insert(item.roomShift.room.roomName, item.roomShift.grade, item.roomShift.section, item.subject.subjectName,
        item.teacher.user.lastName + ' ' + item.teacher.user.firstName, item.day, item.startTime, item.endTime, item.roomShift.room.id+item.id+item.subject.subjectCode))
// {  activityTitle, subjectName, grade, section, link, action }
const response = (item) => insert(item.activityTitle)//item.,item.,item.,item.link,item.)}

const reducer = (state = newState.init_state, action) =>{
    switch(action.type){
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
