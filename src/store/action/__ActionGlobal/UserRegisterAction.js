import * as action from '../../ActionType/__ActionTypeGlobal/UserRegisterActionType'

export const
    changeEmail = (data, to) => {
        return {
            type: action.CHANGE_EMAIL(to),
            data
        }
    },
    changeFirstName = (data, to) => {

        return {
            type: action.CHANGE_FIRST_NAME(to),
            data
        }
    },
    changeLastName = (data, to) => {
        return {
            type: action.CHANGE_LAST_NAME(to),
            data
        }
    },
    changeMiddleName = (data, to) => {
        return {
            type: action.CHANGE_MIDDLE_NAME(to),
            data
        }
    },
    changeSuffix = (data, to) => {
        return {
            type: action.CHANGE_SUFFIX(to),
            data
        }
    },
    changePassword = (data, to) => {
        return {
            type: action.CHANGE_PASSWORD(to),
            data,
        }
    },
    changeReTypePassword = (data, to) => {
        return {
            type: action.CHANGE_RETYPE_PASSWORD(to),
            data
        }
    },
    changeBirthdate = (data, to) => {

        return {
            type: action.CHANGE_BIRTHDATE(to),
            data,
        }
    },
    changeGender = (data, to) => {
        return {
            type: action.CHANGE_GENDER(to),
            data
        }
    },
    changeRole = (data, to) => {
        return {
            type: action.CHANGE_ROLE(to),
            data
        }
    },
    initRegister = (to) => {
        return {
            type: action.INIT_REGISTER(to)
        }
    }