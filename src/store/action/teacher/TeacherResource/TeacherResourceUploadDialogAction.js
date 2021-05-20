import * as actions from '../../../ActionType/Teacher/TeacherResource/TeacherResourceActionType'

export const
    changeFile = (data) => {
        return {
            data,
            type: actions.CHANGE_FILE
        }
    },
    changeName = (data) => {
        return {
            data,
            type: actions.CHANGE_NAME
        }
    },
    changeDescription = (data) => {
        return {
            type: actions.CHANGE_DESCRIPTION,
            data
        }
    },
    changeType = (data) => {
        return {
            type: actions.CHANGE_TYPE,
            data
        }
    },
    successRegister = () => {
        return {
            type: actions.Upload_Dialog_Success
        }
    }
