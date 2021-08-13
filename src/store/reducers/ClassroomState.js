/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from '../ActionType/ClassroomActionType'
import {updateObject} from "../utils/UpdateObject";

const init_state = {
    showMessage: true,
    video: true,
    mic: true,
    shareScreen: false,
}

const reducer = (state = init_state, action) =>{
    switch (action.type){
        case actions.SET_MIC: return updateObject(state, {mic: action.data})
        case actions.SET_SHARE_SCREEN: return updateObject(state, {shareScreen: action.data})
        case actions.SET_VIDEO: return updateObject(state, {video: action.data})
        case actions.SHOW_MESSAGE: return updateObject(state, {showMessage: action.data})
        default: return state
    }
}

export default reducer