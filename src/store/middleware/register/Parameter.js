/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
// import {PasswordEncrypt} from "../utils/EncryptPassword";
const params = new URLSearchParams();
export function* param(user,id) {

    // const password = yield PasswordEncrypt(user.password)
    yield params.append('id', id)
    yield params.append('first-name', user.firstName)
    yield params.append('middle-name', user.middleName)
    yield params.append('last-name', user.lastName)
    yield params.append('suffix', user.suffix)
    yield params.append('birth-date', user.birthdate)
    yield params.append('gender', user.gender)
    yield params.append('email', user.email)
    yield params.append('password', user.password)

    return params
}