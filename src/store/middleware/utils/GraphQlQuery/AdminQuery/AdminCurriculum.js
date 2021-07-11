/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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