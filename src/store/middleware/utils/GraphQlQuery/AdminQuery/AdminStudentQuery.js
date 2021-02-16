export const
    AdminStudentBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{students(search:"${search}", page:${page}){
                        student_id,
                            user{
                                   firstName,
                                   email,
                                   lastName,
                                   birthdate,
                             }
                }
            }
        `
        }
    },

    AdminStudentBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{studentSettings{
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    }
