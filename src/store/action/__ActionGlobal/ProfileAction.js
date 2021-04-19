import * as actions from "../../ActionType/__ActionTypeGlobal/ProfileActionType";

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
