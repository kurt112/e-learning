/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from '../../../__StateGlobal/AdminTableDialogState'
import * as globalActionDialog from '../../../../ActionType/__ActionTypeGlobal/DialogActionType'
import {Teacher_Resource_Delete} from '../../../../utils/Specify'
import {updateObject} from "../../../../utils/UpdateObject";

const newState = new state();


const init_state = {
    ...newState.init_state
}
const reducer = (state = init_state, action) => {

    switch (action.type) {

        case globalActionDialog.ADMIN_DIALOG_REGISTER(Teacher_Resource_Delete):
            return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(Teacher_Resource_Delete):
            return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(Teacher_Resource_Delete):
            return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Teacher_Resource_Delete):
            return newState.handleClose(state, action)
        case globalActionDialog.ADMIN_DIALOG_ID_CHANGE(Teacher_Resource_Delete): return updateObject(state, {id: action.value})
        default:
            return state;
    }

}

export default reducer