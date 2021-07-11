/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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

