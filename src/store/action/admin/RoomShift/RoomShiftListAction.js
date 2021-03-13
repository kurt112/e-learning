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