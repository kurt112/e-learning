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
    }