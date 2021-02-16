import * as dialogActions from '../../../ActionType/Admin/SubjectDialog'
import * as actions from '../../../ActionType/Admin/__ActionTypeGlobal/AdminDialog'
import {updateObject} from '../../../utils/UpdateObject'
import state from '../__StateGlobal/AdminTableDialog'
import {Subject} from "../../../utils/Specify";

const newState = new state()

delete newState.init_state.id

const init_state = {
    subjectCode: '',
    subjectName: '',
    subjectMajor: 'Minor',
    status: 'Active',
    ...newState.init_state
}

const reducer = (state=init_state, action)=>{
    switch(action.type){
        case actions.ADMIN_DIALOG_REGISTER(Subject): return newState.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(Subject): return newState.failRegister(state, action)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(Subject): return newState.successRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Subject): return newState.handleClose(state,action)


        case dialogActions.CHANGE_SUBJECT_NAME: return updateObject(state, {subjectName:action.value})
        case dialogActions.CHANGE_SUBJECT_CODE: return updateObject(state,{subjectCode:action.value})
        case dialogActions.CHANGE_SUBJECT_MAJOR: return updateObject(state, {subjectMajor: action.value})

        default: return state;
    }
}

export default reducer