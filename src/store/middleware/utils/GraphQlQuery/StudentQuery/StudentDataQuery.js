export const
    getStudentDataByEmail = (email) => {
        return {
            query: `
                    query{
                       getStudentByUserEmail(email:"${email}") {
                            studentActivities{
                            id,
                            status,
                            grade,
                            roomShiftClass{
                              roomShift{
                                grade,
                                section
                              },
                              subject{
                                subjectName
                              },
                              teacher{
                                id,
                                user{
                                  firstName,
                                  lastName
                                },        
                              },
                            },
                            activity{
                              activityTitle,
                              description,
                              date_end,
                              date_created,
                              type,
                              
                            }
                          },
                            roomShiftClasses{ 
                                id,
                                day,
                                startTime,
                                endTime,
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
                                    lastName
                                  }
                                }
                            }          
                       }
                    }
        `
        }
    }