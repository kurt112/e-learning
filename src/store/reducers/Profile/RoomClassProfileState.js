import * as profileAction from '../../ActionType/__ActionTypeGlobal/ProfileActionType'

import state from '../__StateGlobal/ProfileState'
import {RoomShiftClass} from "../../utils/Specify"


const RoomShiftClassState = new state()

const init_state =  {

    ...RoomShiftClassState.init_state
}

const reducer = (state=init_state, action) => {
    switch (action.type){
        case profileAction.INIT_DATA(RoomShiftClass): return RoomShiftClassState.initData(state)
        case profileAction.SUCCESS_DATA(RoomShiftClass): return RoomShiftClassState.successData(state, action)
        case profileAction.FAIL_DATA(RoomShiftClass): return RoomShiftClassState.failData(state,action)



        default: return state;
    }
}

export default reducer