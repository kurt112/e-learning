import * as actions from "../../ActionType/__ActionTypeGlobal/ValidationActionType";

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

    SET_ERROR_EMPTY_ID = (to) => {
        return {
            type: actions.SET_ERROR_ID_EMPTY(to)
        }
    },

    SET_ERROR_SUBJECT_NAME_EMPTY = (to) => {
        return {
            type: actions.SET_ERROR_SUBJECT_NAME_EMPTY(to)
        }
    },

    SET_ERROR_SUBJECT_CODE_EMPTY = (to) => {
        return {
            type: actions.SET_ERROR_SUBJECT_CODE_EMPTY(to)
        }
    }