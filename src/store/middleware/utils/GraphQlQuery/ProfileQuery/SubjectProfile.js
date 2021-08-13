/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/

export const
    getSubjectBasic = (code) => {
        return {
            query: `
                    query{getSubject(code:"${code}"){
                        id,
                        subjectCode,
                        subjectName,
                        subjectMajor,
                        status
            }
        }`
        }
    },
    getSubject = (code) => {
        return {
            query: `
                    query{getSubject(code:"${code}"){
                        id,
                        subjectCode,
                        subjectName,
                        subjectMajor,
                        status,
                         roomShiftClasses{
                                id,
                                startTime,
                                 day,
                                endTime,
                                    subject{
                                        subjectName
                                    }
                                teacher{
                                    user{
                                        firstName,
                                        lastName
                                    }
                                }
                         },
                          curriculumList{
                                name
                          }
                    }
        }`
        }
    },
    searchSubject = (search, page) => {
        return {
            query: `
                    query{searchSubject(search:"${search}", page:${page}){
                        id,
                        subjectCode,
                        subjectName
                    }
            }
        `
        }
    }