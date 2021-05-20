import * as actions from '../../../ActionType/Teacher/TeacherResource/TeacherResourceActionType'

export const

    // for upload dialogs
    open_UploadDialog = () => {
        return {
            type: actions.Upload_Dialog_OPEN
        }
    },
    close_UploadDialog = () => {
        return {
            type: actions.Upload_Dialog_CLOSE
        }
    },
    success_UploadDialog = (data) => {
        return {
            type: actions.Upload_Dialog_Success,
            data
        }
    },

    // for delete dialog
    open_DeleteDialog = () => {
        return {
            type: actions.Delete_Dialog_OPEN
        }
    },
    close_DeleteDialog = () => {
        return {
            type: actions.Delete_Dialog_CLOSE
        }
    },
    success_DeleteDialog = (data) => {
        return {
            type: actions.Delete_Dialog_Success,
            data
        }
    },


    // for getting data
    initData = (data) => {
        return {
            data,
            type: actions.Init_Resources
        }
    }