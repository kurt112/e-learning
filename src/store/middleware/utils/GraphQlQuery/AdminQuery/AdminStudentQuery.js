/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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