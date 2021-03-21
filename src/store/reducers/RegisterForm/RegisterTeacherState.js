import state from '../__StateGlobal/UserForm'
import * as userAction from '../../ActionType/__ActionTypeGlobal/UserRegisterActionType'
import {Teacher} from "../../utils/Specify";
const userState = new state();

const initState = {
    ...userState.init_state
}

const reducer =(state = initState, action) => {
    switch (action.type){
        case userAction.CHANGE_EMAIL(Teacher): return userState.changeEmail(state, action)
        case userAction.CHANGE_FIRST_NAME(Teacher): return userState.changeFirstName(state, action)
        case userAction.CHANGE_LAST_NAME(Teacher): return userState.changeLastName(state, action)
        case userAction.CHANGE_MIDDLE_NAME(Teacher): return userState.changeMiddleName(state,action)
        case userAction.CHANGE_SUFFIX(Teacher): return userState.changeSuffix(state,action)
        case userAction.CHANGE_PASSWORD(Teacher): return userState.changePassword(state,action)
        case userAction.CHANGE_RETYPE_PASSWORD(Teacher): return userState.changeReTypePassword(state,action)
        case userAction.CHANGE_BIRTHDATE(Teacher): return userState.changeBirthDate(state,action)
        case userAction.CHANGE_GENDER(Teacher): return userState.changeGender(state,action)
        case userAction.CHANGE_ROLE(Teacher): return userState.changeRole(state, action)

        // for registering the user
        case userAction.INIT_REGISTER(Teacher): return state;

        default: return state;
    }
}

export default reducer