/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 08/08/2021, Sunday
 **/
import {initSocketType} from "../../ActionType/__ActionTypeGlobal/ConfigActionType";

export const
    initSocket = (socket) => {
        return {
            type: initSocketType,
            data:socket
        }
    }
