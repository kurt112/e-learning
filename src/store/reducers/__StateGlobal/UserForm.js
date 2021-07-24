/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {updateObject} from "../../utils/UpdateObject";

class State {
    constructor() {
        this.init_state = {
            email: '',
            firstName: '',
            lastName: '',
            middleName: '',
            suffix: '',
            password: '',
            reTypePassword: '',
            birthdate: '',
            gender: 'Male',
            userRole: '',

            // error
            emailError: false,
            firstNameError: false,
            lastNameError: false,
            middleNameError: false,
            passwordError: false,

            // error message
            emailErrorMessage: '',
            firstNameErrorMessage:'',
            lastNameErrorMessage:'',
            middleNameErrorMessage: '',
            passwordErrorMessage: '',
        }

        this.changeEmail = (state, action) =>
            updateObject(state, {email: action.data})
        this.changeFirstName = (state, action) =>
            updateObject(state, {firstName: action.data})
        this.changeLastName = (state, action) =>
            updateObject(state, {lastName: action.data})
        this.changeMiddleName= (state, action) =>
            updateObject(state, {middleName: action.data})
        this.changeSuffix = (state, action) =>
            updateObject(state, {suffix: action.data})
        this.changePassword = (state, action) =>
            updateObject(state, {password: action.data})
        this.changeReTypePassword = (state, action) =>
            updateObject(state, {reTypePassword: action.data})
        this.changeBirthDate = (state, action) =>
            updateObject(state, {birthdate: action.data})
        this.changeGender = (state, action) =>
            updateObject(state, {gender: action.data})
        this.changeRole= (state, action) =>
            updateObject(state, {role: action.data})



    }
}

export default State