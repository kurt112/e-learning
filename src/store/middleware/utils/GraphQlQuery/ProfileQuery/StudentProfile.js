/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    getStudent = (email) => {
        return {
            query: `
                    query{getStudentByUserEmail(email:"${email}"){
                    studentGrades{
                        grade,
                    roomShiftClass{
                        teacher{
                            user{
                            firstName,
                            lastName
                        }
                    },
                    subject{
                        subjectName
                    }
                    }
                     },
                     classAttendances{
                        student_class{
                            roomShift{
                                grade,
                                section
                            },
                            subject{
                                subjectName
                            },
                                startTime,
                                endTime
                        }
                                createdAt
                     },
                         user{
                                id,
                                firstName,
                                lastName,
                                email,
                                createdAt,
                                birthdate,
                                picture,
                                password,
                                gender,
                                middleName
                         },
                         roomShifts{
                                grade,
                                section
                         }                         
                    }
            }
        `
        }
    }