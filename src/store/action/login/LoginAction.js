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
            type: action.Login
        }
    },

    successLogin = (data) => {
        return {
            type: action.SuccessLogin,
            data
        }
    },

    failLogin = (data) => {
        return {
            type: action.FailLogin,
            data
        }
    }