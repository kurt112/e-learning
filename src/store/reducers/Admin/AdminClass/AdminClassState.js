
import {AdminInsertRoomClass as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../../__StateGlobal/AdminTableState";
import * as actions from "../../../ActionType/__ActionTypeGlobal/AdminTableActionType";
import {Class} from "../../../utils/Specify";
const newState = new state()

const transforms = (items) => items.map((item) =>
    insert(item.roomShift.room.roomName, item.roomShift.grade, item.roomShift.section, item.subject.subjectName,
        "To be insert" + ' ' + "To be insert", item.day, item.startTime, item.endTime, item.roomShift.room.id+item.id+item.subject.subjectCode))

const response = (item) => {
    return insert(item.roomShift.room.roomName, item.roomShift.grade, item.roomShift.section, item.subject.subjectName,
        "To be insert" + ' ' + "To be insert", item.day, item.startTime, item.endTime, item.roomShift.room.id+item.id+item.subject.subjectCode)}

const reducer = (state = newState.init_state, action) =>{
    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(Class): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Class): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Class): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Class): return newState.failData(state)
        case actions.ADMIN_TABLE_DIALOG_OPEN(Class): return newState.openDialog(state)
        case actions.ADMIN_TABLE_DIALOG_CLOSE(Class): return newState.closeDialog(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Class): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Class): return newState.searchChange(state,action)
        case actions.ADMIN_DIALOG_TABLE_REGISTER(Class): return newState.AddTable(state, response(action.item))
        default: return state;
    }
}

export default reducer
