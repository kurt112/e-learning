export const
    TeacherAssignmentBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{roomShiftClassAssignmentSettings{
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
                    query{getRoomShiftClassAssignmentByTeacher(search:"${search}",email:"${email}", page:${page}){
                            code,
                            lowGrade,
                            highGrade,
                            sem,
                            quarter,
                            createdAt,
                            deadline,
                            description,
                            resource{
                                code,
                                name
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
