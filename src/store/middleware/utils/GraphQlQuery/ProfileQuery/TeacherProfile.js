export const
    getTeacher = (id) => {
        return {
            query: `
                    query{getTeacherByUserEmail(email:"${id}"){
                         user{
                                firstName,
                                lastName,
                                email,
                                registerDate,
                                birthdate,
                         }                         
                    }
            }
        `}
    }