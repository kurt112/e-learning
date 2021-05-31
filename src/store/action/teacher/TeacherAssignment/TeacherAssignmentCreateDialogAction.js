import * as action from '../../../ActionType/Teacher/TeacherAssignment'

export const
    changeResourceCode = (data) => {
        return {
            type: action.CHANGE_RESOURCE_CODE,
            data
        }
    },
    changeClassCode = (data) => {
        return {
            type: action.CHANGE_CLASS_CODE,
            data
        }
    },
    changeDeadLine = (data) => {
        return {
            type: action.CHANGE_DEADLINE,
            data
        }
    },
    changeSemester = (data) => {
        return {
            type: action.CHANGE_SEMESTER,
            data
        }
    },
    changeQuarter = (data) => {
        return {
            type: action.CHANGE_QUARTER,
            data
        }
    },
    changeLowGrade = (data) => {
        return {
            type: action.CHANGE_LOW_GRADE,
            data
        }
    },
    changeHighGrade = (data) => {
        return {
            type: action.CHANGE_HIGH_GRADE,
            data
        }
    },
    changeAssignmentDescription = (data) => {
        return {
            type: action.CHANGE_DESCRIPTION,
            data
        }
    }
