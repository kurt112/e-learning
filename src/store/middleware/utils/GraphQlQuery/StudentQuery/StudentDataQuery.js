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
                            grade,
                            teacherAssignment{
                                    createdAt,
                                    deadLine,
                                    highGrade,
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
    getStudentExam= (email) => {
        return {
            query: `
                    query{
                       getStudentExam(email:"${email}") {
                            id,
                            grade,
                            location,
                            submittedAt,
                            status,
                            response,
                            grade,
                            exam{
                                    createdAt,
                                    deadLine,
                                    lowGrade,
                                    code,
                                    highGrade,
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
    getStudentQuiz = (email) => {
        return {
            query: `
                    query{
                       getStudentQuiz(email:"${email}") {
                            id,
                            grade,
                            location,
                            submittedAt,
                            status,
                            response,
                            grade,
                            quiz{
                                    createdAt,
                                    deadLine,
                                    lowGrade,
                                    code,
                                    highGrade,
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
                                subject{
                                    subjectCode,
                                    subjectName
                                },
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
                                teacherLectures{
                                    createdAt,
                                     
                                    description
                                        resource{
                                            name,
                                            code,
                                            type,
                                            description,
                                            teacher{
                                                user{
                                                    firstName,
                                                    lastName
                                                }
                                            }
                                        }
                                    }
                                }          
                    }`
        }
    },
    getStudentGradeInClass =(classId, studentId) => {
        return {
            query: `
                    query{
                       getStudentGradeInClass(classId:"${classId}", studentId: "${studentId}") {
                            grade         
                      }          
                    }`
            }
    }