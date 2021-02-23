import * as roomClassAction from '../../../ActionType/Admin/RoomClassDialogActionType'

export const changeRoomShiftId = (data) => {
    return {
        type: roomClassAction.CHANGE_ROOMCLASS_ROOMSHIFT_ID,
        data
    }
}

export const changeTeacherId = (data) => {
    return {
        type: roomClassAction.CHANGE_ROOMCLASS_TEACHERID,
        data
    }
}

export const changeSubjectId = (data) => {
    return {
        type: roomClassAction.CHANGE_ROOMCLASS_SUBJECT_ID,
        data
    }
}

export const changeTimeStart = (data) => {
    return {
        type: roomClassAction.CHANGE_ROOMCLASS_TIMESTART,
        data
    }
}

export const changeTimeEnd = (data) => {
    return {
        type: roomClassAction.CHANGE_ROOMCLASS_TIMEEND,
        data
    }
}

export const changeDay = (data) => {
    alert(data)
    return {
        type: roomClassAction.CHANGE_ROOMCLASS_DAY,
        data
    }
}