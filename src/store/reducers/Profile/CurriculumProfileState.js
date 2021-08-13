import state from "../__StateGlobal/ProfileState";
import * as profileAction from "../../ActionType/__ActionTypeGlobal/ProfileActionType";
import {Curriculum, RoomShiftClass} from "../../utils/Specify";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 13/08/2021, Friday
 **/


const profile = new state()

const initState = {
    ...profile.init_state
}

const reducer =  (state = initState, action) => {

    switch (action.type) {
        case profileAction.INIT_DATA(Curriculum): return profile.initData(state)
        case profileAction.SUCCESS_DATA(Curriculum): return profile.successData(state, action)
        case profileAction.FAIL_DATA(Curriculum): return profile.failData(state,action)



        default: return state;
    }

    return state

}

export default reducer
