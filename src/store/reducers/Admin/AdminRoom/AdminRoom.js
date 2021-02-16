import state from "../__StateGlobal/AdminTable";
import * as actions from "../../../ActionType/Admin/__ActionTypeGlobal/AdminTable";
import {Room} from "../../../utils/Specify";
import {AdminInsertRoom as insert} from "../../../../components/ui/utils/tableColumn";

const newState = new state()

const transforms = (items) => items.map((item) =>
    insert(item.roomName, item.timeStart, item.timeEnd, item.id))

const responseData = (item) =>{
    return insert(item.roomName,item.timeStart, item.timeEnd, item.id)
}
const reducer = (state = newState.init_state, action)=>{

    switch(action.type){
        case actions.ADMIN_TABLE_SETTINGS_INIT(Room): return newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Room): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Room): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Room): return newState.failData(state)
        case actions.ADMIN_TABLE_DIALOG_OPEN(Room): return newState.openDialog(state)
        case actions.ADMIN_TABLE_DIALOG_CLOSE(Room): return newState.closeDialog(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Room): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Room): return newState.searchChange(state,action)
        case actions.ADMIN_DIALOG_TABLE_REGISTER(Room):return newState.AddTable(state, responseData(action.item))

        default: return state;
    }
}

export default reducer