/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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
                                },
                                 teacherLectures{
                                   resource{
                                        code,
                                        name,
                                        teacher{
                                            user{
                                                firstName,
                                                lastName
                                            }
                                        }
                                   },
                                   code,
                                   createdAt,
                                   description,
                                   sem,
                                   quarter
                                },
                                teacherExams{
                                    resource{
                                       name,
                                       code,
                                       teacher{
                                        user{
                                            firstName,
                                            lastName
                                        }
                                    }
                                    },
                                    code,
                                    createdAt,
                                    deadLine,
                                    description,
                                    highGrade,
                                    lowGrade,
                                    sem,
                                    quarter
                                },
                                teacherQuizzes{
                                    resource{
                                        name,
                                        code,
                                        teacher{
                                        user{
                                            firstName,
                                            lastName
                                        }
                                    }
                                    },
                                    code,
                                    createdAt,
                                    deadLine,
                                    description,
                                    highGrade,
                                    lowGrade,
                                    sem,
                                    quarter
                                },
                                teacherAssignments{
                                    resource{
                                        name,
                                        code,
                                        teacher{
                                        user{
                                            firstName,
                                            lastName
                                        }
                                    }
                                    },
                                    code,
                                    createdAt,
                                    deadLine,
                                    description,
                                    highGrade,
                                    lowGrade,
                                    sem,
                                    quarter
                                }
                            }          
                       }
                    }
        `
        }
    }