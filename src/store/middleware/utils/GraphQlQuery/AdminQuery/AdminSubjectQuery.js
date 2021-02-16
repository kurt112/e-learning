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
