/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/

import {AdminInsertRoomShift as insert} from "../../../../components/ui/utils/tableColumn"
import state from "../../__StateGlobal/AdminTableState"
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType"
import {RoomShift, RoomShift_Delete, RoomShift_Find} from "../../../utils/Specify"
import {updateObject} from "../../../utils/UpdateObject"
import {format24Hour} from "../../../../components/ui/utils/dateFormat/TimeConverter";

const newState = new state()



const transforms = (items) => items.map((item) =>{
    const teacher = item.teacher === null? 'TBA': `${item.teacher.user.firstName} ${item.teacher.user.lastName}`
    const curriculum = item.curriculum === null? 'TBA': item.curriculum.name

    return insert(item.id,item.room.roomName, item.roomShiftName, item.grade, item.section,curriculum,teacher, format24Hour(item.timeStart),format24Hour(item.timeEnd),item.id,item.status)
})

const initState = {
    ...newState.init_state,
    findDialog: false,
    deleteDialog: false
}

const reducer = (state = initState, action) =>{
    switch(action.type){
        // for table state
        case actions.ADMIN_TABLE_SETTINGS_INIT(RoomShift): return newState.apiSettingsInit(state, action)
        case actions.ADMIN_TABLE_INIT(RoomShift): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(RoomShift): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(RoomShift): return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(RoomShift): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(RoomShift): return newState.searchChange(state,action)
        case actions.ADMIN_CHANGE_STATUS(RoomShift):return newState.changeStatus(state,action)
        // Adding Student in Room Shift List
        case actions.DIALOG_OPEN(RoomShift_Find): return updateObject(state, {findDialog: true})
        case actions.DIALOG_CLOSE(RoomShift_Find): return updateObject(state, {findDialog: false})


        // for opening and closing dialog
        case actions.DIALOG_OPEN(RoomShift): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(RoomShift): return newState.closeDialog(state)

        case actions.DIALOG_OPEN(RoomShift_Delete): return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(RoomShift_Delete): return updateObject(state, {deleteDialog: false})

        default: return state;
    }
}

export default reducer
