/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from '../../ActionType/__ActionTypeGlobal/TableActionType'
import * as dialogAction from '../../ActionType/__ActionTypeGlobal/DialogActionType'

export const

    InitDataTable = (to) => {
        return {
            type: actions.ADMIN_TABLE_INIT(to)
        }
    },
    SettingInitDataTable = (data, to) => {
        return {
            type: actions.ADMIN_TABLE_SETTINGS_INIT(to),
            data
        }
    },
    SuccessDataTable = (data, init, to) => {
        return {
            type: actions.ADMIN_TABLE_SUCCESS(to),
            data,
            init
        }
    },
    FailDataTable = (message, to) => {
        return {
            type: actions.ADMIN_TABLE_FAIL(to),
            message
        }
    },
    DataNextPage = (page, to) => {
        return {
            type: actions.ADMIN_TABLE_NEXT_PAGE(to),
            page
        }
    },
    SearchChange = (text, to) => {
        return {
            type: actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(to),
            text
        }
    },
    closeDialog = (to) => {
        return {
            type: actions.DIALOG_CLOSE(to)
        }
    },

    openDialog = (to) => {
        return {
            type: actions.DIALOG_OPEN(to)
        }
    },
    setData = (data,to) => {
        console.log(to)
        console.log(data)
        return {
            type: dialogAction.SET_DATA(to),
            data
        }
    }
