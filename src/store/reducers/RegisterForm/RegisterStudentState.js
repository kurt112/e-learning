/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from '../__StateGlobal/UserForm'
import * as userAction from '../../ActionType/__ActionTypeGlobal/UserRegisterActionType'
import {Student} from "../../utils/Specify";
import {
    SET_ERROR_BIRTHDATE_EMPTY, SET_ERROR_EMAIL_ALREADY_EXIST,
    SET_ERROR_EMAIL_EMPTY,
    SET_ERROR_EMAIL_INVALID,
    SET_ERROR_FIRST_NAME_EMPTY,
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
        case userAction.CHANGE_EMAIL(Student): return userState.changeEmail(state, action.data)
        case userAction.CHANGE_FIRST_NAME(Student): return userState.changeFirstName(state, action.data)
        case userAction.CHANGE_LAST_NAME(Student): return userState.changeLastName(state, action.data)
        case userAction.CHANGE_MIDDLE_NAME(Student): return userState.changeMiddleName(state,action.data)
        case userAction.CHANGE_SUFFIX(Student): return userState.changeSuffix(state,action.data)
        case userAction.CHANGE_PASSWORD(Student): return userState.changePassword(state,action.data)
        case userAction.CHANGE_RETYPE_PASSWORD(Student): return userState.changeReTypePassword(state,action.data)
        case userAction.CHANGE_BIRTHDATE(Student): return userState.changeBirthDate(state,action.data)
        case userAction.CHANGE_GENDER(Student): return userState.changeGender(state,action.data)
        case userAction.CHANGE_ROLE(Student): return userState.changeRole(state, action.data)

        // for registering the user
        case userAction.INIT_REGISTER(Student): return state;
        case userAction.SUCCESS_REGISTER(Student):return userState.resetForm(state)

        // for error handler
        case SET_ERROR_EMAIL_EMPTY(Student): return userState.emailEmptyErrorHandler(state)
        case SET_ERROR_FIRST_NAME_EMPTY(Student): return userState.firstNameEmptyErrorHandler(state)
        case SET_ERROR_LAST_NAME_EMPTY(Student): return userState.lastNameEmptyErrorHandler(state)
        case SET_ERROR_PASSWORD_EMPTY(Student): return userState.passwordEmptyErrorHandler(state)
        case SET_ERROR_RETYPE_PASSWORD_EMPTY(Student): return userState.reTypePasswordEmptyErrorHandler(state)
        case SET_ERROR_PASSWORD_NOT_MATCH(Student): return userState.passwordNotMatchErrorHandler(state)
        case SET_ERROR_EMAIL_INVALID(Student): return userState.emailInvalidErrorHandler(state)
        case SET_ERROR_BIRTHDATE_EMPTY(Student): return userState.birthDateErrorHandler(state)
        case SET_ERROR_PASSWORD_STRENGTH(Student): return userState.passwordStrengthErrorHandler(state)
        case SET_ERROR_EMAIL_ALREADY_EXIST(Student): return userState.emailAlreadyExist(state)


        default: return state;
    }
}

export default reducer