/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/

export const
    getCurriculumBasic = (id) => {
        return {
            query: `
                    query{getCurriculum(id:"${id}"){
                        code,
                        name,
                        description,
                        subjects{
                            subjectCode
                            subjectName
                        }
                    }
            }`
        }
    },

    getCurriculumProfile = (id) => {
        return {
            query: `
                    query{getCurriculum(id:"${id}"){
                               name,
                               description,
                               roomShifts{
                                   grade,
                                   section,
                                   timeStart,
                                   timeEnd,
                                   teacher{
                                        id,
                                        user{
                                           firstName,
                                            lastName
                                        }
                                   }
                               }
                               subjects{
                                   id,
                                   subjectCode,
                                   subjectName
                               }
                    }
            }`
        }
    }