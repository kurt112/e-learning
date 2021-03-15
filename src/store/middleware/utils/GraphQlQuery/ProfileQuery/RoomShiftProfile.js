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
                        },
                        teacher{
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
                        roomShiftClasses{
                            startTime,
                            endTime,
                            day,
                            teacher{
                                id
                                user{
                                   firstName,
                                   lastName
                                }
                            },
                            subject{
                                subjectName
                            }
                        }             
                    }   
            }
        `}
    }