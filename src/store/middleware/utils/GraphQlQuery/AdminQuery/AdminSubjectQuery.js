/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    AdminSubjectBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{subjects(search:"${search}", page:${page}){
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
