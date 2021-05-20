import state from '../../../__StateGlobal/AdminTableDialogState'
import * as uploadResource from '../../../../ActionType/Teacher/TeacherResource/TeacherResourceActionType'
import {updateObject} from "../../../../utils/UpdateObject";
import * as dialogAction from '../../../../ActionType/__ActionTypeGlobal/AdminDialogActionType'
import {Teacher_Resource_Upload} from "../../../../utils/Specify";

const newState = new state();

delete newState.init_state.id

const init_state = {
    name: '',
    type: 'Lecture',
    description: '',
    file: '',
    ...newState.init_state
}

const success = (state) => {
    state = updateObject(state, reset(state))
    return newState.successRegister(state)
}

const closing = (state) => {
    state = updateObject(state, reset(state))
    return newState.handleClose(state)
}

const reset = (state) =>{
    state = updateObject(state,{name: ''})
    state = updateObject(state, {description: ''})
    state = updateObject(state, {file: ''})
    return state
}

const reducer = (state = init_state, action) => {

    switch (action.type) {

        // data in dialog
        case uploadResource.CHANGE_NAME:
            return updateObject(state, {name: action.data})
        case uploadResource.CHANGE_TYPE:
            return updateObject(state, {type: action.data})
        case uploadResource.CHANGE_FILE:
            return updateObject(state, {file: action.data})
        case uploadResource.CHANGE_DESCRIPTION:
            return updateObject(state, {description: action.data})

        // action for dialog

        case dialogAction.ADMIN_DIALOG_REGISTER(Teacher_Resource_Upload): return newState.initRegister(state)
        case dialogAction.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Teacher_Resource_Upload):  return closing(state)
        case dialogAction.ADMIN_DIALOG_REGISTER_FAIL(Teacher_Resource_Upload): return newState.failRegister(state,action)
        case dialogAction.ADMIN_DIALOG_REGISTER_SUCCESS(Teacher_Resource_Upload): return success(state)

        default: return state;
    }

}

export default reducer