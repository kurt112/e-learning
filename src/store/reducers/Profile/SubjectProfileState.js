import state from "../__StateGlobal/ProfileState";
import * as profileAction from "../../ActionType/__ActionTypeGlobal/ProfileActionType";
import {Subject} from "../../utils/Specify";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 13/08/2021, Friday
 **/

const profile = new state()

const initState = {
    ...profile.init_state
}

const reducer = (state= initState, action) => {
    switch (action.type) {
        case profileAction.INIT_DATA(Subject): return profile.initData(state)
        case profileAction.SUCCESS_DATA(Subject): return profile.successData(state, action)
        case profileAction.FAIL_DATA(Subject): return profile.failData(state,action)



        default: return state;
    }
}

export default reducer

