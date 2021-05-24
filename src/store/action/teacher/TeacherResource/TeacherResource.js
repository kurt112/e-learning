import * as actions from '../../../ActionType/Teacher/TeacherResource/TeacherResourceActionType'

export const

    success_UploadDialog = (data) => {
        return {
            type: actions.Upload_Dialog_Success,
            data
        }
    },

    // for delete dialog

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