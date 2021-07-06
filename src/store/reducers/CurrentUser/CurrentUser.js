import * as actions from '../../ActionType/CurrentUser/CurrenUserActionType'
import {updateObject} from "../../utils/UpdateObject";


const initState = {
    user: null,
    token: '',
}

const logout = (state) => {

    state = updateObject(state, {
        user: null,
        token: '',
    })
    localStorage.clear()
    window.location.reload()
    return state
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.CHANGE_USER:
            return updateObject(state, {user: action.data})
        case actions.CHANGE_TOKEN:
            return updateObject(state, {token: action.data})

        case actions.LOGOUT:
            return logout(state)

        default:
            return state;
    }

}

export default reducer;