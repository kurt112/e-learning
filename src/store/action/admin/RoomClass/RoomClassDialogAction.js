/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as roomClassAction from '../../../ActionType/Admin/RoomShiftClass/RoomShiftClassDialogActionType'

export const
    changeRoomShiftId = (data) => {
        return {
            type: roomClassAction.CHANGE_ROOMCLASS_ROOMSHIFT_ID,
            data
        }
    },
    changeTeacherId = (data) => {
        return {
            type: roomClassAction.CHANGE_ROOMCLASS_TEACHERID,
            data
        }
    },
    changeSubjectId = (data) => {
        return {
            type: roomClassAction.CHANGE_ROOMCLASS_SUBJECT_ID,
            data
        }
    },
    changeTimeStart = (data) => {
        return {
            type: roomClassAction.CHANGE_ROOMCLASS_TIMESTART,
            data
        }
    },
    changeTimeEnd = (data) => {
        return {
            type: roomClassAction.CHANGE_ROOMCLASS_TIMEEND,
            data
        }
    },
    changeDay = (data) => {
        return {
            type: roomClassAction.CHANGE_ROOMCLASS_DAY,
            data
        }
    }