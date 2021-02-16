export const
    AdminTeacherBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{teachers(search:"${search}", page:${page}){
                        id,
                            user{
                                   lastName,
                                   email,
                                   firstName,
                                   birthdate,
                }
            }
        }
        `
        }
    },

    AdminTeacherBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{teacherSettings{
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    }
