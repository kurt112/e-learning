/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from '../../__StateGlobal/AdminTableDialogState'
import * as actionClass from '../../../ActionType/Admin/RoomShiftClass/RoomShiftClassDialogActionType'
import * as globalActionDialog from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import {RoomShiftClass} from '../../../utils/Specify'
import {updateObject} from "../../../utils/UpdateObject";
import * as actions from "../../../ActionType/__ActionTypeGlobal/DialogActionType";

const newState = new state();

delete newState.init_state.id

const init_state = {
    shift: '',
    subject: '',
    teacher: '',
    day: 'MWF',
    timeStart: '',
    timeEnd: '',

    // error
    shiftError: false,
    subjectError: false,
    teacherError:false,


    // error message
    shiftErrorMessage:'',


    ...newState.init_state
}


const setState = (state, action) => {


    state.id = action.id
    state = updateObject(state, {shift: action.roomShift})
    state = updateObject(state, {subject: action.subject})
    state = updateObject(state, {teacher: action.teacher})
    state = updateObject(state, {day: action.day})
    state = updateObject(state, {timeStart: action.startTime})
    state = updateObject(state, {timeEnd: action.endTime})

    state = updateObject(state, {done: false})

    return state
}

const reInit = (state) => {

    state = updateObject(state, {shift: ''})
    state = updateObject(state, {subject: ''})
    state = updateObject(state, {teacher: ''})
    state = updateObject(state, {day: 'MWF'})
    state = updateObject(state, {timeStart: ''})
    state = updateObject(state, {timeEnd: ''})

    delete state.id
    return state
}


const reducer = (state=init_state, action) => {

    switch (action.type){
        case globalActionDialog.ADMIN_DIALOG_REGISTER(RoomShiftClass): return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(RoomShiftClass): return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(RoomShiftClass): return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(RoomShiftClass): return newState.handleClose(state,action)

        case actionClass.CHANGE_ROOMCLASS_DAY: return updateObject(state, {day: action.data})
        case actionClass.CHANGE_ROOMCLASS_ROOMSHIFT_ID: return updateObject(state, {shift: action.data})
        case actionClass.CHANGE_ROOMCLASS_SUBJECT_ID: return updateObject(state, {subject: action.data})
        case actionClass.CHANGE_ROOMCLASS_TEACHERID: return updateObject(state, {teacher: action.data})
        case actionClass.CHANGE_ROOMCLASS_TIMEEND: return updateObject(state, {timeEnd: action.data})
        case actionClass.CHANGE_ROOMCLASS_TIMESTART: return updateObject(state, {timeStart: action.data})

        case actions.RE_INIT(RoomShiftClass): return reInit(state)
        case actions.SET_DATA(RoomShiftClass): return setState(state, action.data)

        default: return state;
    }

}

export default  reducer