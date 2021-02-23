export const
    getStudent = (id) => {
        return {
            query: `
                    query{student(id:"${id}"){
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