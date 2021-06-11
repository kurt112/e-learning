export const
    AdminCurriculumBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{curriculums(search:"${search}", page:${page}){
                           code,
                           name,
                           description
            }
        }
        `
        }
    },

    AdminCurriculumBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{curriculumSettings {
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    }