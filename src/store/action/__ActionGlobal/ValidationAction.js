import * as actions from "../../ActionType/__ActionTypeGlobal/ValidationActionType";
import {
    SET_ERROR_BIRTHDATE_EMPTY, SET_ERROR_EMAIL_ALREADY_EXIST, SET_ERROR_EMAIL_EMPTY, SET_ERROR_EMAIL_INVALID,
    SET_ERROR_MIDDLE_NAME_EMPTY,
    SET_ERROR_PASSWORD_EMPTY, SET_ERROR_PASSWORD_NOT_MATCH, SET_ERROR_PASSWORD_STRENGTH, SET_ERROR_RETYPE_PASSWORD_EMPTY
} from "../../ActionType/__ActionTypeGlobal/ValidationActionType";

/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 27/07/2021, Tuesday
 **/

export const
    setErrorRoomNameEmpty = (to) => {
        return {
            type: actions.SET_ERROR_ROOM_EMPTY(to)
        }
    },
    setErrorSubjectEmpty = (to) => {
        return {
            type: actions.SET_ERROR_SUBJECT_EMPTY(to)
        }
    },
    setErrorRoomShiftEmpty = (to) => {
        return {
            type: actions.SET_ERROR_ROOM_SHIFT_EMPTY(to)
        }
    },
    setRoomEmptyError = (to) => {
        return {
            type: actions.SET_ERROR_ROOM_EMPTY(to)
        }
    },

    setCurriculumEmptyError = (to) => {
        return {
            type: actions.SET_ERROR_CURRICULUM_EMPTY(to)
        }
    },

    setGradeEmptyError = (to) => {
        return {
            type: actions.SET_ERROR_GRADE_EMPTY(to)
        }
    },

    setSectionEmptyError = (to) => {
        return {
            type: actions.SET_ERROR_SECTION_EMPTY(to)
        }
    },

    setErrorEmptyId = (to) => {
        return {
            type: actions.SET_ERROR_ID_EMPTY(to)
        }
    },

    setErrorSubjectNameEmpty = (to) => {
        return {
            type: actions.SET_ERROR_SUBJECT_NAME_EMPTY(to)
        }
    },

    setErrorSubjectCodeEmpty = (to) => {
        return {
            type: actions.SET_ERROR_SUBJECT_CODE_EMPTY(to)
        }
    },

    setErrorCurriculumNameEmpty = (to) => {
        return {
            type: actions.SET_ERROR_CURRICULUM_NAME_EMPTY(to)
        }
    },

    setErrorFirstNameEmpty = (to) => {
        return {
            type: actions.SET_ERROR_FIRST_NAME_EMPTY(to)
        }
    },

    setErrorLastNameEmpty = (to) => {
        return {
            type: actions.SET_ERROR_LAST_NAME_EMPTY(to)
        }
    },

    setErrorMiddleNameEmpty = (to) => {
        return {
            type: SET_ERROR_MIDDLE_NAME_EMPTY(to)
        }
    },

    setErrorPasswordEmpty = (to) => {
        return {
            type: SET_ERROR_PASSWORD_EMPTY(to)
        }
    },

    setErrorReTypePasswordEmpty = (to) => {
        return {
            type: SET_ERROR_RETYPE_PASSWORD_EMPTY(to)
        }
    },
    setErrorPasswordNotMatch = (to) => {
        return {
            type: SET_ERROR_PASSWORD_NOT_MATCH(to)
        }
    },
    setErrorBirthdayEmpty = (to) => {
        return {
            type: SET_ERROR_BIRTHDATE_EMPTY(to)
        }
    },
    setErrorEmailEmpty = (to) => {
        return {
            type: SET_ERROR_EMAIL_EMPTY(to)
        }
    },

    setErrorInvalidEmail = (to) => {
        return {
            type: SET_ERROR_EMAIL_INVALID(to)
        }
    },
    setErrorAlreadyExistEmail = (to) => {
        return {
            type: SET_ERROR_EMAIL_ALREADY_EXIST(to)
        }
    },

    setErrorPasswordStrength = (to) => {
        return {
            type: SET_ERROR_PASSWORD_STRENGTH(to)
        }
    }


