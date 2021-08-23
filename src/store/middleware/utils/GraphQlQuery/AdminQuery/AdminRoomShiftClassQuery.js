/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    AdminRoomClassBodyDataQuery = (search, page, status) => {
        return {
            query: `
                    query{roomShiftClasses(search:"${search}", page:${page}, status:${status}){
                           id,
                           day,
                           startTime,
                           endTime,
                           status,
                           roomShift{
                              roomShiftName,
                              grade,
                              section
                              room{
                                roomName,
                                id
                              }
                           },
                           subject{
                              subjectName,
                              subjectCode
                           },
                           teacher{
                                user{
                                    firstName,
                                    lastName
                                }
                           }
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