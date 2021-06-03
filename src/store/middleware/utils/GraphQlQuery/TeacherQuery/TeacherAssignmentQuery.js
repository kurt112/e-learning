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
