import state from "../../__StateGlobal/AdminTableState";
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {Room, Room_Delete} from "../../../utils/Specify";
import {AdminInsertRoom as insert} from "../../../../components/ui/utils/tableColumn";

const newState = new state()

const currentState = {
    ...newState.init_state,
    deleteDialog: false
}



const transforms = (items) => items.map((item) =>
    insert(item.roomName, item.timeStart, item.timeEnd, item.id))

const reducer = (state = currentState, action)=>{

    switch(action.type){

        // for room table
        case actions.ADMIN_TABLE_SETTINGS_INIT(Room): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Room): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Room): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Room): return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Room): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Room): return newState.searchChange(state,action)


        // for room create dialog actions
        case actions.DIALOG_OPEN(Room): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Room): return newState.closeDialog(state)
        // case actions.ADMIN_DIALOG_TABLE_REGISTER(Room):return newState.AddTable(state, responseData(action.item))

        // from room delete dialog actinos
        case actions.DIALOG_OPEN(Room_Delete): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Room_Delete): return newState.closeDialog(state)
        // case actions.ADMIN_DIALOG_TABLE_REGISTER(Room_Delete):return newState.AddTable(state, responseData(action.item))
        default: return state;
    }
}

export default reducer