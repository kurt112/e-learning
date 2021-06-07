export const
    getTeacherDataByEmail = (email) => {
        return {
            query: `
                    query{
                       getTeacherByUserEmail(email:"${email}") {
                             id
                      }
                   }
            `
        }
    },
    getTeacherClasses = (id,status) => {
        return {
            query: `
                    query{
                       getTeacherClasses(teacherId:"${id}",status:${status}) {
                                id,
                                day,
                                startTime,
                                endTime,
                                status,
                                subject{
                                    subjectName,
                                    subjectCode,
                                    subjectMajor
                                },
                            roomShift{
                                id,
                                grade,
                                section,
                                teacher{
                                    user{
                                        firstName,
                                        lastName
                                    }
                                },
                                room{
                                    id,
                                    roomName
                                }
                            }
                            students{
                            student_id,
                                user{
                                    email,
                                    firstName,
                                    lastName,
                                    suffix
                                }
                            }
                       }
            }
        `
        }
    }