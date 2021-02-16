/**
 *
 *     I created this action so that we don't have redundant action when calling data in admin table
 *
 */

export const
// FOR ADMIN  TABLE

    ADMIN_TABLE_INIT = to => to+"_ADMIN_TABLE_INIT",
    ADMIN_TABLE_SUCCESS= to => to+"_ADMIN_TABLE_SUCCESS",
    ADMIN_TABLE_FAIL = to => to+"_ADMIN_TABLE_FAIL",
    ADMIN_TABLE_DIALOG_OPEN= to => to+"_ADMIN_TABLE_DIALOG_OPEN",
    ADMIN_TABLE_DIALOG_CLOSE = to => to+"_ADMIN_TABLE_DIALOG_CLOSE",
    ADMIN_DIALOG_TABLE_REGISTER = to => to+"_ADMIN_DIALOG_TABLE_REGISTER",
    ADMIN_TABLE_SETTINGS_INIT = to => to+"_ADMIN_TABLE_SETTINGS_INIT",


// FOR ApiEndpoint REQUEST
    ADMIN_TABLE_NEXT_PAGE= to =>  to+"_ADMIN_TABLE_NEXT_PAGE",
    ADMIN_TABLE_SEARCH_DATA_CHANGE = to => to+"_ADMIN_TABLE_SEARCH_DATA_CHANGE"


