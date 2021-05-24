export const
    getTeacherResource = (search, email, page) => {
        return {
            query: `
                    query{getTeacherResources(search:"${search}",email:"${email}", page:${page}){
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
