/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {AdminInsertRoomClass as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../../__StateGlobal/AdminTableState";
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {
    RoomShiftClass,
    RoomShiftClass_Delete,
    RoomShiftClass_Find
} from "../../../utils/Specify";
import {updateObject} from "../../../utils/UpdateObject";
import {format24Hour} from "../../../../components/ui/utils/dateFormat/TimeConverter";
const newState = new state()

const transforms = (items) => items.map((item) =>{
    const teacher = item.teacher === null? 'TBA': `${item.teacher.user.firstName} ${item.teacher.user.lastName}`
    const day = item.day === null ? 'TBA': item.day
    const timeStart = item.startTime === null? 'TBA': format24Hour(item.startTime)
    const timeEnd = item.endTime === null? 'TBA': format24Hour(item.endTime)

    return insert(item.id,item.roomShift.room.roomName, item.roomShift.grade, item.roomShift.section, item.subject.subjectName,
        teacher, day, timeStart, timeEnd, item.id,item.id)
})


const currentState = {
    ...newState.init_state,
    deleteDialog: false,
    findDialog: false
}

const reducer = (state = currentState, action) =>{
    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(RoomShiftClass): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(RoomShiftClass): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(RoomShiftClass): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(RoomShiftClass): return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(RoomShiftClass): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(RoomShiftClass): return newState.searchChange(state,action)

        // for opening and closing dialog
        case actions.DIALOG_OPEN(RoomShiftClass): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(RoomShiftClass): return newState.closeDialog(state)

        case actions.DIALOG_OPEN(RoomShiftClass_Delete): return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(RoomShiftClass_Delete): return updateObject(state, {deleteDialog: false})

        case actions.DIALOG_OPEN(RoomShiftClass_Find): return updateObject(state, {findDialog: true})
        case actions.DIALOG_CLOSE(RoomShiftClass_Find): return updateObject(state, {findDialog: false})


        default: return state;
    }
}

export default reducer
