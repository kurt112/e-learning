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
import {
    SET_ERROR_SUBJECT_CODE_EMPTY,
    SET_ERROR_SUBJECT_NAME_EMPTY
} from "../../../ActionType/__ActionTypeGlobal/ValidationActionType";

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
    return updateObject(state, {
        done: false,
        status: action.status,
        subjectMajor: action.subjectMajor,
        subjectName: action.subjectName,
        subjectCode: action.subjectCode
    })
}

const reInit = (state) => {
    delete state.id

    return updateObject(state, {
        status: 'Active',
        subjectMajor: 'Minor',
        subjectName: '',
        subjectCode: ''
    })
}

// change handler
const subjectCodeChange = (state, data) => {
    return updateObject(state, {
        subjectCode: data,
        subjectCodeError: false,
        subjectCodeErrorMessage: '',
    })
}

const subjectNameChange = (state, data) => {
    return updateObject(state, {
        subjectName: data,
        subjectNameError: false,
        subjectNameErrorMessage: '',
    })
}



// error handler
const subjectCodeErrorHandler = (state) => {
    return updateObject(state, {
        subjectCodeError: true,
        subjectCodeErrorMessage: 'Please Insert A Value',
        loading:false,
        done: true
    })
}

const subjectNameErrorHandler = (state) => {
    return updateObject(state, {
        subjectNameError: true,
        subjectNameErrorMessage: 'Please Insert A Value',
        loading:false,
        done: true
    })
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

        case dialogActions.CHANGE_SUBJECT_NAME: return subjectNameChange(state,action.value)
        case dialogActions.CHANGE_SUBJECT_CODE: return subjectCodeChange(state,action.value)
        case dialogActions.CHANGE_SUBJECT_MAJOR: return updateObject(state, {subjectMajor: action.value})

        case actions.RE_INIT(Subject): return reInit(state)
        case actions.SET_DATA(Subject): return setState(state, action.data)

        // validation
        case SET_ERROR_SUBJECT_NAME_EMPTY(Subject): return subjectNameErrorHandler(state)
        case SET_ERROR_SUBJECT_CODE_EMPTY(Subject): return subjectCodeErrorHandler(state)

        default: return state;
    }
}

export default reducer