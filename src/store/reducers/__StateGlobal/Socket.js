/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 08/08/2021, Sunday
 **/
import {initSocketType} from "../../ActionType/__ActionTypeGlobal/ConfigActionType";
import {updateObject} from "../../utils/UpdateObject";

const data = {
    socket: null
}

const reducer = (state = data, action) => {
    switch (action.type){
        case initSocketType: {
            return updateObject(state,{socket:action.data})
        }
    }

    return state
}

export default reducer