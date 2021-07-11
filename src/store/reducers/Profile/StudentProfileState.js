/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from '../../ActionType/__ActionTypeGlobal/UserProfileActionType'
import * as profileAction from '../../ActionType/__ActionTypeGlobal/ProfileActionType'

import state from '../__StateGlobal/ProfileState'
import {Student} from "../../utils/Specify"
const profileState = new state()

const init_state =  {

    ...profileState.init_state
}


const reducer = (state=init_state, action) => {
    switch (action.type){

        case profileAction.INIT_DATA(Student): return profileState.initData(state)
        case profileAction.SUCCESS_DATA(Student): return profileState.successData(state, action)
        case profileAction.FAIL_DATA(Student): return profileState.failData(state,action)


        case actions.CHANGE_EMAIL: return state
        case actions.CHANGE_BIRTHDATE: return state
        case actions.CHANGE_LASTNAME: return state
        case actions.CHANGE_FIRSTNAME: return state


        default: return state;
    }
}

export default reducer