/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 17/08/2021, Tuesday
 **/
import state from '../../__StateGlobal/AdminTableDialogState'
import {updateObject} from '../../../utils/UpdateObject'
import * as actions from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import {
    SET_ERROR_ID_EMPTY,
    SET_ERROR_EMAIL_INVALID,
    SET_ERROR_EMAIL_ALREADY_EXIST
} from "../../../ActionType/__ActionTypeGlobal/ValidationActionType";
import {Admin_Create} from "../../../utils/Specify";

const newState = new state()

const successRegister = (state) => {
    state = updateObject(state, {id: ''})
    return newState.successRegister(state)
}


const reducer = (state = newState.init_state, action) => {
    switch (action.type) {
        case actions.ADMIN_DIALOG_ID_CHANGE(Admin_Create):
            return newState.changeId(state, action.value)
        case actions.ADMIN_DIALOG_REGISTER(Admin_Create):
            return newState.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(Admin_Create):
            return newState.failRegister(state, action)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(Admin_Create):
            return successRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Admin_Create):
            return newState.handleClose(state, action)

        // error Handler
        case SET_ERROR_ID_EMPTY(Admin_Create):
            return newState.emptyIdErrorHandler(state)

        case SET_ERROR_EMAIL_INVALID(Admin_Create):
            return updateObject(state, {
                loading: false,
                errorId:true,
                errorMessageId: 'Invalid Email Address'
            })

        case SET_ERROR_EMAIL_ALREADY_EXIST(Admin_Create):
            return updateObject(state, {
                loading: false,
                errorId:true,
                errorMessageId: 'Email Already Exist'
            })
        default:
            return state;
    }
}

export default reducer