/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 17/08/2021, Tuesday
 **/
export const
    AdminListBodyDataQuery = (search, page,status) => {
        return {
            query: `
                    query{getUsersWithRole(search:"${search}", page:${page},role:"Admin",status:${status}){
                       id,
                       lastName,
                       email,
                       firstName,
                       birthdate,
                       accountNotLocked
                    }
       }`
        }
    },
    AdminBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{userSettings{
                            totalPages,
                            totalElements,
                            currentPage
                    }
            }`
        }
    }