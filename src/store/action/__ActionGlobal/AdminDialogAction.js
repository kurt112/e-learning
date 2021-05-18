import * as actions from '../../ActionType/__ActionTypeGlobal/AdminDialogActionType'



export const dialogId = (value, to) => {
    return {
        type: actions.ADMIN_DIALOG_ID_CHANGE(to),
        value
    }
}

export const dialogRegister = (to) => {
    return {
        type: actions.ADMIN_DIALOG_REGISTER(to)
    }
}


export const registerDialogSuccess = (to) => {
    alert("i am here")
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

export const registerDialogMessageClose = (to) => {
    return {
        type: actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(to)
    }
}
