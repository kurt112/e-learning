/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from "../../../ActionType/__ActionTypeGlobal/DialogActionType";
import {RoomShift} from "../../../utils/Specify";
import * as roomShiftAction from "../../../ActionType/Admin/RoomShift/RoomShiftDialogActionType";
import {updateObject} from "../../../utils/UpdateObject";
import State from "../../__StateGlobal/AdminTableDialogState"

const newState = new State()

delete newState.init_state.id


const init_state ={
    room: '',
    roomShift: '',
    grade: '',
    section: '',
    timeStart: '',
    timeEnd: '',
    teacherID:'',
    curriculumCode: '',
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
        case roomShiftAction.ROOMSHIFT_DIALOG_ADVISER_CHANGE: return updateObject(state, {teacherID: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_CURRICULUM_CHANGE: return updateObject(state, {curriculumCode: action.data})


        default: return state;
    }
}

export default reducer