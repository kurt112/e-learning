export const
    getRoomShift = (id) => {
        return {
            query: `
                    query{roomShift(id:"${id}"){
                        roomShiftName
                        grade,
                        section,
                        timeStart,
                        timeEnd,
                        room {
                           roomName
                             }             
                    }
            }
        `}
    }