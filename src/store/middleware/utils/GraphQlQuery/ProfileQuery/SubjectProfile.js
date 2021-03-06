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
                        subjectCode,
                        subjectName,
                        subjectMajor,
                        status
            }
        }
        `
        }
    }