/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from '../../__StateGlobal/AdminTableDialogState'
import {updateObject} from '../../../utils/UpdateObject'
import * as actions from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import {Student} from '../../../utils/Specify'
const newState = new state()

const reducer = (state = newState.init_state, action) =>{
    switch(action.type){
        case actions.ADMIN_DIALOG_ID_CHANGE(Student): return updateObject(state, {id: action.value})
        case actions.ADMIN_DIALOG_REGISTER(Student): return newState.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(Student): return newState.failRegister(state, action)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(Student): return newState.successRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Student): return newState.handleClose(state,action)
        default: return state;
    }
}

export  default reducer