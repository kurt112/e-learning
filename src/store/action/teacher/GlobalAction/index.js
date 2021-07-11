/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from "../../../ActionType/Teacher/GlobalActiontype";

export const
    changeResourceCode = (data,to) => {
        return {
            type: actions.CHANGE_RESOURCE_CODE(to),
            data
        }
    },
    changeClassCode = (data,to) => {
        return {
            type: actions.CHANGE_CLASS_CODE(to),
            data
        }
    },
    changeDeadLine = (data,to) => {
        return {
            type: actions.CHANGE_DEADLINE(to),
            data
        }
    },
    changeSemester = (data,to) => {
        return {
            type: actions.CHANGE_SEMESTER(to),
            data
        }
    },
    changeQuarter = (data,to) => {
        return {
            type: actions.CHANGE_QUARTER(to),
            data
        }
    },
    changeLowGrade = (data,to) => {
        return {
            type: actions.CHANGE_LOW_GRADE(to),
            data
        }
    },
    changeHighGrade = (data,to) => {
        return {
            type: actions.CHANGE_HIGH_GRADE(to),
            data
        }
    },
    changeDescription = (data, to) => {
        return {
            type: actions.CHANGE_DESCRIPTION(to),
            data
        }
    }

