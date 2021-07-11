/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as profileAction from '../../ActionType/__ActionTypeGlobal/ProfileActionType'

import state from '../__StateGlobal/ProfileState'
import {RoomShiftClass} from "../../utils/Specify"


const ActivityState = new state()

const init_state =  {

    ...ActivityState.init_state
}

const reducer = (state=init_state, action) => {
    switch (action.type){
        case profileAction.INIT_DATA(RoomShiftClass): return ActivityState.initData(state)
        case profileAction.SUCCESS_DATA(RoomShiftClass): return ActivityState.successData(state, action)
        case profileAction.FAIL_DATA(RoomShiftClass): return ActivityState.failData(state,action)



        default: return state;
    }
}

export default reducer