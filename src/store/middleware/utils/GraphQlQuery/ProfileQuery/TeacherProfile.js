export const
    getTeacher = (id) => {
        return {
            query: `
                    query{teacher(id:"${id}"){
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