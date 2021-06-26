import * as actions from "../../ActionType/__ActionTypeGlobal/ProfileActionType";
import {CHANGE_LANGUAGE} from '../../ActionType/__ActionTypeGlobal/UserProfileActionType'
export const initData = (data,to) => {
    return {
        type: actions.INIT_DATA(to),
        data
    }
}

export const successData = (data,to) => {
    return {
        type: actions.SUCCESS_DATA(to),
        data
    }
}

export const failData = (data,to) => {
    return {
        type: actions.FAIL_DATA(to),
        data
    }
}

export const changeLanguage = (data) =>{
    return {
        type: CHANGE_LANGUAGE,
        data
    }
}
