/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const
    AdminRoomShiftBodyDataQuery = (search, page) => {
        return {
            query: `
                    query{roomShifts(search:"${search}", page:${page}){
                        id,
                            room{
                                roomName
                            },
                        teacher{
                            user{
                                firstName,
                                lastName
                            }
                        },
                        roomShiftName,
                        grade,
                        section,
                        timeStart,
                        timeEnd
            }
        }
        `
        }
    },

    AdminRoomShiftBodyDataSettingsQuery = () => {
        return {
            query: `
                     query{roomShiftsSettings{
                            totalPages,
                            totalElements,
                            currentPage
            }
        }
        `
        }
    },

    getRoomShift = (shiftID) => {
        return {
            query: `
                    query{roomShift(id:"${shiftID}"){
                        id,
                        grade,
                        section,
                        students{
                            student_id,
                            user{
                              firstName,
                              lastName
                            }
                        }
            }
        }
        `
        }
    },
    getStudentsForRoomShift = (search) => {
        return {
            query: `
                    query{getStudentsForRoomShift(search:"${search}"){                      
                            student_id,
                            user{
                              firstName,
                              lastName
                            }
            }
        }
        `
        }
    },
    uploadStudentInRoomShift = (id,list) => {

        return {
            query: `.
                    query{uploadStudentsInRoomShift(roomShiftID:"${id}", students:"${list}"){
                        id,
                        grade,
                        section,
                        students{
                            student_id,
                            user{
                              firstName,
                              lastName
                            }
                        }
            }
        }
        `
        }
    }
