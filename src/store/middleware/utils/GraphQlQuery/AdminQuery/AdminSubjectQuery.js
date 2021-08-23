/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    AdminSubjectBodyDataQuery = (search, page,status) => {
        return {
            query: `
                    query{subjects(search:"${search}", page:${page}, status:${status}){
                        subjectCode,
                        subjectName,
                        subjectMajor,
                        status
            }
        }
        `
        }
    },

    AdminSubjectBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{subjectSettings{
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    }
