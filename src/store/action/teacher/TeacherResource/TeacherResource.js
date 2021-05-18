import * as actions from '../../../ActionType/Teacher/TeacherResource/TeacherResourceActionType'

export const
    open_uploadDialog = () => {
        return {
            type: actions.Upload_Dialog_OPEN
        }
    },
    close_uploadDialog = () => {
        return {
            type: actions.Upload_Dialog_CLOSE
        }
    },
    submit_uploadDialog = () => {
        return {
            type: actions.Upload_Dialog_SUBMIT
        }
    },
    success_uploadDialog = (data) => {
        return {
            type: actions.Upload_Dialog_Success,
            data
        }
    },

    initData = (data) => {
        return {
            data,
            type: actions.Init_Resources
        }
    }