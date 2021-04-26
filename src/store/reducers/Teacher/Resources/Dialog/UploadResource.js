import state from '../../../__StateGlobal/AdminTableDialogState'
import * as globalActionDialog from '../../../../ActionType/__ActionTypeGlobal/AdminDialogActionType'
import {Teacher_Resource} from '../../../../utils/Specify'
import * as actions from '../../../../ActionType/Teacher/TeacherResource/TeacherResourceUploadActionType'
import {updateObject} from "../../../../utils/UpdateObject";
const newState = new state();

delete newState.init_state.id

const init_state = {
    name:'',
    type:'Lecture',
    description:'',
    file: '',
    ...newState.init_state
}
const reducer = (state = init_state, action) => {

    switch (action.type) {

        // data in dilaog
        case actions.CHANGE_NAME: return updateObject(state, {name: action.data})
        case actions.CHANGE_TYPE: return updateObject(state, {type: action.data})
        case actions.CHANGE_FILE: return updateObject(state,{file: action.data})
        case actions.CHANGE_DESCRIPTION: return updateObject(state, {description: action.data})


        // for state in dialog
        case globalActionDialog.ADMIN_DIALOG_REGISTER(Teacher_Resource):  return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(Teacher_Resource):
            return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(Teacher_Resource):
            return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Teacher_Resource):
            return newState.handleClose(state, action)
        default:
            return state;
    }

}

export default reducer