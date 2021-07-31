import {checkPasswordStrength, checkStringEmail, checkStringEmpty} from "../../../components/ui/utils/validation";
import {put} from "redux-saga/effects";
import {
    setErrorAlreadyExistEmail,
    setErrorBirthdayEmpty,
    setErrorEmailEmpty,
    setErrorFirstNameEmpty,
    setErrorInvalidEmail,
    setErrorLastNameEmpty,
    setErrorMiddleNameEmpty,
    setErrorPasswordEmpty, setErrorPasswordNotMatch, setErrorPasswordStrength,
    setErrorReTypePasswordEmpty
} from "../../action/__ActionGlobal/ValidationAction";
import {baseUrlNoAuth} from "../axios";


/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 31/07/2021, Saturday
 **/

export function* validate(user,to) {

    let error = false


    if(checkStringEmail(user.email) === false){
        error = true
        yield put(setErrorInvalidEmail(to))
    }else {
        const params = new URLSearchParams()
        params.append("email", user.email)
       try {
           yield baseUrlNoAuth.get('user', {params})
       }catch (ignored) {
            error = true
           yield put(setErrorAlreadyExistEmail(to))
       }
    }

    if (checkStringEmpty(user.email)) {
        error = true
        yield put(setErrorEmailEmpty(to))
    }

    if (checkStringEmpty(user.firstName)) {
        error = true
        yield put(setErrorFirstNameEmpty(to))
    }

    if (checkStringEmpty(user.lastName)) {
        error = true
        yield put(setErrorLastNameEmpty(to))
    }

    if (checkStringEmpty(user.middleName)) {
        error = true
        yield put(setErrorMiddleNameEmpty(to))
    }

    if (checkStringEmpty(user.birthdate)) {
        error = true
        yield put(setErrorBirthdayEmpty(to))
    }

    const password = user.password
    const reTypePassword = user.reTypePassword
    const isPasswordEmpty = checkStringEmpty(user.password)
    const isReTypePasswordEmpty = checkStringEmpty(user.reTypePassword)

    if (isPasswordEmpty && isReTypePasswordEmpty) {
        error = true
        yield put(setErrorReTypePasswordEmpty(to))
        yield put(setErrorPasswordEmpty(to))
    } else if (password !== reTypePassword) {
        error = true
        yield  put(setErrorPasswordNotMatch(to))
    }else if(password === reTypePassword && checkPasswordStrength(password) === false) {
        error = true
        yield put(setErrorPasswordStrength(to))
    }

    return error
}

