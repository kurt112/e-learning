export const
    AdminRoomClassBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{roomClasses(search:"${search}", page:${page}){
                           id,
                           roomShift{
                              roomShiftName,
                              grade,
                              section
                              room{
                                roomName
                              }
                           },
                           subject{
                              subjectName
                           },
                           day,
                           startTime,
                           endTime
            }
        }
        `
        }
    },

    AdminRoomClassBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{roomClassesSettings {
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    }