/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from '../__StateGlobal/UserForm'
import * as userAction from '../../ActionType/__ActionTypeGlobal/UserRegisterActionType'
import {Student, Teacher} from "../../utils/Specify";
import {
    SET_ERROR_BIRTHDATE_EMPTY,
    SET_ERROR_EMAIL_ALREADY_EXIST,
    SET_ERROR_EMAIL_EMPTY,
    SET_ERROR_EMAIL_INVALID,
    SET_ERROR_FIRST_NAME_EMPTY, SET_ERROR_ID_EMPTY,
    SET_ERROR_LAST_NAME_EMPTY,
    SET_ERROR_PASSWORD_EMPTY,
    SET_ERROR_PASSWORD_NOT_MATCH,
    SET_ERROR_PASSWORD_STRENGTH,
    SET_ERROR_RETYPE_PASSWORD_EMPTY
} from "../../ActionType/__ActionTypeGlobal/ValidationActionType";
const userState = new state();

const initState = {
    ...userState.init_state
}

const reducer =(state = initState, action) => {
    switch (action.type){
        case userAction.CHANGE_EMAIL(Teacher): return userState.changeEmail(state, action.data)
        case userAction.CHANGE_FIRST_NAME(Teacher): return userState.changeFirstName(state, action.data)
        case userAction.CHANGE_LAST_NAME(Teacher): return userState.changeLastName(state, action.data)
        case userAction.CHANGE_MIDDLE_NAME(Teacher): return userState.changeMiddleName(state,action.data)
        case userAction.CHANGE_SUFFIX(Teacher): return userState.changeSuffix(state,action.data)
        case userAction.CHANGE_PASSWORD(Teacher): return userState.changePassword(state,action.data)
        case userAction.CHANGE_RETYPE_PASSWORD(Teacher): return userState.changeReTypePassword(state,action.data)
        case userAction.CHANGE_BIRTHDATE(Teacher): return userState.changeBirthDate(state,action.data)
        case userAction.CHANGE_GENDER(Teacher): return userState.changeGender(state,action.data)
        case userAction.CHANGE_ROLE(Teacher): return userState.changeRole(state, action.data)
        case userAction.CHANGE_ID(Teacher): return userState.changeId(state,action.data)

        // for registering the user
        case userAction.INIT_REGISTER(Teacher): return state;
        case userAction.SUCCESS_REGISTER(Teacher):return userState.resetForm(state)

        // for error handler
        case SET_ERROR_EMAIL_EMPTY(Teacher): return userState.emailEmptyErrorHandler(state)
        case SET_ERROR_FIRST_NAME_EMPTY(Teacher): return userState.firstNameEmptyErrorHandler(state)
        case SET_ERROR_LAST_NAME_EMPTY(Teacher): return userState.lastNameEmptyErrorHandler(state)
        case SET_ERROR_PASSWORD_EMPTY(Teacher): return userState.passwordEmptyErrorHandler(state)
        case SET_ERROR_RETYPE_PASSWORD_EMPTY(Teacher): return userState.reTypePasswordEmptyErrorHandler(state)
        case SET_ERROR_PASSWORD_NOT_MATCH(Teacher): return userState.passwordNotMatchErrorHandler(state)
        case SET_ERROR_EMAIL_INVALID(Teacher): return userState.emailInvalidErrorHandler(state)
        case SET_ERROR_BIRTHDATE_EMPTY(Teacher): return userState.birthDateErrorHandler(state)
        case SET_ERROR_PASSWORD_STRENGTH(Teacher): return userState.passwordStrengthErrorHandler(state)
        case SET_ERROR_EMAIL_ALREADY_EXIST(Teacher): return userState.emailAlreadyExist(state)
        case SET_ERROR_ID_EMPTY(Teacher): return userState.IdAlreadyExist(state)

        default: return state;
    }
}

export default reducer