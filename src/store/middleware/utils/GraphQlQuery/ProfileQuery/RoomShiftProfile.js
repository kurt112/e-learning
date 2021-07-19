/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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
    },

    getRoomShiftBasic = (id) => {
        return {
            query: `
                    query{roomShift(id:"${id}"){
                        id,
                        roomShiftName,
                        grade,
                        section,
                        timeStart,
                        timeEnd,
                        room {
                           id,
                           roomName
                        },
                        teacher{
                            id,
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
                        curriculum{
                            code,
                            name
                        }           
                    }   
            }
        `}
    }