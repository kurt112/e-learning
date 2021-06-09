import * as actions from '../../ActionType/__ActionTypeGlobal/TableActionType'


/**
 *@param to - it will identify if it's for what object to = Student or Teacher
 *             Created the third param so that we don't create a redundant variable
 */


export const InitDataTable = (to) => {

    return {
        type: actions.ADMIN_TABLE_INIT(to)
    }
}

/**
 *
 * @param data - the return data in api
 * @param init - initialize true or false if false it will concat to the existing data array
 * @param to - same as the first comment
 */

export const SettingInitDataTable = (data, to) => {
    return {
        type: actions.ADMIN_TABLE_SETTINGS_INIT(to),
        data
    }
}

export const SuccessDataTable = (data, init, to) => {

    return {
        type: actions.ADMIN_TABLE_SUCCESS(to),
        data,
        init
    }
}

export const FailDataTable = (message, to) => {
    return {
        type: actions.ADMIN_TABLE_FAIL(to),
        message
    }
}

export const DataNextPage = (page, to) => {
    return {
        type: actions.ADMIN_TABLE_NEXT_PAGE(to),
        page
    }
}

export const SearchChange = (text, to) => {
    return {
        type: actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(to),
        text
    }
}

export const closeDialog = (to) => {
    return {
        type: actions.DIALOG_CLOSE(to)
    }
}

export const openDialog = (to) => {
    return {
        type: actions.DIALOG_OPEN(to)
    }
}

export const addItemTable = (item, to) => {
    return {
        type: actions.ADMIN_DIALOG_TABLE_REGISTER(to),
        item,
    }
}
