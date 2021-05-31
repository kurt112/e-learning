import bcrypt from 'bcryptjs'

const round = 12;

export const PasswordEncrypt = async (password) => {
   return await bcrypt.hash(password,round).then(newPassword => {
       return newPassword
    })
}
