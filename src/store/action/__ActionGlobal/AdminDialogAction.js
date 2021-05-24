import * as actions from '../../ActionType/__ActionTypeGlobal/DialogActionType'

export const
    dialogId = (value, to) => {
        return {
            type: actions.ADMIN_DIALOG_ID_CHANGE(to),
            value
        }
    },
    dialogRegister = (to) => {
        return {
            type: actions.ADMIN_DIALOG_REGISTER(to)
        }
    },
    registerDialogSuccess = (to) => {
        return {
            type: actions.ADMIN_DIALOG_REGISTER_SUCCESS(to)
        }
    },

    registerDialogFail = (message, to) => {
        return {
            type: actions.ADMIN_DIALOG_REGISTER_FAIL(to),
            message
        }
    },
    registerDialogMessageClose = (to) => {
        return {
            type: actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(to)
        }
    }


