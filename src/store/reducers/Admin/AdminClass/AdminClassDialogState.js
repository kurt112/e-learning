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
import {
    SET_ERROR_ROOM_SHIFT_EMPTY,
    SET_ERROR_SUBJECT_EMPTY
} from "../../../ActionType/__ActionTypeGlobal/ValidationActionType";

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

    // error message
    shiftErrorMessage:'',
    subjectErrorMessage: '',


    ...newState.init_state
}


const setState = (state, action) => {

    return updateObject(state, {
        id: action.id,
        done: false,
        timeEnd: action.endTime,
        timeStart: action.startTime,
        day: action.day,
        teacher: action.teacher,
        subject: action.subject,
        shift: action.roomShift
    })
}

const reInit = (state) => {
    delete state.id
    return updateObject(state, {
        timeEnd: '',
        timeStart: '',
        day: 'MWF',
        teacher: '',
        subject: '',
        shift: ''
    })
}

const roomShiftErrorHandler = (state) => {
    return updateObject(state,{
        shiftError: true,
        shiftErrorMessage:'Please Insert Room Shift',
        loading:false,
        done: true
    })
}

const subjectErrorHandler = (state) => {
    return updateObject(state, {
        subjectError: true,
        subjectErrorMessage: 'Please Insert Subject',
        loading:false,
        done: true
    })
}

const subjectChange = (state,data) => {
    return updateObject(state, {
        subject:data,
        subjectError: false,
        subjectErrorMessage: ''
    })
}

const roomShiftChange = (state,data) => {
    return updateObject(state, {
        shift:data,
        shiftError: false,
        shiftErrorMessage:''
    })
}


const reducer = (state=init_state, action) => {

    switch (action.type){
        case globalActionDialog.ADMIN_DIALOG_REGISTER(RoomShiftClass): return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(RoomShiftClass): return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(RoomShiftClass): return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(RoomShiftClass): return newState.handleClose(state,action)

        case actionClass.CHANGE_ROOMCLASS_DAY: return updateObject(state, {day: action.data})
        case actionClass.CHANGE_ROOMCLASS_ROOMSHIFT_ID: return roomShiftChange(state,action.data)
        case actionClass.CHANGE_ROOMCLASS_SUBJECT_ID: return subjectChange(state,action.data)
        case actionClass.CHANGE_ROOMCLASS_TEACHERID: return updateObject(state, {teacher: action.data})
        case actionClass.CHANGE_ROOMCLASS_TIMEEND: return updateObject(state, {timeEnd: action.data})
        case actionClass.CHANGE_ROOMCLASS_TIMESTART: return updateObject(state, {timeStart: action.data})

        //error handler
        case SET_ERROR_ROOM_SHIFT_EMPTY(RoomShiftClass): return roomShiftErrorHandler(state)
        case SET_ERROR_SUBJECT_EMPTY(RoomShiftClass): return subjectErrorHandler(state)

        case actions.RE_INIT(RoomShiftClass): return reInit(state)
        case actions.SET_DATA(RoomShiftClass): return setState(state, action.data)

        default: return state;
    }

}

export default  reducer