// Since it's global the first param will be substitute to 'Student Or Teacher'

export const
    ADMIN_DIALOG_ID_CHANGE = (to) =>to+"_ADMIN_DIALOG_ID_CHANGE",
    ADMIN_DIALOG_REGISTER =(to)=> to+ "_ADMIN_DIALOG_REGISTER",
    ADMIN_DIALOG_REGISTER_FAIL = (to) => to + "_ADMIN_DIALOG_REGISTER_FAIL",
    ADMIN_DIALOG_REGISTER_SUCCESS =  (to) => to+ "_ADMIN_DIALOG_REGISTER_SUCCESS",
    ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE = (to) => to+"_ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE",


    // for opening and closing dialog
    TABLE_DIALOG_OPEN= to => to+"TABLE_DIALOG_OPEN",
    TABLE_DIALOG_CLOSE = to => to+"TABLE_DIALOG_CLOSE"
