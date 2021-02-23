import * as actions from "../../../ActionType/Admin/ActivityDialogActionType";


export const changeFile = (file) =>{
    return {
        type: actions.CHANGE_FILE,
        file,
    }
}


export const changeRoomShiftID = (data) => {
    return {
        type: actions.CHANGE_CLASS_ROOMSHIFT,
        data
    }
}

export const changeSubjectID = (data) => {

    return {
        type: actions.CHANGE_SUBJECT,
        data
    }
}

export const changeActivityName = (data) => {
    return {
        type: actions.CHANGE_ACTIVITY_NAME,
        data
    }
}

export const changeActivityType = (data) => {
     return {
         type: actions.CHANGE_ACTIVITY_TYPE,
          data
     }
}

export const changeDeadlineDate = (data) => {
     return {
         type: actions.CHANGE_ACTIVITY_DEADLINE_DATE,
         data
     }
}

export const changeDeadlineTime = (data) => {
     return {
         type: actions.CHANGE_ACTIVITY_DEADLINE_TIME,
         data
     }
}

export const changeActivityDescription = (data) => {
    return {
        type: actions.CHANGE_ACTIVITY_DESCRIPTION,
        data
    }
}

