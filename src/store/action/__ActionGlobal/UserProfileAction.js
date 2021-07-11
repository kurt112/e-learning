/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from '../../ActionType/__ActionTypeGlobal/UserProfileActionType'
export const changeFirstName = (data) => {
    return {
        type: actions.CHANGE_FIRSTNAME,
        data
    }
}


export const changeLastName = (data) => {
    return {
        type: actions.CHANGE_LASTNAME,
        data
    }
}

export const changeBirthDate = (data) => {
    return {
        type: actions.CHANGE_BIRTHDATE,
        data
    }
}

export const changeEmail = (data) => {
    return {
        type: actions.CHANGE_EMAIL,
        data
    }
}
