export const
    AdminRoomShiftBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{roomShifts(search:"${search}", page:${page}){
                        id,
                            room{
                                   roomName
                        },
                        roomShiftName,
                        grade,
                        section,
                        timeStart,
                        timeEnd
            }
        }
        `
        }
    },

    AdminRoomShiftBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{roomShiftsSettings{
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    }
