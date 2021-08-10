/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    getTeacher = (id) => {
        return {
            query: `
                    query{getTeacherByUserEmail(email:"${id}"){
                     classAttendances{
                        teacher_class{
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
                         }                         
                    }
            }
        `
        }
    }