export const
    getTeacherLectureByEmail = (search, email, page) => {
        return {
            query: `
                    query{getTeacherLecture(search:"${search}",email:"${email}", page:${page}){
                             code,
                             description,
                             createdAt,
                             quarter,
                             sem,
                             resources{
                                code,
                            },
                            class_{
                                roomShift{
                                grade,
                                section
                            }
                        }
                    }
            }
      `}
    },
    TeacherLectureBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{getTeacherLectureSettings{
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    }