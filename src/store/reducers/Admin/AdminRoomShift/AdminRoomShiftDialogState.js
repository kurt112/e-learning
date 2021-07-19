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
    roomShift: 'First',
    grade: '',
    section: '',
    timeStart: '',
    timeEnd: '',
    teacher:'',
    curriculum: '',
    ...newState.init_state
}


const setState = (state, action) => {

    state = updateObject(state, {id: action.id})
    state = updateObject(state, {room: action.room})
    state = updateObject(state, {roomShift: action.roomShiftName})
    state = updateObject(state, {grade: action.grade})
    state = updateObject(state, {section: action.section})
    state = updateObject(state, {timeStart: action.timeStart})
    state = updateObject(state, {timeEnd: action.timeEnd})
    state = updateObject(state, {teacher: action.teacher})
    state = updateObject(state, {curriculum: action.curriculum})

    console.log(state)

    return state
}

const reInit = (state) => {


    state = updateObject(state, {room: ''})
    state = updateObject(state, {roomShift: ''})
    state = updateObject(state, {grade: ''})
    state = updateObject(state, {section: ''})
    state = updateObject(state, {timeStart: ''})
    state = updateObject(state, {timeEnd: ''})
    state = updateObject(state, {teacher: ''})
    state = updateObject(state, {curriculum: ''})
    return state
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
        case roomShiftAction.ROOMSHIFT_DIALOG_ADVISER_CHANGE: return updateObject(state, {teacher: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_CURRICULUM_CHANGE: return updateObject(state, {curriculum: action.data})

        case actions.RE_INIT(RoomShift): return reInit(state)
        case actions.SET_DATA(RoomShift): return setState(state, action.data)

        default: return state;
    }
}

export default reducer