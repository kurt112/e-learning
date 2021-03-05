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

    // Registration in Login from actions
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
    }