/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as action from '../../ActionType/CurrentUser/CurrenUserActionType'

export const
    changeToken = (data) => {
        return {
            type: action.CHANGE_TOKEN,
            data
        }
    },
    changeUser = (data) => {
        return {
            type: action.CHANGE_USER,
            data
        }
    },

    logout = () => {
        return{
            type: action.LOGOUT
        }
    }