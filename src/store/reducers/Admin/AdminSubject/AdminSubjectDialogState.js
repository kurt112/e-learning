/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as dialogActions from '../../../ActionType/Admin/Subject/SubjectDialogActionType'
import * as actions from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import {updateObject} from '../../../utils/UpdateObject'
import state from '../../__StateGlobal/AdminTableDialogState'
import {Subject} from "../../../utils/Specify";

const newState = new state()

delete newState.init_state.id

const init_state = {
    subjectCode: '',
    subjectName: '',
    subjectMajor: 'Minor',
    status: 'Active',


    // error
    subjectCodeError: false,
    subjectNameError: false,

    subjectCodeErrorMessage: '',
    subjectNameErrorMessage: '',


    // error Message
    ...newState.init_state
}

const setState = (state, action) => {

    state.id = action.id
    state = updateObject(state, {subjectCode: action.subjectCode})
    state = updateObject(state, {subjectName: action.subjectName})
    state = updateObject(state, {subjectMajor: action.subjectMajor})
    state = updateObject(state, {status: action.status})
    state = updateObject(state, {done: false})

    return state
}

const reInit = (state) => {


    state = updateObject(state, {subjectCode: ''})
    state = updateObject(state, {subjectName: ''})
    state = updateObject(state, {subjectMajor: 'Minor'})
    state = updateObject(state, {status: 'Active'})
    delete state.id

    return state
}

const success= (state) => {
    state = reInit(state)
    return newState.successRegister(state)
}

const reducer = (state=init_state, action)=>{
    switch(action.type){
        case actions.ADMIN_DIALOG_REGISTER(Subject): return newState.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(Subject): return newState.failRegister(state, action, action.customError)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(Subject): return success(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Subject): return newState.handleClose(state,action)


        case dialogActions.CHANGE_SUBJECT_NAME: return updateObject(state, {subjectName:action.value})
        case dialogActions.CHANGE_SUBJECT_CODE: return updateObject(state,{subjectCode:action.value})
        case dialogActions.CHANGE_SUBJECT_MAJOR: return updateObject(state, {subjectMajor: action.value})

        case actions.RE_INIT(Subject): return reInit(state)
        case actions.SET_DATA(Subject): return setState(state, action.data)

        default: return state;
    }
}

export default reducer