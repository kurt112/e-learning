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
            passwordError: false,
            reTypePasswordError: false,
            birthdateError: false,

            // error message
            emailErrorMessage: '',
            firstNameErrorMessage: '',
            lastNameErrorMessage: '',
            passwordErrorMessage: '',
            reTypePasswordErrorMessage: '',
            birthdateErrorMessage: '',
        }

        this.changeEmail = (state, data) => updateObject(state, {
            email: data,
            emailError: false,
            emailErrorMessage: ''
        })
        this.changeFirstName = (state, data) => updateObject(state, {
            firstName: data,
            firstNameError: false,
            firstNameErrorMessage: ''
        })
        this.changeLastName = (state, data) => updateObject(state, {
            lastName: data,
            lastNameError: false,
            lastNameErrorMessage: ''
        })
        this.changeMiddleName = (state, data) => updateObject(state, {
            middleName: data
        })
        this.changeSuffix = (state, data) => updateObject(state, {
            suffix: data
        })
        this.changePassword = (state, data) => updateObject(state, {
            password: data,
            passwordError: false,
            passwordErrorMessage: '',
        })
        this.changeReTypePassword = (state, data) => updateObject(state, {
            reTypePassword: data,
            reTypePasswordError: false,
            reTypePasswordErrorMessage: ''
        })
        this.changeBirthDate = (state, data) => updateObject(state, {
            birthdate: data,
            birthdateError: false,
            birthdateErrorMessage:''
        })
        this.changeGender = (state, data) => updateObject(state, {
            gender: data
        })
        this.changeRole = (state, data) => updateObject(state, {
            role: data
        })

        // Error Handler

        this.firstNameEmptyErrorHandler = (state) => updateObject(state, {
            firstNameError: true,
            firstNameErrorMessage: "Please Input A Value"
        })

        this.lastNameEmptyErrorHandler = (state) => updateObject(state, {
            lastNameError: true,
            lastNameErrorMessage: "Please Input A Value"
        })
        this.passwordNotMatchErrorHandler = (state) => updateObject(state, {
            passwordError: true,
            passwordErrorMessage: "Password does not match",
            reTypePasswordError: true,
            reTypePasswordErrorMessage: "Password does not match"
        })

        this.passwordEmptyErrorHandler = (state) => updateObject(state, {
            passwordError: true,
            passwordErrorMessage: "Please Input A Value"
        })

        this.reTypePasswordEmptyErrorHandler = (state) => updateObject(state, {
            reTypePasswordError: true,
            reTypePasswordErrorMessage: 'Please Input A Value'
        })

        this.emailEmptyErrorHandler = (state) => updateObject(state, {
            emailError: true,
            emailErrorMessage: "Please Input A Value",
        })

        this.emailAlreadyExist = (state) => updateObject(state, {
            emailError: true,
            emailErrorMessage: "Email Already Exist",
        })

        this.emailInvalidErrorHandler = (state) => updateObject(state, {
            emailError: true,
            emailErrorMessage: "Please Input A Valid Email Address",
        })

        this.birthDateErrorHandler = (state) => updateObject(state, {
            birthdateError: true,
            birthdateErrorMessage: "Please Input A Value"
        })

        this.passwordStrengthErrorHandler = (state) => updateObject(state, {
            passwordError: true,
            passwordErrorMessage: "Password Should Contain 8 Characters, One Upper Case, One Lower Case, One Digit",
        })



    }
}

export default State