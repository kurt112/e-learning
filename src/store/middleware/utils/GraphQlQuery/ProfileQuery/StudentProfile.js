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