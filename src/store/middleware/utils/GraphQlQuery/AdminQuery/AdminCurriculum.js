/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    AdminCurriculumBodyDataQuery = (search, page,status) => {
        return {
            query: `
                    query{curriculums(search:"${search}", page:${page}, status:${status}){
                           code,
                           name,
                           description,
                           status
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