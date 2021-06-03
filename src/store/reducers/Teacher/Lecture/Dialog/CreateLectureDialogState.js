import state from '../../../__StateGlobal/AdminTableDialogState'
import * as dialogAction from "../../../../ActionType/Teacher/GlobalActiontype";
import {Teacher_Lecture_Create} from "../../../../utils/Specify";
import {updateObject} from "../../../../utils/UpdateObject";
import * as globalActionDialog from "../../../../ActionType/__ActionTypeGlobal/DialogActionType";

const newState = new state()

const init_state = {
    resourceCode: '',
    classCode: '',
    sem: 1,
    quarter: 1,
    description: '',
    ...newState.init_state
}

const reducer = (state = init_state, action) => {
    switch (action.type) {
        // for changing data
        case dialogAction.CHANGE_RESOURCE_CODE(Teacher_Lecture_Create):
            return updateObject(state, {resourceCode: action.data})
        case dialogAction.CHANGE_CLASS_CODE(Teacher_Lecture_Create):
            return updateObject(state, {classCode: action.data})
        case dialogAction.CHANGE_SEMESTER(Teacher_Lecture_Create):
            return updateObject(state, {sem: action.data})
        case dialogAction.CHANGE_QUARTER(Teacher_Lecture_Create):
            return updateObject(state, {quarter: action.data})
        case dialogAction.CHANGE_DESCRIPTION(Teacher_Lecture_Create):
            return updateObject(state, {description: action.data})

        // for the state of dialog
        case globalActionDialog.ADMIN_DIALOG_REGISTER(Teacher_Lecture_Create):
            return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(Teacher_Lecture_Create):
            return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(Teacher_Lecture_Create): {
            state = updateObject(state, {
                resourceCode: '',
                classCode: '',
                sem: 1,
                quarter: 1,
                description: ''
            })

            return newState.successRegister(state)
        }
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Teacher_Lecture_Create):
            return newState.handleClose(state, action)

        default:
            return state;

    }

}

export default reducer
