import * as actions from '../../ActionType/Admin/Subject/SubjectDialogActionType'


export const changeSubjectCode =(value) => {
    return {
        type: actions.CHANGE_SUBJECT_CODE,
        value
    }
}

export const changeSubjectMajor =(value) => {
    return {
        type: actions.CHANGE_SUBJECT_MAJOR,
        value
    }
}

export const changeSubjectName = (value) => {
    return {
        type: actions.CHANGE_SUBJECT_NAME,
        value
    }
}

