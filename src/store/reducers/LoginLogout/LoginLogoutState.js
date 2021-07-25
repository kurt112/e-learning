/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from '../../ActionType/Login/LoginActionType'
import {updateObject} from "../../utils/UpdateObject";
import {Student, Teacher} from "../../utils/Specify";

const initState = {
    username: '',
    password: '',
    message: '',
    loading: false,
    dialog: false,
    form: '',
    id: '',
    studentForm: false,
    teacherForm: false,

    //  error
    error: false,
    errorPreregister: false,

    // error message
    errorPreregisterMessage: ''
}

const Login = (state) => {
    state = updateObject(state, {loading: true})

    return state
}

const successLogin = (state, action) => {
    state = updateObject(state, {
        message: action.data.message,
        loading: false,
        error: false
    })

    window.localStorage.setItem("token", action.data.token)
    return state
}

const failLogin = (state) => {
    return updateObject(state, {
        loading: false,
        error: true
    })
}

const registerClose = (state) => {

    return updateObject(state,
        {
            dialog: false,
            errorPreregister: false,
            id: ''
        }
    )
}

const logout = (state) => {

    return updateObject(state, {
        username: '',
        password: '',
        message: '',
        loading: false,
        dialog: false,
        form: '',
        id: '',

        studentForm: false,
        teacherForm: false
    })
}

const errorPreRegister = (state) => {
    return updateObject(state, {
        errorPreregister: true,
        errorPreregisterMessage: 'User Not Existing'
    })
}

const changeForm = (state, action) => {
    if (action === Student) state = updateObject(state, {studentForm: true})

    if (action === Teacher) state = updateObject(state, {teacherForm: true})

    return updateObject(state, {form: action.data, errorPreregister: false})
}

const closeRegisterForm = (state) => {
    return updateObject(state, {
        studentForm: false,
        teacherForm: false
    })
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.LOGIN:
            return Login(state)
        case actions.CHANGE_EMAIL:
            return updateObject(state, {username: action.data})
        case actions.CHANGE_PASSWORD:
            return updateObject(state, {password: action.data})
        case actions.SUCCESS_LOGIN:
            return successLogin(state, action)
        case actions.FAIL_LOGIN:
            return failLogin(state)
        case actions.RESET_LOGIN_PAGE:
            return logout(state)

        // for Registration in LoginLogout
        case actions.REGISTER_OPEN:
            return updateObject(state, {dialog: true})
        case actions.REGISTER_CLOSE:
            return registerClose(state)

        case actions.CHANGE_ID:
            return updateObject(state, {id: action.data})
        case actions.CHANGE_FORM:
            return changeForm(state, action.data)

        case actions.FAIL_PREREGISTER:
            return errorPreRegister(state)

        case actions.REGISTER_FORM_CLOSE:
            return closeRegisterForm(state)

        default:
            return state;
    }

}

export default reducer