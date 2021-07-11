/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    getRoom = (id) => {
        return {
            query: `
                    query{room(id:"${id}"){
                        roomName,
                        timeStart,
                        timeEnd
                        roomShifts{
                            grade,
                            section,
                            timeStart,
                            timeEnd,
                            students{
                                student_id,
                                    user{
                                        firstName,
                                        lastName
                                    }
                                },
                            teacher{
                                id,
                                    user{
                                        firstName,
                                        lastName
                                    }
                                }
                            roomShiftClasses{
                                id,
                                startTime,
                                 day,
                                endTime,
                                    subject{
                                        subjectName
                                    }
                                teacher{
                                    user{
                                        firstName,
                                        lastName
                                    }
                                }
                            }
                        }  
                    }
            }
        `}
    },
    getRoomBasic = (id) => {
        return {
            query: `
                    query{room(id:"${id}"){
                        id,
                        roomName,
                        timeStart,
                        timeEnd
                    }
            }
        `}
    }