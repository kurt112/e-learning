export const
    getRoom = (id) => {
        return {
            query: `
                    query{room(id:"${id}"){
                        roomName,
                        timeStart,
                        timeEnd                   
                    }
            }
        `}
    }