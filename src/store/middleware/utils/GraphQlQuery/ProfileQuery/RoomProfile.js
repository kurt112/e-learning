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
    }