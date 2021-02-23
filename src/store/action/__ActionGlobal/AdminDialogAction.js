import * as actions from '../../ActionType/__ActionTypeGlobal/AdminDialogActionType'



export const dialogId = (value, to) => {
    return {
        type: actions.ADMIN_DIALOG_ID_CHANGE(to),
        value
    }
}

export const dialogRegister = (to) => {
    console.log("wew")
    return {
        type: actions.ADMIN_DIALOG_REGISTER(to)
    }
}


export const registerDialogSuccess = (to) => {
    return {
        type: actions.ADMIN_DIALOG_REGISTER_SUCCESS(to)
    }
}

export const registerDialogFail = (message, to) => {
    alert(to)
    return {
        type: actions.ADMIN_DIALOG_REGISTER_FAIL(to),
        message
    }
}

export const registerDialogMessageClose = (event, to) => {
    return {
        type: actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(to)
    }
}
