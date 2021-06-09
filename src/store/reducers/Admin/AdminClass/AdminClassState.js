
import {AdminInsertRoomClass as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../../__StateGlobal/AdminTableState";
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {RoomShiftClass} from "../../../utils/Specify";
const newState = new state()

const transforms = (items) => items.map((item) =>
    insert(item.roomShift.room.roomName, item.roomShift.grade, item.roomShift.section, item.subject.subjectName,
        "To be insert", item.day, item.startTime, item.endTime, item.roomShift.room.id+item.id+item.subject.subjectCode,item.id))


const reducer = (state = newState.init_state, action) =>{
    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(RoomShiftClass): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(RoomShiftClass): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(RoomShiftClass): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(RoomShiftClass): return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(RoomShiftClass): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(RoomShiftClass): return newState.searchChange(state,action)

        case actions.DIALOG_OPEN(RoomShiftClass): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(RoomShiftClass): return newState.closeDialog(state)
        default: return state;
    }
}

export default reducer
