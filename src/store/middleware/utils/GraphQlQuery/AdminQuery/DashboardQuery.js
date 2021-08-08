/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 08/08/2021, Sunday
 **/

export const
    dashboardQuery = (id) => {
        return {
            query: `
                        query{getDashBoard(id:"${id}"){
                                classes_count,
                                room_count,
                                student_count,
                                subject_count,
                                teacher_count
                    }
       }`  }
    }