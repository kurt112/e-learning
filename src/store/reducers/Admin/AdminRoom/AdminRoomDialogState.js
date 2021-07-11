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
    ...newState.init_state,

}

const setState = (state, action) => {

    state = updateObject(state, {roomName: action.roomName})
    state = updateObject(state, {timeEnd: action.timeEnd})
    state = updateObject(state, {timeStart: action.timeStart})
    state = updateObject(state, {id: action.id})

    return state
}

const reInit = (state) => {


    state = updateObject(state, {roomName: ''})
    state = updateObject(state, {timeEnd: ''})
    state = updateObject(state, {timeStart: ''})
    state = updateObject(state, {id: ''})

    delete state.id

    return state
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