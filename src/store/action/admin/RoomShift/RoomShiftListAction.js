/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as action from '../../../ActionType/Admin/RoomShift/RoomShiftListActionType'

export const
    openAddStudent = () => {
        return {
            type: action.ADD_STUDENT_DIALOG_OPEN
        }
    },
    closeAddStudent = () => {
        return {
            type: action.ADD_STUDENT_DIALOG_CLOSE
        }
    }