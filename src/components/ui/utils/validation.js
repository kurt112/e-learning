/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 26/07/2021, Monday
 **/
const emailPattern = new RegExp(/\S+@\S+\.\S+/)



// Password Should Contain 8 Characters, One Upper Case, One Lower Case, One Digit
const passwordStrengthPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)

export const
    checkStringEmpty = (data) => {
        return !data || /^\s*$/.test(data)
    },

    checkStringEmail = (data) => emailPattern.test(data),

    checkPasswordStrength = (data) => passwordStrengthPattern.test(data)