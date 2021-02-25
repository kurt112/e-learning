import * as profileAction from '../../ActionType/__ActionTypeGlobal/ProfileActionType'

import state from '../__StateGlobal/ProfileState'
import {RoomShift} from "../../utils/Specify"


const RoomShiftState = new state()

const init_state =  {

    ...RoomShiftState.init_state
}

const reducer = (state=init_state, action) => {
    switch (action.type){
        case profileAction.INIT_DATA(RoomShift): return RoomShiftState.initData(state)
        case profileAction.SUCCESS_DATA(RoomShift): return RoomShiftState.successData(state, action)
        case profileAction.FAIL_DATA(RoomShift): return RoomShiftState.failData(state,action)



        default: return state;
    }
}

export default reducer