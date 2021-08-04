/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import bcrypt from 'bcryptjs'

const round = 12;

export const PasswordEncrypt = async (password) => {
   return await bcrypt.hash(password,round).then(newPassword => {
       return newPassword
    })
}

export const compareBCrypt = async (decrypt,encrypted) => {
    return await bcrypt.compare(encrypted,decrypt)
}
