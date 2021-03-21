import * as actions from '../../../ActionType/Admin/Room/RoomDialogActionType'

export const
    roomNameChange = (data) => {
        return {
            type: actions.ROOM_DIALOG_ROOMNAME_CHANGE,
            data
        }
    },


    roomTimeStartChange = (data) => {
        return {
            type: actions.ROOM_DIALOG_TIMESTART_CHANGE,
            data
        }
    },

    roomTimeEndChange = (data) => {
        return {
            type: actions.ROOM_DIALOG_TIMEEND_CHANGE,
            data
        }
    }