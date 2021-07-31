/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from '../../__StateGlobal/AdminTableDialogState'
import * as globalActionDialog from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import {updateObject} from "../../../utils/UpdateObject";
import {RoomShift_Delete} from "../../../utils/Specify";
import {setErrorEmptyId} from "../../../action/__ActionGlobal/ValidationAction";
import {SET_ERROR_ID_EMPTY} from "../../../ActionType/__ActionTypeGlobal/ValidationActionType";

const newState = new state();


const init_state = {
    ...newState.init_state
}

const changeId = (state,value) => {
    return updateObject(state, {
        id: value,
        errorId: false,
        errorMessageId: '',
        showMessage: false,
        error:false
    })
}


const reducer = (state = init_state, action) => {

    switch (action.type) {

        case globalActionDialog.ADMIN_DIALOG_REGISTER(RoomShift_Delete):
            return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(RoomShift_Delete):
            return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(RoomShift_Delete):
            return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(RoomShift_Delete):
            return newState.handleClose(state, action)
        case globalActionDialog.ADMIN_DIALOG_ID_CHANGE(RoomShift_Delete): return changeId(state,action.value)

        // error Handler
        case SET_ERROR_ID_EMPTY(RoomShift_Delete):
            return newState.emptyIdErrorHandler(state)
        default:
            return state;
    }

}

export default reducer