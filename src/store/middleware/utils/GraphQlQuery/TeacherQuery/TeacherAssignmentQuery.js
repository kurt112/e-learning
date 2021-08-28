/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    TeacherAssignmentBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{teacherAssignmentSettings{
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    },

    getTeacherAssignments = (search, email, page) => {
        return {
            query: `
                    query{getTeacherAssignment(search:"${search}",email:"${email}", page:${page}){
                            code,
                            lowGrade,
                            highGrade,
                            sem,
                            quarter,
                            createdAt,
                            deadLine,
                            description,
                            resource{
                                code,
                                location
                            },
                            roomShiftClass{
                                roomShift{
                                    grade,
                                    section
                                }
                            }        
            }
        }
        `
        }
    },
    getTeacherExamToGrade = (email) => {
        return {
            query: `
                    query{getTeacherExamToGrade(email:"${email}"){
                           id,
                           status,
                           response,
                           submittedAt,
                           location,
                           grade,
                           student{
                               user{
                                  firstName,
                                  lastName
                               }
                           },
                           exam{
                           description,
                           highGrade,
                           lowGrade,
                           roomShiftClass{
                               subject{
                                   subjectName
                               }
                               teacher{
                                    user{
                                        firstName,
                                        lastName
                                    }
                               }
                               roomShift{
                                    grade,
                                    section
                               }
                           },
                           resource{
                               name,
                               type
                           }
                       }
                    }
            }`
        }
    },
    getTeacherQuizToGrade = (email) => {
        return {
            query: `
                    query{getTeacherQuizToGrade(email:"${email}"){
                           id,
                           status,
                           response,
                           submittedAt,
                           location,
                           grade,
                           student{
                               user{
                                  firstName,
                                  lastName
                               }
                           },
                           quiz{
                           description,
                           highGrade,
                           lowGrade,
                           roomShiftClass{
                               subject{
                                   subjectName
                               }
                               teacher{
                                    user{
                                        firstName,
                                        lastName
                                    }
                               }
                               roomShift{
                                    grade,
                                    section
                               }
                           },
                           resource{
                               name,
                               type
                           }
                       }
                    }
            }`
        }
    },
    getTeacherAssignmentToGrade = (email) => {
        return {
            query: `
                    query{getTeacherAssignmentToGrade(email:"${email}"){
                           id,
                           status,
                           response,
                           submittedAt,
                           location,
                           grade,
                           student{
                               user{
                                  firstName,
                                  lastName
                               }
                           },
                           teacherAssignment{
                           description,
                           highGrade,
                           lowGrade,
                           roomShiftClass{
                               subject{
                                   subjectName
                               }
                               teacher{
                                    user{
                                        firstName,
                                        lastName
                                    }
                               }
                               roomShift{
                                    grade,
                                    section
                               }
                           },
                           resource{
                               name,
                               type
                           }
                       }
                    }
            }`
        }
    }

