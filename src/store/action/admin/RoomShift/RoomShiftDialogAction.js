import * as actions from '../../../ActionType/Admin/RoomShift/RoomShiftDialogActionType'
export const roomShiftSectionChange = (data) => {
    return {
        type: actions.ROOMSHIFT_DIALOG_ROOMSECTION_CHANGE,
        data
    }
}

export const roomShiftGradeChange = (data) => {
    return {
        type: actions.ROOMSHIFT_DIALOG_ROOMGRADE_CHANGE,
        data
    }
}

export const roomShiftTimeStartChange = (data) => {
    return{
        type: actions.ROOMSHIFT_DIALOG_TIMESTART_CHANGE,
        data
    }
}

export const roomShiftTimeEndChange =(data) => {
    return {
        type: actions.ROOMSHIFT_DIALOG_TIMEEND_CHANGE,
        data
    }
}

export const roomShiftChange = (data) => {
    return {
        type: actions.ROOMSHIFT_DIALOG_ROOMSHIFT_SET,
        data
    }
}

export const roomShiftRoomChange = (data) => {
    return {
        type: actions.ROOMSHIFT_DIALOG_ROOM_SET,
        data
    }
}

