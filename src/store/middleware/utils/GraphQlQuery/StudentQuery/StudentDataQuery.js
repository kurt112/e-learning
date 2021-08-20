/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    getStudentAssignment = (email) => {
        return {
            query: `
                    query{
                       getStudentAssignment(email:"${email}") {
                            id,
                            grade,
                            location,
                            submittedAt,
                            status,
                            response,
                            teacherAssignment{
                                    createdAt,
                                    deadLine,
                                    lowGrade,
                                    code,
                                    description,
                                    resource{
                                        name,
                                        location,
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
            `
        }
    },
    getStudentClasses = (email,status) => {
        return {
            query: `
                    query{
                       getStudentClass(email:"${email}", status: ${status}) {
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
                    }`
        }
    }