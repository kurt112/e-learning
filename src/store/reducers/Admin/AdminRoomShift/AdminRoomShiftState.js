
import {AdminInsertRoomShift as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../../__StateGlobal/AdminTableState";
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import * as roomShiftListAction from "../../../ActionType/Admin/RoomShift/RoomShiftListActionType"
import {RoomShift} from "../../../utils/Specify";
import {updateObject} from "../../../utils/UpdateObject";

const newState = new state()
const transforms = (items) => {
    console.log("DId i asdd")
    console.log(items)
    return items.map((item) =>
        insert(item.room.roomName, item.roomShiftName, item.grade, item.section, item.timeStart,item.timeEnd,item.id))

}


const initState = {
    ...newState.init_state,
    addStudentDialog: false,

}

const reducer = (state = initState, action) =>{
    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(RoomShift): return newState.apiSettingsInit(state, action)
        case actions.ADMIN_TABLE_INIT(RoomShift): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(RoomShift): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(RoomShift): return newState.failData(state)
        case actions.DIALOG_OPEN(RoomShift): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(RoomShift): return newState.closeDialog(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(RoomShift): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(RoomShift): return newState.searchChange(state,action)

        // Adding Student in Room Shift List
        case roomShiftListAction.ADD_STUDENT_DIALOG_CLOSE: return updateObject(state, {addStudentDialog:false})
        case roomShiftListAction.ADD_STUDENT_DIALOG_OPEN: return updateObject(state, {addStudentDialog: true})
        default: return state;
    }
}

export default reducer
