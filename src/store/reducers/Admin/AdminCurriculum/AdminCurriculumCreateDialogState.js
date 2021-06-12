import state from '../../__StateGlobal/AdminTableDialogState'
import * as actions from '../../../ActionType/__ActionTypeGlobal/DialogActionType'
import * as curriculumAction from '../../../ActionType/Admin/Curriculum/CreateCurriculumDialogActionType'
import {Curriculum_Create} from '../../../utils/Specify'
import {updateObject} from "../../../utils/UpdateObject";

const newState = new state();

delete newState.init_state.id

const init_state ={
    name:'',
    description: '',
    ...newState.init_state,

}



const reducer = (state=init_state, action) => {

    switch (action.type){
        case actions.ADMIN_DIALOG_REGISTER(Curriculum_Create): return newState.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(Curriculum_Create): return newState.failRegister(state, action)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(Curriculum_Create): return newState.successRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Curriculum_Create): return newState.handleClose(state,action)

        case curriculumAction.CHANGE_DESCRIPTION: return updateObject(state, {description: action.data})
        case curriculumAction.CHANGE_NAME: return updateObject(state, {name: action.data})


        default: return state;
    }

}

export default reducer