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
                                firstName,
                                lastName,
                                email,
                                createdAt,
                                birthdate,
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