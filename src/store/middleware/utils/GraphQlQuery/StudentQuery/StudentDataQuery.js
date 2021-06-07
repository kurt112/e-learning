export const
    getStudentDataByEmail = (email) => {
        return {
            query: `
                    query{
                       getStudentByUserEmail(email:"${email}") {
                            roomShiftClasses{ 
                                id,
                                day,
                                startTime,
                                endTime,
                                status,
                                  subject{
                                    subjectName,
                                    subjectCode,
                                    subjectMajor
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
                                  id,
                                  user{
                                    firstName,
                                    lastName,
                                    email,
                                  }
                                }
                            }          
                       }
                    }
        `
        }
    }