import * as actions from '../../ActionType/__ActionTypeGlobal/UserProfileActionType'
import * as profileAction from '../../ActionType/__ActionTypeGlobal/ProfileActionType'

import state from '../__StateGlobal/ProfileState'
import {Teacher} from "../../utils/Specify"

const TeacherState = new state()

const init_state =  {

    ...TeacherState.init_state
}

const reducer = (state=init_state, action) => {
    switch (action.type){

        case profileAction.INIT_DATA(Teacher): return TeacherState.initData(state)
        case profileAction.SUCCESS_DATA(Teacher): return TeacherState.successData(state, action)

        case profileAction.FAIL_DATA(Teacher): return TeacherState.failData(state,action)


        case actions.CHANGE_EMAIL: return state
        case actions.CHANGE_BIRTHDATE: return state
        case actions.CHANGE_LASTNAME: return state
        case actions.CHANGE_FIRSTNAME: return state


        default: return state;
    }
}

export default reducer