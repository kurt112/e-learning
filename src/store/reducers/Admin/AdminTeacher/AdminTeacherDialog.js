import * as actions from '../../../ActionType/Admin/__ActionTypeGlobal/AdminDialog'
import {updateObject} from '../../../utils/UpdateObject'
import state from '../__StateGlobal/AdminTableDialog'
import {Teacher} from '../../../utils/Specify'
const newSTate = new state();

const reducer = (state=newSTate.init_state, action)=>{
    switch(action.type){
        case actions.ADMIN_DIALOG_ID_CHANGE(Teacher): return updateObject(state, {id: action.value})
        case actions.ADMIN_DIALOG_REGISTER(Teacher): return newSTate.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(Teacher): return newSTate.failRegister(state, action)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(Teacher): return newSTate.successRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Teacher): return newSTate.handleClose(state,action)
        default: return state;
    }

}
export default reducer