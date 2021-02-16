import * as actions from "../../../ActionType/Admin/__ActionTypeGlobal/AdminDialog";
import {RoomShift} from "../../../utils/Specify";
import * as roomShiftAction from "../../../ActionType/Admin/RoomShiftDialog";
import {updateObject} from "../../../utils/UpdateObject";
import State from"../__StateGlobal/AdminTableDialog"

const newState = new State()

delete newState.init_state.id


const init_state ={
    room: '',
    roomShift: '',
    grade: '',
    section: '',
    timeStart: '',
    timeEnd: '',
    ...newState.init_state
}

const reducer = (state=init_state, action)=>{
    switch(action.type){
        case actions.ADMIN_DIALOG_REGISTER(RoomShift): return newState.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(RoomShift): return newState.failRegister(state, action)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(RoomShift): return newState.successRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(RoomShift): return newState.handleClose(state,action)

        case roomShiftAction.ROOMSHIFT_DIALOG_ROOM_SET: return updateObject(state, {room: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_TIMEEND_CHANGE: return updateObject(state, {timeEnd: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_TIMESTART_CHANGE:return updateObject(state, {timeStart: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_ROOMGRADE_CHANGE: return updateObject(state, {grade: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_ROOMSHIFT_SET: return updateObject(state, {roomShift: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_ROOMSECTION_CHANGE: return updateObject(state, {section: action.data})


        default: return state;
    }
}

export default reducer