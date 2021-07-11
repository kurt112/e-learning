/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    AdminRoomBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{rooms(search:"${search}", page:${page}){
                            id,
                            roomName,
                            timeEnd,
                            timeStart,
            }
        }
        `
        }
    },

    AdminRoomBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{roomSettings {
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    }