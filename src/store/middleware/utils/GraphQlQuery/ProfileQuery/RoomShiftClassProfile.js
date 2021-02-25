export const
    getRoomShiftClass = (id) => {
        return {
            query: `
                    query{roomShiftClass(id:"${id}"){
                           roomShift{
                                grade,
                                section,
                                roomShiftName
                                room{
                                     roomName,
                                    }
                           },
                           subject{
                                subjectName
                                   },
                           day
                           startTime,
                           endTime    
                    }
            }
        `}
    }