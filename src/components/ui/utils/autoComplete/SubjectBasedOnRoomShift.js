/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {baseUrl} from "../../../../store/middleware/axios";


export const subjectBasedOnRoomShift = async (url, roomShiftID) => {

    return await baseUrl.get(url, {
        params: {
            roomShiftID
        }
    })
}

