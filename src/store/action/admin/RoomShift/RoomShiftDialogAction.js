/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from '../../../ActionType/Admin/RoomShift/RoomShiftDialogActionType'

export const
    changeSection = (data) => {
        return {
            type: actions.ROOMSHIFT_DIALOG_ROOMSECTION_CHANGE,
            data
        }
    },
    changeGrade = (data) => {
        return {
            type: actions.ROOMSHIFT_DIALOG_ROOMGRADE_CHANGE,
            data
        }
    },
    changeTimeStart = (data) => {
        return {
            type: actions.ROOMSHIFT_DIALOG_TIMESTART_CHANGE,
            data
        }
    },

    changeTimeEnd = (data) => {
        return {
            type: actions.ROOMSHIFT_DIALOG_TIMEEND_CHANGE,
            data
        }
    },


    changeRoomShift = (data) => {
        return {
            type: actions.ROOMSHIFT_DIALOG_ROOMSHIFT_SET,
            data
        }
    },

    changeRoom = (data) => {
        return {
            type: actions.ROOMSHIFT_DIALOG_ROOM_SET,
            data
        }
    },

    changeAdviser = (data) => {
        return {
            type: actions.ROOMSHIFT_DIALOG_ADVISER_CHANGE,
            data
        }
    },

    changeCurriculum = (data) => {
        return {
            type: actions.ROOMSHIFT_DIALOG_CURRICULUM_CHANGE,
            data
        }
    }

