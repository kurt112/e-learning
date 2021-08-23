/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    AdminTeacherBodyDataQuery = (search, page,status) => {
        return {
            query: `
                    query{teachers(search:"${search}", page:${page}, status:${status}){
                        id,
                        status,
                        user{
                               lastName,
                               email,
                               firstName,
                               birthdate,
                        }
                    }
       }`  }
    },

    AdminTeacherBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{teacherSettings{
                            totalPages,
                            totalElements,
                            currentPage
                    }
            }`
        }
    }
