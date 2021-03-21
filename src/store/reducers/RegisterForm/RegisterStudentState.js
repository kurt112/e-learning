import state from '../__StateGlobal/UserForm'
import * as userAction from '../../ActionType/__ActionTypeGlobal/UserRegisterActionType'
import {Student} from "../../utils/Specify";
const userState = new state();

const initState = {
    ...userState.init_state
}

const reducer =(state = initState, action) => {
    switch (action.type){
        case userAction.CHANGE_EMAIL(Student): return userState.changeEmail(state, action)
        case userAction.CHANGE_FIRST_NAME(Student): return userState.changeFirstName(state, action)
        case userAction.CHANGE_LAST_NAME(Student): return userState.changeLastName(state, action)
        case userAction.CHANGE_MIDDLE_NAME(Student): return userState.changeMiddleName(state,action)
        case userAction.CHANGE_SUFFIX(Student): return userState.changeSuffix(state,action)
        case userAction.CHANGE_PASSWORD(Student): return userState.changePassword(state,action)
        case userAction.CHANGE_RETYPE_PASSWORD(Student): return userState.changeReTypePassword(state,action)
        case userAction.CHANGE_BIRTHDATE(Student): return userState.changeBirthDate(state,action)
        case userAction.CHANGE_GENDER(Student): return userState.changeGender(state,action)
        case userAction.CHANGE_ROLE(Student): return userState.changeRole(state, action)

        // for registering the user
        case userAction.INIT_REGISTER(Student): return state;

        default: return state;
    }
}

export default reducer