/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    getStudent = (email) => {
        return {
            query: `
                    query{getStudentByUserEmail(email:"${email}"){
                         user{
                                id,
                                firstName,
                                lastName,
                                email,
                                createdAt,
                                birthdate,
                                picture,
                                password
                         },
                         roomShifts{
                                grade,
                                section
                         }                         
                    }
            }
        `
        }
    }