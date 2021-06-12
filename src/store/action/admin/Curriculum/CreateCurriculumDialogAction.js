import * as actions from '../../../ActionType/Admin/Curriculum/CreateCurriculumDialogActionType'

export const
    changeName = (data) => {
        return {
            type: actions.CHANGE_NAME,
            data
        }
    },
    changeDescription = (data) => {
        return {
            type: actions.CHANGE_DESCRIPTION,
            data
        }
    }

