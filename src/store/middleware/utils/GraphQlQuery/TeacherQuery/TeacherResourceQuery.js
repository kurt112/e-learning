/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    getTeacherResource = (search, email, page,status) => {
        return {
            query: `
                    query{getTeacherResources(search:"${search}",email:"${email}", page:${page}, status:${status}){
                            code,
                            description,
                            createdAt,
                            location,
                            status,
                            type,
                            name        
            }
        }
        `
        }
    }
