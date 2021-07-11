/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from '../../__StateGlobal/AdminTableDialogState'
import * as globalActionDialog from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import {updateObject} from "../../../utils/UpdateObject";
import {Student_Delete} from "../../../utils/Specify";

const newState = new state();


const init_state = {
    ...newState.init_state
}
const reducer = (state = init_state, action) => {

    switch (action.type) {

        case globalActionDialog.ADMIN_DIALOG_REGISTER(Student_Delete):
            return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(Student_Delete):
            return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(Student_Delete):
            return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Student_Delete):
            return newState.handleClose(state, action)
        case globalActionDialog.ADMIN_DIALOG_ID_CHANGE(Student_Delete): return updateObject(state, {id: action.value})
        default:
            return state;
    }

}

export default reducer