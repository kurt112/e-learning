export const
    getStudentDataByEmail = (email) => {
        return {
            query: `
                    query{
                       getStudentByUserID(userID:"${email}") {
                            roomShiftClasses{
                                id,
                                day,
                                startTime,
                                endTime,
                                  subject{
                                    subjectName,
                                    subjectCode
                                  }
                                roomShift{
                                    id,
                                    grade,
                                    section,
                                    room{
                                        id
                                    }
                                },
                                teacher{
                                  user{
                                    firstName,
                                    lastName
                                  }
                                }
                            }          
                       }
                    }
        `
        }
    }