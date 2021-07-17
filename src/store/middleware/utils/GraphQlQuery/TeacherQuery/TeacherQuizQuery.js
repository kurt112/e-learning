/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    TeacherQuizBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{getTeacherQuizSettings{
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    },

    getTeacherQuiz = (search, email, page) => {
        return {
            query: `
                    query{getTeacherQuizzes(search:"${search}",email:"${email}", page:${page}){
                            code,
                            lowGrade,
                            highGrade,
                            sem,
                            quarter,
                            createdAt,
                            deadLine,
                            description,
                            resource{
                                location,
                                code
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
    }
