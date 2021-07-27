/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import state from '../../__StateGlobal/AdminTableDialogState'
import {Teacher} from '../../../utils/Specify'
import * as globalActionDialog from "../../../ActionType/__ActionTypeGlobal/DialogActionType";
const newState = new state();

const reducer = (state=newState.init_state, action)=>{
    switch(action.type){
        case actions.ADMIN_DIALOG_ID_CHANGE(Teacher): return newState.changeId(state,action.value)
        case actions.ADMIN_DIALOG_REGISTER(Teacher): return newState.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(Teacher): return newState.failRegister(state, action)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(Teacher): return newState.successRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Teacher): return newState.handleClose(state,action)

        // error Handler
        case globalActionDialog.SET_ERROR_EMPTY_ID(Teacher):
            return newState.emptyIdErrorHandler(state)
        default: return state;
    }

}
export default reducer