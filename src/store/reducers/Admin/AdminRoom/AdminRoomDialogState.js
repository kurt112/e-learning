/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from '../../__StateGlobal/AdminTableDialogState'
import * as actions from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import * as roomAction from '../../../ActionType/Admin/Room/RoomDialogActionType'
import {Room} from '../../../utils/Specify'
import {updateObject} from "../../../utils/UpdateObject";

const newState = new state();

delete newState.init_state.id

const init_state = {
    roomName: '',
    timeStart: '',
    timeEnd: '',

    // Error
    roomNameError: '',

    // Error Message
    roomNameErrorMessage: '',

    ...newState.init_state,

}

const setState = (state, action) => {

    return updateObject(state, {
        id: action.id,
        timeStart: action.timeStart,
        roomName: action.roomName,
        timeEnd: action.timeEnd

    })
}

const reInit = (state) => {

    delete state.id

    return updateObject(state, {
        id: '',
        timeStart: '',
        timeEnd: '',
        roomName: ''
    })
}


const reducer = (state = init_state, action) => {

    switch (action.type) {
        case actions.ADMIN_DIALOG_REGISTER(Room):
            return newState.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(Room):
            return newState.failRegister(state, action)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(Room):
            return newState.successRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Room):
            return newState.handleClose(state, action)

        case roomAction.ROOM_DIALOG_ROOMNAME_CHANGE:
            return updateObject(state, {roomName: action.data})
        case roomAction.ROOM_DIALOG_TIMESTART_CHANGE:
            return updateObject(state, {timeStart: action.data})
        case roomAction.ROOM_DIALOG_TIMEEND_CHANGE:
            return updateObject(state, {timeEnd: action.data})


        case actions.SET_DATA(Room):
            return setState(state, action.data)

        case actions.RE_INIT(Room): return reInit(state)

        default:
            return state;
    }

}

export default reducer