
import {AdminInsertRoomShift as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../__StateGlobal/AdminTable";
import * as actions from "../../../ActionType/Admin/__ActionTypeGlobal/AdminTable";
import {RoomShift} from "../../../utils/Specify";

const newState = new state()
const transforms = (items) => items.map((item) =>
    insert(item.room.roomName, item.roomShiftName, item.grade, item.section, item.timeStart,item.timeEnd,item.id))

const response = (item) => {
    return  insert(item.room.roomName, item.roomShiftName, item.grade, item.section, item.timeStart,item.timeEnd,item.id)
}

const reducer = (state = newState.init_state, action) =>{
    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(RoomShift): return newState.apiSettingsInit(state, action)
        case actions.ADMIN_TABLE_INIT(RoomShift): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(RoomShift): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(RoomShift): return newState.failData(state)
        case actions.ADMIN_TABLE_DIALOG_OPEN(RoomShift): return newState.openDialog(state)
        case actions.ADMIN_TABLE_DIALOG_CLOSE(RoomShift): return newState.closeDialog(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(RoomShift): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(RoomShift): return newState.searchChange(state,action)
        case actions.ADMIN_DIALOG_TABLE_REGISTER(RoomShift): return newState.AddTable(state, response(action.item))
        default: return state;
    }
}

export default reducer
