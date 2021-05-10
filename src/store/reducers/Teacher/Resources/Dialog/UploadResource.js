import state from '../../../__StateGlobal/AdminTableDialogState'
import * as actions from '../../../../ActionType/Teacher/TeacherResource/TeacherResource'
import {updateObject} from "../../../../utils/UpdateObject";

const newState = new state();

delete newState.init_state.id

const init_state = {
    name: '',
    type: 'Lecture',
    description: '',
    file: '',
}
const reducer = (state = init_state, action) => {

    switch (action.type) {

        // data in dilaog1
        case actions.CHANGE_NAME:
            return updateObject(state, {name: action.data})
        case actions.CHANGE_TYPE:
            return updateObject(state, {type: action.data})
        case actions.CHANGE_FILE:
            return updateObject(state, {file: action.data})
        case actions.CHANGE_DESCRIPTION:
            return updateObject(state, {description: action.data})
        default:
            return state;
    }

}

export default reducer