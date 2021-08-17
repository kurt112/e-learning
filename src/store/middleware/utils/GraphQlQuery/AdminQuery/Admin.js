/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 17/08/2021, Tuesday
 **/
export const
    AdminListBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{getUsersWithRole(search:"${search}", page:${page},role:"Admin"){
                       lastName,
                       email,
                       firstName,
                       birthdate,
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