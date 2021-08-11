/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as action from '../../ActionType/Login/LoginActionType'

export const
    changeEmail = (data) => {
        return {
            type: action.CHANGE_EMAIL,
            data
        }
    },

    changePassword = (data) => {
        return {
            type: action.CHANGE_PASSWORD,
            data
        }
    },

    Login = () => {
        return {
            type: action.LOGIN
        }
    },

    successLogin = (data) => {
        return {
            type: action.SUCCESS_LOGIN,
            data
        }
    },

    failLogin = (data) => {
        return {
            type: action.FAIL_LOGIN,
            data
        }
    },

    // Registration in LoginLogout from actions
    changeId = (data) => {
        return {
            type: action.CHANGE_ID,
            data
        }
    },
    changeForm = (data) => {
        return {
            type: action.CHANGE_FORM,
            data
        }
    },

    registerClose = () => {
        return {
            type: action.REGISTER_CLOSE
        }
    },

    registerOpen = () => {
        return {
            type: action.REGISTER_OPEN
        }
    },

    registerInit = () => {
        return {
            type: action.REGISTER_INIT
        }
    },

    reLogin = (data) => {
        return {
            type: action.RE_LOGIN,
            data
        }
    },

    resetLoginPage = () => {
        return {
            type: action.RESET_LOGIN_PAGE
        }
    },

    errorPreRegister = () => {
        return {
            type: action.FAIL_PREREGISTER
        }
    },
    closeRegisterForm = () => {
        return {
            type: action.REGISTER_FORM_CLOSE
        }
    },
    rememberClick = () => {
        return {
            type: action.REMEMBER_CLICK
        }
    }