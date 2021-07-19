/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from "../../__StateGlobal/AdminTableState"
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType"
import {Room, Room_Delete, Room_Update} from "../../../utils/Specify"
import {AdminInsertRoom as insert} from "../../../../components/ui/utils/tableColumn"
import {updateObject} from "../../../utils/UpdateObject"
import {format24Hour} from "../../../../components/ui/utils/dateFormat/TimeConverter";

const newState = new state()

const currentState = {
    ...newState.init_state,
    deleteDialog: false,
    updateDialog: false
}

const transforms = (items) => items.map((item) =>{
    return insert(item.id, item.roomName, format24Hour(item.timeStart), format24Hour(item.timeEnd), item.id)
})


const reducer = (state = currentState, action) => {

    switch (action.type) {

        // for room table
        case actions.ADMIN_TABLE_SETTINGS_INIT(Room):
            return newState.apiSettingsInit(state, action)
        case actions.ADMIN_TABLE_INIT(Room):
            return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Room):
            return newState.successData(state, action, transforms)
        case actions.ADMIN_TABLE_FAIL(Room):
            return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Room):
            return newState.nextData(state, action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Room):
            return newState.searchChange(state, action)


        // for room create dialog actions
        case actions.DIALOG_OPEN(Room):
            return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Room):
            return newState.closeDialog(state)

        // from room delete dialog actions
        case actions.DIALOG_OPEN(Room_Delete):
            return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(Room_Delete):
            return updateObject(state, {deleteDialog: false})

        case actions.DIALOG_OPEN(Room_Update):
            return updateObject(state, {updateDialog: true})
        case actions.DIALOG_CLOSE(Room_Update):
            return updateObject(state, {updateDialog: false})


        default:
            return state;
    }
}

export default reducer