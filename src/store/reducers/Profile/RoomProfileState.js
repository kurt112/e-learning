import * as actions from '../../ActionType/__ActionTypeGlobal/UserProfileActionType'
import * as profileAction from '../../ActionType/__ActionTypeGlobal/ProfileActionType'

import state from '../__StateGlobal/ProfileState'
import {Room} from "../../utils/Specify"


const RoomState = new state()

const init_state =  {

    ...RoomState.init_state
}

const reducer = (state=init_state, action) => {
    switch (action.type){
        case profileAction.INIT_DATA(Room): return RoomState.initData(state)
        case profileAction.SUCCESS_DATA(Room): return RoomState.successData(state, action)
        case profileAction.FAIL_DATA(Room): return RoomState.failData(state,action)


        case actions.CHANGE_EMAIL: return state
        case actions.CHANGE_BIRTHDATE: return state
        case actions.CHANGE_LASTNAME: return state
        case actions.CHANGE_FIRSTNAME: return state


        default: return state;
    }
}

export default reducer