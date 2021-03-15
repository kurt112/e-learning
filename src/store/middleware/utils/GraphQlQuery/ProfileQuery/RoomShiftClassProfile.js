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
                           activities{
                                id,
                                date_created,
                                date_end,
                                activityTitle
                           },
                           teacher{
                                id
                                user{
                                    firstName,
                                    lastName
                                }
                           },
                           students{
                                student_id,
                                user{
                                    firstName,
                                    lastName
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
        `}
    }