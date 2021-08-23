/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    AdminStudentBodyDataQuery = (search, page,status) => {
        return {
            query: `
                    query{students(search:"${search}", page:${page}, status:${status}){
                        status,
                        student_id,
                            user{
                                 firstName,
                                 email,
                                 lastName,
                                 birthdate,
                            },
                            roomShifts{
                                grade,
                                section,
                                  teacher{
                                    user{
                                        firstName
                                        lastName
                                    }
                                  }
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