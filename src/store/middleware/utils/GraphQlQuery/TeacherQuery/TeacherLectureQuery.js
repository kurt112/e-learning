/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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
                             resource{
                                location,
                                code
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