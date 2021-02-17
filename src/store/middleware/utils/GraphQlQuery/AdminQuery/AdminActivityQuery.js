export const
    AdminActivityBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{activities(search:"${search}", page:${page}){
                        classes{
                          roomShift{
                             grade,
                             section
                          },
                        subject{
                           subjectName
                          }
                        },
                        activity{
                            id,
                            activityTitle,
                            link,
                            date_end,
                            date_created,
                            status
                        }              
            }
        }
        `
        }
    },

    AdminActivityBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{activitySettings {
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    }