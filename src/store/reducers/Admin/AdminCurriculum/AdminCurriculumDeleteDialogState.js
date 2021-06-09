import state from '../../__StateGlobal/AdminTableDialogState'
import * as globalActionDialog from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import {updateObject} from "../../../utils/UpdateObject";
import {Curriculum_Delete} from "../../../utils/Specify";

const newState = new state();


const init_state = {
    ...newState.init_state
}
const reducer = (state = init_state, action) => {

    switch (action.type) {

        case globalActionDialog.ADMIN_DIALOG_REGISTER(Curriculum_Delete):
            return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(Curriculum_Delete):
            return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(Curriculum_Delete):
            return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Curriculum_Delete):
            return newState.handleClose(state, action)
        case globalActionDialog.ADMIN_DIALOG_ID_CHANGE(Curriculum_Delete): return updateObject(state, {id: action.value})
        default:
            return state;
    }

}

export default reducer