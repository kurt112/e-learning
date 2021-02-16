import {baseUrl} from "../../../../store/middleware/axios";


export const subjectBasedOnRoomShift = async (url, roomShiftID) => {

    return await baseUrl.get(url, {
        params: {
            roomShiftID
        }
    })
}

